import React from "react";
import { cn } from "../../../utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { ButtonIconPosition, ButtonSize, ButtonVariant } from "../../types";

const buttonStyles = cva(
  [
    "w-full",
    "rounded-md",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
    "disabled:text-[#72787F]",
    "flex",
    "items-center",
    "justify-center",
  ],
  {
    variants: {
      variant: {
        [ButtonVariant.DefaultPrimary]: "",
        [ButtonVariant.DefaultSeconday]: "",
        [ButtonVariant.DefaultDarkBackground]: "border-2",
      },
      size: {
        [ButtonSize.Small]: "px-4 py-2 text-sm",
        [ButtonSize.Medium]: "px-4 py-2 text-base",
        [ButtonSize.Large]: "px-6 py-3 text-lg",
      },
      iconPosition: {
        [ButtonIconPosition.Left]: "flex-start",
        [ButtonIconPosition.Right]: "flex-end",
      },
    },
    compoundVariants: [
      {
        variant: ButtonVariant.DefaultPrimary,
        className: "text-[#FFFFFF]",
      },
      {
        variant: ButtonVariant.DefaultSeconday,
        className: "bg-[#D0E3FF] text-[#334EAC]",
      },
      {
        variant: ButtonVariant.DefaultDarkBackground,
        className: "bg-[#FFFFFF] text-[#334EAC]",
      },
    ],
    defaultVariants: {
      variant: ButtonVariant.DefaultPrimary,
      size: ButtonSize.Medium,
      iconPosition: ButtonIconPosition.Right,
    },
  }
);

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonStyles> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    hover?: boolean;
    iconUrl?: string | (() => React.JSX.Element);
    iconPosition?: ButtonIconPosition;
  };

const getButtonClasses = ({
  variant,
  size,
  hover,
  disabled,
  className,
}: {
  variant: ButtonVariant;
  size: ButtonSize;
  hover: boolean;
  disabled: boolean;
  iconPosition: ButtonIconPosition;
  className?: string;
}) => {
  const hoverClasses =
    !disabled && hover
      ? {
          [ButtonVariant.DefaultPrimary]:
            "hover:from-[#3F271E] hover:to-[#3F271E]",
          [ButtonVariant.DefaultSeconday]:
            "hover:bg-[#C4ACA1] hover:text-[#3F271E]",
          [ButtonVariant.DefaultDarkBackground]: "hover:text-[#3F271E]",
        }[variant]
      : "";

  const hasCustomBackgroundColor = className?.includes("bg-");

  const defaultBackgroundColor = disabled
    ? "text-[#72787F] bg-[#E8EBED]"
    : variant === ButtonVariant.DefaultSeconday
    ? "bg-[#EBE3E0] text-[#3F271E]"
    : variant === ButtonVariant.DefaultDarkBackground
    ? "bg-[#FFFFFF] text-[#3F271E]"
    : "bg-gradient-to-r from-[#BFA59A] to-[#3F271E]";

  const backgroundColor = hasCustomBackgroundColor
    ? ""
    : defaultBackgroundColor;

  return cn(
    buttonStyles({ variant, size }),
    hoverClasses,
    backgroundColor,
    className
  );
};

export const DefaultButton = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = ButtonVariant.DefaultSeconday,
      size = ButtonSize.Medium,
      hover = false,
      iconUrl,
      iconPosition = ButtonIconPosition.Left,
      disabled = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const buttonClasses = getButtonClasses({
      variant,
      size,
      hover,
      disabled,
      iconPosition,
      className,
    });
    const hasText =
      children !== undefined && children !== null && children !== "";

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={disabled}
        {...props}
      >
        {iconUrl && iconPosition === ButtonIconPosition.Left && (
          <img
            src={iconUrl as string}
            alt="Icon"
            className={cn(hasText ? "mr-2" : "")}
          />
        )}
        <span className={cn(hasText ? "" : "sr-only")}>{children}</span>
        {iconUrl && iconPosition === ButtonIconPosition.Right && (
          <img
            src={iconUrl as string}
            alt="Icon"
            className={cn(hasText ? "ml-2" : "")}
          />
        )}
      </button>
    );
  }
);
