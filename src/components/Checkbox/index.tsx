import React, { ComponentProps, forwardRef, useState, useEffect } from "react";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonSize } from "../Button/type";

const inputStyles = cva(
  [""],
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
  type?: "checkbox" | "radio" | "toggle";
  label?: string;
  checked?: boolean;
  className?: string;
  labelClassname?: string;
  containerClassName?: string;
  inputClassName?: string;
  checkedClassName?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  labelPosition?: "before" | "after";
  value: string;
  fillColor?: string,
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
    value,
    type = "checkbox",
    containerClassName,
    inputClassName,
    checkedClassName,
    onChange,
    labelPosition = "after",
    fillColor,
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
      <div className={cn(
        "flex items-center justify-center relative",
        {
          "w-8 h-8 rounded-lg border-2 border-[#a67b5b]": type === "checkbox" && !isChecked && !disabled,
          "w-8 h-8 rounded-lg border-2 border-[#a67b5b] bg-[#4a3224]": type === "checkbox" && isChecked && !disabled,
          "w-8 h-8 rounded-full border-2 border-[#a67b5b]": type === "radio" && !isChecked && !disabled,
          "w-8 h-8 rounded-full border-2 border-[#a67b5b] bg-[#4a3224]": type === "radio" && isChecked && !disabled,
          "w-16 h-9 rounded-full border-2 border-[#a67b5b] bg-[#ccc]": type === "toggle" && !isChecked && !disabled,
          "w-16 h-9 rounded-full border-2 border-[#a67b5b] bg-[#4a3224]": type === "toggle" && isChecked && !disabled,
          "w-8 h-8 rounded-lg border-2 border-gray-400 bg-gray-200 cursor-not-allowed opacity-50": type === "checkbox" && disabled,
          "w-8 h-8 rounded-full border-2 border-gray-400 bg-gray-200 cursor-not-allowed opacity-50": type === "radio" && disabled,
          "w-16 h-8 rounded-full border-2 border-gray-400 bg-gray-200 cursor-not-allowed opacity-50": type === "toggle" && disabled,
        },
        containerClassName
      )}>
        <input
          ref={ref}
          id={value}
          type={type === "toggle" ? "checkbox" : type}
          disabled={disabled}
          checked={isChecked}
          value={value}
          onChange={handleChange}
          className={cn("opacity-0 absolute w-full h-full cursor-pointer", inputClassName)}
          {...props}
        />
        {type === "checkbox" && isChecked && <div className={cn(checkedClassName)}>
          <svg width="16" height="16" viewBox="0 0 12 10" fill="red" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.061 0.422282C11.5182 0.732194 11.6375 1.35401 11.3276 1.81114L6.24303 9.31114C6.07698 9.55608 5.81098 9.71489 5.51659 9.74486C5.2222 9.77483 4.92965 9.67287 4.71765 9.46642L0.802215 5.65352C0.406544 5.26821 0.398144 4.6351 0.783453 4.23943C1.16876 3.84376 1.80187 3.83536 2.19754 4.22067L5.25759 7.20058L9.67216 0.688855C9.98207 0.23172 10.6039 0.112371 11.061 0.422282Z" fill={fillColor ?? "white"} />
          </svg>
        </div>}
        {type === "radio" && isChecked && <span className={cn("bg-white w-4 h-4 rounded-full", checkedClassName)}></span>}
        {type === "toggle" && (
          <span className={cn(
            "absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-300",
            {
              "transform translate-x-8": isChecked,
            }
          , checkedClassName)}></span>
        )}
      </div>
    );

    const labelElement = label && (
      <label htmlFor={value} className={cn(`cursor-pointer ${labelClassname} ${disabled ? 'cursor-not-allowed opacity-50' : ''}`)}>
        {label}
      </label>
    );

    return (
      <div className={cn("flex items-center justify-between gap-4 text-center py-[10px] ", className)}>
        {labelPosition === "before" && labelElement}
        {inputElement}
        {labelPosition === "after" && labelElement}
      </div>
    );
  }
);
