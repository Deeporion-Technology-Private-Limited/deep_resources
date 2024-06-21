import React, { forwardRef, useState } from 'react';
import { InputType, InputVariant } from '../Input/type';
import { getConditionalStyles } from '../Input/getStyles';

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
    { className, type = 'text', search, eyeOpen, eye, prefix, variant = 'standard', value, ...props },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const maxLength = type === InputType.Otp ? 1 : undefined;

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      let validationError: string | null = null;

      switch (type) {
        case InputType.Email:
          if (!validateEmail(newValue)) {
            validationError = 'Please enter a valid email address';
          }
          break;
        case InputType.Phone:
          if (!validatePhoneNumber(newValue)) {
            validationError = 'Please enter a valid phone number';
          }
          break;
        case InputType.Numbers:
          if (!validateNumbers(newValue)) {
            validationError = 'Please enter a valid number';
          }
          break;
        default:
          break;
      }
      setError(validationError);
    };

    const validateEmail = (email: string): boolean => {
      if (!email.includes('@') || !email.includes('.')) {
        return false;
      }
      const atIndex: number = email.indexOf('@');
      const dotIndex: number = email.lastIndexOf('.');
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
          type={showPassword && type === InputType.Password ? 'text' : type}
          autoComplete="off"
          onBlur={handleBlur}
          className={classNames}
          maxLength={maxLength}
          {...props}
        />
        {renderAdditionalComponent()}
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
      </div>
    );
  }
);

export default Input;
