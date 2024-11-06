import React, { forwardRef, useState } from "react";
import { InputType, InputVariant } from "../types";
import { getConditionalStyles } from "../Input/getStyles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  search?: React.ReactNode;
  eyeOpen?: React.ReactNode;
  eye?: React.ReactNode;
  prefix?: string;
  type: InputType;
  variant: InputVariant;
  value: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = "text",
      search,
      eyeOpen,
      eye,
      prefix,
      variant = "standard",
      value,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const maxLength = type === InputType.Otp ? 1 : undefined;

    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const classNames = getConditionalStyles(type, value, className, variant);

    const renderAdditionalComponent = () => {
      switch (type) {
        case InputType.SearchIcon:
          return (
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
              {search}
            </div>
          );
        case InputType.Password:
          return (
            <div
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? eye : eyeOpen}
            </div>
          );
        case InputType.Prefix:
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
          autoComplete="off"
          className={classNames}
          maxLength={maxLength}
          {...props}
        />
        {renderAdditionalComponent()}
      </div>
    );
  }
);

export default Input;
