import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { Add, Loader } from "./ButtonImage/icon";
import { ButtonSize, ButtonVariant } from "./type";

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
    "justify-center"
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
    },
    compoundVariants: [
      {
        variant: ButtonVariant.DefaultPrimary,
        className: "text-[#FFFFFF]"
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
    },
  }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  hover?: boolean;
  loader?: boolean;
  addRightIcon?: boolean;
  addLeftIcon?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = ButtonVariant.DefaultPrimary, size = ButtonSize.Medium, hover = false, loader = false, addRightIcon = false, addLeftIcon = false, disabled = false, className, children, ...props }, ref) => {
    const hoverClasses = !disabled && hover ? {
      [ButtonVariant.DefaultPrimary]: "hover:from-[#3F271E] hover:to-[#3F271E]",
      [ButtonVariant.DefaultSeconday]: "hover:bg-[#C4ACA1] hover:text-[#3F271E]",
      [ButtonVariant.DefaultDarkBackground]: "hover:text-[#3F271E]",
    }[variant] : '';

    const hasCustomBackgroundColor = className?.includes("bg-");

    const defaultBackgroundColor = disabled
      ? "text-[#72787F] bg-[#E8EBED]"
      : loader && variant !== ButtonVariant.DefaultSeconday
        ? variant === ButtonVariant.DefaultDarkBackground
          ? "bg-[#BFA59A]"
          : "bg-[#BFA59A]"
        : variant === ButtonVariant.DefaultSeconday
          ? "bg-[#EBE3E0] text-[#3F271E]"
          : variant === ButtonVariant.DefaultDarkBackground
            ? "bg-[#FFFFFF] text-[#3F271E]"
            : "bg-gradient-to-r from-[#BFA59A] to-[#3F271E]";

    const backgroundColor = hasCustomBackgroundColor ? "" : defaultBackgroundColor;

    const iconColor = disabled ? "#E8EBED"
      : variant === ButtonVariant.DefaultSeconday || variant === ButtonVariant.DefaultDarkBackground
        ? "#334EAC"
        : "#FFFFFF";

    const hasText = children !== undefined && children !== null && children !== '';

    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size }), hoverClasses, backgroundColor, className)}
        disabled={disabled}
        {...props}
      >
        {addRightIcon && <Add className={cn(hasText ? "mr-2 order-first" : "")} style={{ fill: iconColor }} />}
        <span className={cn(hasText ? "" : "sr-only")}>{children}</span>
        {loader && <Loader className={cn(hasText ? "ml-2 order-last" : "")} style={{ fill: iconColor }} />}
        {addLeftIcon && <Add className={cn(hasText ? "ml-2 order-last" : "")} style={{ fill: iconColor }} />}
      </button>
    );
  }
);
