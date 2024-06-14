import React, { ComponentProps, forwardRef, useState, useEffect } from "react";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonSize } from "../Button/type";

const inputStyles = cva(
  [
    "border",
    "rounded-lg",
    "cursor-pointer",
  ],
  {
    variants: {
      variant: {
        Basic: "",
        Disable: "cursor-not-allowed opacity-50",
      },
      size: {
        [ButtonSize.Small]: "h-[18px] w-[18px]",
        [ButtonSize.Medium]: "h-[25px] w-[25px]",
        [ButtonSize.Large]: "h-[32px] w-[32px]",
      },
    },
    defaultVariants: {
      variant: "Basic",
      size: ButtonSize.Small,
    },
  }
);

type InputProps = Omit<ComponentProps<"input">, "size"> & VariantProps<typeof inputStyles> & {
  type?: "checkbox" | "radio";
  label?: string;
  checked?: boolean;
  className?: string;
  labelClassname?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  labelPosition?: "before" | "after";
};

export const Checkbox = forwardRef<HTMLInputElement, InputProps>(
  ({
    variant,
    className,
    size,
    disabled,
    labelClassname,
    label,
    checked,
    type = "checkbox",
    onChange,
    labelPosition = "after",
    ...props
  }, ref) => {

    const [isChecked, setIsChecked] = useState(checked ?? false);

    useEffect(() => {
      if (checked !== undefined) {
        setIsChecked(checked);
      }
    }, [checked]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled) {
        setIsChecked(event.target.checked);
        if (onChange) {
          onChange(event);
        }
      }
    };

    const inputElement = (
        <input
          ref={ref}
          type={type}
          disabled={disabled}
          checked={isChecked}
          onChange={handleChange}
          className={cn(inputStyles({ variant, size, className }))}
          {...props}
        />
    );

    const labelElement = label && (
      <label htmlFor={props.id} className={labelClassname}>
        {label}
      </label>
    );

    return (
      <div className="flex items-center gap-4 text-center">
        {labelPosition === "before" && labelElement}
        {inputElement}
        {labelPosition === "after" && labelElement}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
