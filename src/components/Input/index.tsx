import React, { forwardRef, useState } from "react";
import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { InputType } from "../Input/type";
import { getConditionalStyles, inputStyles } from "../Input/getStyles";

type InputProps = ComponentProps<"input"> & {
  search?: React.ReactNode;
  eyeOpen?: React.ReactNode;
  eye?: React.ReactNode;
  prefix?: string;
  type: InputType;
  quantity: number;
} & VariantProps<typeof inputStyles>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      search,
      eyeOpen,
      eye,
      prefix,
      quantity,
      ...props
    },
    ref
  ) => {
    const [value, setValue] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const maxLength = type === "otp" ? 1 : undefined;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setValue(newValue);
    };

    const handleBlur = (e: any) => {
      const newValue = e.target.value;
      setValue(newValue);
      let validationError: string | null = null;

      switch (type) {
        case "email":
          if (!validateEmail(newValue)) {
            validationError = "Please enter a valid email address";
          }
          break;
        case "phone":
          if (!validatePhoneNumber(newValue)) {
            validationError = "Please enter a valid phone number";
          }
          break;
        case "numbers":
          if (!validateNumbers(newValue)) {
            validationError = "Please enter a valid number";
          }
          break;
        case "otp":
          if (!validateOTP(newValue)) {
            validationError = "Only One Number is accepted";
          }
          break;
        default:
          break;
      }
      setError(validationError);
    };

    const handleFocus = () => {
      setError(null);
    };

    const validateEmail = (email: string): boolean => {
      if (!email.includes("@") || !email.includes(".")) {
        return false;
      }
      const atIndex: number = email.indexOf("@");
      const dotIndex: number = email.lastIndexOf(".");
      if (dotIndex < atIndex) {
        return false;
      }
      return true;
    };

    const validatePhoneNumber = (phoneNumber: string): boolean => {
      if (phoneNumber.length !== 10 || isNaN(Number(phoneNumber))) {
        return false;
      }
      return true;
    };

    const validateNumbers = (numbers: string): boolean => {
      for (const char of numbers) {
        if (isNaN(Number(char))) {
          return false;
        }
      }
      return true;
    };

    const validateOTP = (otp: string): boolean => {
      return otp.length === 1 && !isNaN(Number(otp));
    };

    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const classNames = getConditionalStyles(type, value, className);

    const renderAdditionalComponent = () => {
      switch (type) {
        case "search icon":
          return (
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
              {search}
            </div>
          );
        case "password":
          return (
            <div
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? eye : eyeOpen}
            </div>
          );
        case "prefix":
          return (
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
              {prefix}
            </div>
          );
        default:
          return null;
      }
    };

    return (
      <div className="relative">
        <input
          ref={ref}
          type={showPassword && type === InputType.Password ? "text" : type}
          value={value}
          autoComplete="off"
          onBlur={handleBlur}
          className={classNames}
          maxLength={maxLength}
          {...props}
          onChange={handleChange}
          onFocus={handleFocus}
        />
        {renderAdditionalComponent()}
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    );
  }
);

export default Input;
