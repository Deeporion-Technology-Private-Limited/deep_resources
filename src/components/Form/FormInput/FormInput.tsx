import React, { forwardRef, ReactNode, useState } from "react";
import { getInputConditionalStyles } from "../getInputStyles";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  variant: string;
  initialValue?: string;
  errors?: boolean;
  labelAsterisk?: ReactNode;
  label?: string;
  name: string;
  className?: string;
  labelClassName?: string;
  containerClass?: string;
  textClassName?: string;
  refCallback?: any;
  action?: ReactNode;
}

export const FormInput = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
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
    errors = false,
    labelAsterisk,
    labelClassName,
    containerClass,
    textClassName,
    refCallback,
    action,
    ...otherProps
  } = props;

  const [value, setValue] = useState(initialValue || "");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (props.onChange) {
      props.onChange(event);
    }
  };

  const classNames = getInputConditionalStyles(type, className, variant, errors);

  return (
    <div className={`relative ${containerClass || ''}`}>
      {label && (
        <label
          htmlFor={id}
          className={`block mb-1 font-medium ${labelClassName || ''}`}
        >
          {label}{" "}
          {labelAsterisk && <span className="text-red-500"> &#42;</span>}
        </label>
      )}
      <div className="relative">
        <input
          ref={ref}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          id={id}
          className={`${classNames} ${textClassName || ''}`}
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
          {...otherProps}
        />
      </div>
    </div>
  );
});

FormInput.displayName = "FormInput";

export default FormInput;