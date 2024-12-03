import React, { forwardRef, ReactNode, useState } from "react";
import { InputType, InputVariant } from "../../Layout";
import { getInputConditionalStyles } from "../getInputStyles";
import {OpenEye} from "../../Input/InputIcons/OpenEye";
import {CloseEye} from "../../Input/InputIcons/CloseEye";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  search?: React.ReactNode;
  type: InputType;
  variant: InputVariant;
  initialValue?: string;
  errors?: boolean;
  labelAsterisk?: ReactNode;
  label?: string;
  name: string;
  comp?: string;
  placeholder?: string;
  register?: any;
  className?: string;
  labelClassName?: string;
  containerClass?: string;
  textClassName?: string;
  refCallback?: any;
  action?: ReactNode;
  rows?: number;
}

export const PasswordInput = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      type,
      name,
      placeholder,
      initialValue,
      id,
      className,
      style,
      readOnly,
      disabled,
      required,
      autoFocus,
      size,
      pattern,
      form,
      title,
      onBlur,
      onFocus,
      variant,
      errors,
      labelAsterisk,
      comp,
      register,
      labelClassName,
      containerClass,
      textClassName,
      refCallback,
      action,
      rows,
      search,
      ...otherProps
    },
    ref
  ) => {
    const [value, setValue] = useState(initialValue || "");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const togglePasswordVisibility = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    };

    const classNames = getInputConditionalStyles(
      type,
      className,
      variant,
      errors || false // Ensure errors is defined
    );

    const renderAdditionalComponent = () => {
      if (type === InputType.Password) {
        return (
          <div
            className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
            onClick={togglePasswordVisibility}
            data-testid="PasswordToggleIcon"
          >
            {showPassword ? <OpenEye /> : <CloseEye />}
          </div>
        );
      }
      return null;
    };

    return (
      <div className={`relative ${containerClass}`}>
        {label && (
          <label
            htmlFor={id}
            className={`block mb-1 font-medium ${labelClassName}`}
          >
            {label}{" "}
            {labelAsterisk && <span className="text-red-500"> &#42;</span>}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            type={showPassword && type === InputType.Password ? "text" : type}
            name={name}
            value={value}
            placeholder={placeholder}
            id={id}
            className={`${classNames} ${textClassName}`}
            style={style}
            readOnly={readOnly}
            disabled={disabled}
            required={required}
            autoFocus={autoFocus}
            size={size}
            pattern={pattern}
            form={form}
            title={title}
            onChange={handleInputChange}
            onBlur={onBlur}
            onFocus={onFocus}
            {...register}
            {...otherProps}
            data-testid="Passwordtest"
          />
          {renderAdditionalComponent()}
        </div>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";
