import React, { forwardRef, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const inputStyles = cva([
  "w-full",
  "border",
  "border-gray-200",
  "p-2",
  "rounded-lg",
  "transition-all",
  "duration-100",
  "outline-none",
  "focus:outline-primary-500",
  "focus:border-transparent",
  "placeholder:text-gray-400",
  "placeholder:text-sm",
]);

const simpleOutlineStyles = cva([
  "w-full",
  "border",
  "border-gray-200",
  "p-2",
  "rounded-lg",
  "placeholder:text-gray-400",
  "placeholder:text-sm",
  "outline-none",
  "focus:outline-none",
  "focus:border-gray-200",
]);

type InputProps = ComponentProps<"input"> & {
  search?: React.ReactNode;
  eyeOpen?: React.ReactNode;
  eye?: React.ReactNode;
  prefix?: string;
  type?:
    | "text"
    | "password"
    | "email"
    | "phone"
    | "numbers"
    | "search icon"
    | "date"
    | "search"
    | "Phone"
    | "number"
    | "input"
    | "prefix";
} & VariantProps<typeof inputStyles>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type = "text", search, eyeOpen, eye, prefix, ...props },
    ref
  ) => {
    const [value, setValue] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

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

    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    function getConditionalStyles(
      type: string,
      value: any,
      className: string | undefined
    ): string {
      let styles = className ? `${className} ` : "";

      if (type === "input") {
        styles += simpleOutlineStyles();
      } else {
        styles += inputStyles();
      }

      if (type === "search icon" && !value) {
        styles += " pl-10";
      }

      if (type === "search icon") {
        styles += " pl-10";
      }

      if (type === "prefix") {
        styles += " pl-6";
      }

      return styles.trim();
    }

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
          type={showPassword && type === "password" ? "text" : type}
          value={value}
          autoComplete="off"
          onBlur={handleBlur}
          className={classNames}
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
