import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { ButtonColorScheme, ButtonSize, ButtonVariant } from "../Button/type";
import { cn } from "@/utils";
import { Add, Loader } from "../Button/ButtonImage/icon";

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
      colorscheme: {
        [ButtonColorScheme.Primary]: "text-white",
      },
    },
    compoundVariants: [
      {
        variant: ButtonVariant.DefaultPrimary,
        colorscheme: ButtonColorScheme.Primary,
      },
      {
        variant: ButtonVariant.DefaultSeconday,
        colorscheme: ButtonColorScheme.Primary,
        className: "bg-[#D0E3FF] text-[#334EAC]",
      },
      {
        variant: ButtonVariant.DefaultDarkBackground,
        colorscheme: ButtonColorScheme.Primary,
        className: "bg-[#FFFFFF] text-[#334EAC]",
      },
    ],
    defaultVariants: {
      variant: ButtonVariant.DefaultPrimary,
      size: ButtonSize.Medium,
      colorscheme: ButtonColorScheme.Primary,
    },
  }
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  colorscheme?: ButtonColorScheme;
  hover?: boolean;
  loader?: boolean;
  addRightIcon?: boolean;
  addLeftIcon?: boolean;
};

export const PrimaryButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = ButtonVariant.DefaultPrimary, size = ButtonSize.Medium, colorscheme = ButtonColorScheme.Primary, hover = false, loader = false, addRightIcon = false, addLeftIcon = false, disabled = false, className, children, ...props }, ref) => {
    const hoverClasses = !disabled && hover ? {
      [ButtonVariant.DefaultPrimary]: "hover:from-[#334EAC] hover:to-[#334EAC]",
      [ButtonVariant.DefaultSeconday]: "hover:bg-[#A3C0EB] hover:text-[#081F5C]",
      [ButtonVariant.DefaultDarkBackground]: "hover:text-[#081F5C]",
    }[variant] : '';

    const backgroundColor = disabled
      ? "text-[#72787F] bg-[#E8EBED]"
      : loader && variant !== ButtonVariant.DefaultSeconday
        ? variant === ButtonVariant.DefaultDarkBackground
          ? "bg-[#FFFFFF]"
          : "bg-[#7096D1]"
        : variant === ButtonVariant.DefaultSeconday
          ? "bg-[#D0E3FF]"
          : variant === ButtonVariant.DefaultDarkBackground
            ? "bg-[#FFFFFF]"
            : "bg-gradient-to-r from-[#7096D1] to-[#334EAC]";


    const iconColor = disabled ? "#E8EBED"
      : variant === ButtonVariant.DefaultSeconday || variant === ButtonVariant.DefaultDarkBackground
        ? "#334EAC"
        : "#FFFFFF";

    const hasText = children !== undefined && children !== null && children !== '';

    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size, colorscheme }), hoverClasses, backgroundColor, className)}
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