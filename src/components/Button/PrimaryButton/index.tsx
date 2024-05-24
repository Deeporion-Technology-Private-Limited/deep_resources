import { ButtonColorScheme, ButtonSize, ButtonVariant } from "@/components/type";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import loaderImg from "../Image/loader.png";
import rightIconImg from "../Image/rightArrow.png";
import addImg from "../Image/Add.png";

const buttonStyles = cva(
  [
    "w-full",
    "rounded-md",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
    "flex",
    "items-center",
    "justify-center"
  ],
  {
    variants: {
      variant: {
        [ButtonVariant.DefaultNoIcon]: "",
        [ButtonVariant.DefaultRightIcon]: "border-2",
        [ButtonVariant.DefaultLeftIcon]: "transition-colors duration-300",
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
        variant: ButtonVariant.DefaultNoIcon,
        colorscheme: ButtonColorScheme.Primary,
      },
      {
        variant: ButtonVariant.DefaultRightIcon,
        colorscheme: ButtonColorScheme.Primary,
        className: "text-primary-600 border-primary-500 bg-transparent",
      },
      {
        variant: ButtonVariant.DefaultLeftIcon,
        colorscheme: ButtonColorScheme.Primary,
        className: "text-primary-600 bg-transparent",
      },
    ],
    defaultVariants: {
      variant: ButtonVariant.DefaultNoIcon,
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
  rightIcon?: boolean;
  addIcon?: boolean;
};

export const PrimaryButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = ButtonVariant.DefaultNoIcon, size = ButtonSize.Medium, colorscheme = ButtonColorScheme.Primary, hover = false, loader = false, rightIcon = false, addIcon = false, className, children, ...props }, ref) => {
    const hoverClasses = hover ? {
      [ButtonVariant.DefaultNoIcon]: "hover:from-[#334EAC] hover:to-[#334EAC]",
      [ButtonVariant.DefaultRightIcon]: "hover:bg-primary-100",
      [ButtonVariant.DefaultLeftIcon]: "hover:bg-primary-100",
    }[variant] : '';

    const backgroundColor = loader ? "bg-[#7096D1]" : "bg-gradient-to-r from-[#7096D1] to-[#334EAC]";    

    return (
      <button
        ref={ref}
        className={cn(buttonStyles({ variant, size, colorscheme }), hoverClasses,backgroundColor, className)}
        {...props}
      >
        {rightIcon && <img src={rightIconImg} alt="Right Icon" className="h-[15px] w-[15px] mr-2 order-first" />}
        <span>{children}</span>
        {loader && <img src={loaderImg} alt="Loading..." className="h-[15px] w-[15px] ml-2 order-last" />}
        {addIcon && <img src={addImg} alt="Add Icon" className="h-[15px] w-[15px] ml-2 order-last" />}
      </button>
    );
  }
);