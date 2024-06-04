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

type InputProps = ComponentProps<"input"> & {
  search?: React.ReactNode;
  eye?: React.ReactNode;
  type?: "text" | "password" | "email" | "phone" | "numbers" | "search icon" | "date" | "search" | "Phone" | "number";
} & VariantProps<typeof inputStyles>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", search, eye, ...props }, ref) => {
    const [value, setValue] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = event.target.value;
      setValue(newValue);
      let validationError: string | null = null;

      switch (type) {
        case "email":
          if (newValue && !validateEmail(newValue)) {
            validationError = "Please enter a valid email address";
          }
          break;
        case "password":
          if (newValue && !validatePassword(newValue)) {
            validationError =
              "Password must be at least 8 characters long and contain at least one letter and one number";
          }
          break;
        case "phone":
          if (newValue && !validatePhoneNumber(newValue)) {
            validationError = "Please enter a valid phone number";
          }
          break;
        case "numbers":
          if (newValue && !validateNumbers(newValue)) {
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

    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
      <div className="relative">
        <input
          ref={ref}
          type={showPassword && type === "password" ? "text" : type}
          value={value}
          autoComplete="off"
          className={cn(
            inputStyles({ className }),
            type === "search icon" && !value ? "pl-10" : ""
          )}
          style={
            type === "search icon" && !value
              ? {
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "left center",
                  backgroundSize: "20px",
                  paddingLeft: "30px",
                }
              : {}
          }
          {...props}
          onChange={handleChange}
          onFocus={handleFocus}
        />
        {search && !value && (
          <div className="absolute left-2 top-1/2 transform -translate-y-1/2">{search}</div>
        )}
        {eye && (
          <div
            className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibility}
          >
            {eye}
          </div>
        )}
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    );
  }
);

export default Input;
