import React, { forwardRef, useState } from "react";
import { cn } from "@/utils";
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

type InputProps = ComponentProps<"input"> & VariantProps<typeof inputStyles>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => {
    const [error, setError] = useState<string | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      let validationError: string | null = null;

      switch (type) {
        case "email":
          if (value && !validateEmail(value)) {
            validationError = "Please enter a valid email address";
          }
          break;
        case "password":
          if (value && !validatePassword(value)) {
            validationError =
              "Password must be at least 8 characters long and contain at least one letter and one number";
          }
          break;
        case "Phone number":
          if (value && !validatePhoneNumber(value)) {
            validationError = "Please enter a valid phone number";
          }
          break;
        case "numbers":
          if (value && !validateNumbers(value)) {
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

    const validateEmail = (email: string) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePassword = (password: string) => {
      return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    };

    const validatePhoneNumber = (phoneNumber: string) => {
      return /^\d{10}$/.test(phoneNumber);
    };

    const validateNumbers = (numbers: string) => {
      return /^\d*$/.test(numbers);
    };

    return (
      <div>
        <input
          ref={ref}
          type={type}
          autoComplete="off"
          className={cn(inputStyles({ className }))}
          {...props}
          onChange={handleChange}
          onFocus={handleFocus}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    );
  }
);

export default Input;
