import React, { forwardRef, useState } from "react";
import { InputType, InputVariant } from "../types";
import { getConditionalStyles } from "../Input/getStyles";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  search?: React.ReactNode | string;
  eyeOpen?: React.ReactNode;
  eye?: React.ReactNode;
  prefix?: string;
  type: InputType;
  variant: InputVariant;
  value?: string;
  readOnly?: boolean;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(
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
      readOnly,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const maxLength = type === InputType.Otp ? 1 : undefined;

    const readOnlyClass = readOnly ? "read-only" : "";
    const classNames = `${getConditionalStyles(
      type,
      value,
      className,
      variant
    )} ${readOnlyClass}`;
    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const renderAdditionalComponent = () => {
      switch (type) {
        case InputType.SearchIcon:
          return (
            <div className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 transform">
              {search}
            </div>
          );
        case InputType.Password:
          return (
            <div
              className="absolute right-2 top-1/2 -translate-y-1/2 transform cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? eye : eyeOpen}
            </div>
          );
        case InputType.Prefix:
          return (
            <div className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 transform">
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
          value={value}
          ref={ref}
          type={showPassword && type === InputType.Password ? "text" : type}
          autoComplete="off"
          readOnly={readOnly}
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
