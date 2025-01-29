import React, { ComponentProps, forwardRef, useState, useEffect } from "react";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonSize } from "../Button";
import { FaCheck } from "react-icons/fa";

const inputStyles = cva([""], {
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
});

type InputProps = Omit<ComponentProps<"input">, "size"> &
  VariantProps<typeof inputStyles> & {
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
    fillColor?: string;
  };

export const Checkbox = forwardRef<HTMLInputElement, InputProps>(
  (
    {
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
    },
    ref
  ) => {
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
      <div
        className={cn(
          "flex items-center justify-center relative",
          {
            "w-8 h-8 rounded-lg border-2 border-[#a67b5b]":
              type === "checkbox" && !isChecked && !disabled,
            "w-8 h-8 rounded-lg border-2 border-[#a67b5b] bg-[#4a3224]":
              type === "checkbox" && isChecked && !disabled,
            "w-8 h-8 rounded-full border-2 border-[#a67b5b]":
              type === "radio" && !isChecked && !disabled,
            "w-8 h-8 rounded-full border-2 border-[#a67b5b] bg-[#4a3224]":
              type === "radio" && isChecked && !disabled,
            "w-16 h-9 rounded-full border-2 border-[#a67b5b] bg-[#ccc]":
              type === "toggle" && !isChecked && !disabled,
            "w-16 h-9 rounded-full border-2 border-[#a67b5b] bg-[#4a3224]":
              type === "toggle" && isChecked && !disabled,
            "w-8 h-8 rounded-lg border-2 border-gray-400 bg-gray-200 cursor-not-allowed opacity-50":
              type === "checkbox" && disabled,
            "w-8 h-8 rounded-full border-2 border-gray-400 bg-gray-200 cursor-not-allowed opacity-50":
              type === "radio" && disabled,
            "w-16 h-8 rounded-full border-2 border-gray-400 bg-gray-200 cursor-not-allowed opacity-50":
              type === "toggle" && disabled,
          },
          containerClassName
        )}
      >
        <input
          ref={ref}
          id={value}
          type={type === "toggle" ? "checkbox" : type}
          disabled={disabled}
          checked={isChecked}
          value={value}
          onChange={handleChange}
          className={cn(
            "opacity-0 absolute w-full h-full cursor-pointer",
            inputClassName
          )}
          {...props}
        />
        {type === "checkbox" && isChecked && (
          <div className={cn(checkedClassName)}>
            <FaCheck />
          </div>
        )}
        {type === "radio" && isChecked && (
          <span
            className={cn("bg-white w-4 h-4 rounded-full", checkedClassName)}
          ></span>
        )}
        {type === "toggle" && (
          <span
            className={cn(
              "absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-300",
              {
                "transform translate-x-8": isChecked,
              },
              checkedClassName
            )}
          ></span>
        )}
      </div>
    );

    const labelElement = label && (
      <label
        htmlFor={value}
        className={cn(
          `cursor-pointer ${labelClassname} ${disabled ? "cursor-not-allowed opacity-50" : ""}`
        )}
      >
        {label}
      </label>
    );

    return (
      <div
        className={cn(
          "flex items-center justify-between gap-4 text-center relative",
          className
        )}
      >
        {labelPosition === "before" && <div>{labelElement}</div>}
        <div>{inputElement}</div>
        {labelPosition === "after" && <div>{labelElement}</div>}
      </div>
    );
  }
);
