import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, ReactNode, forwardRef } from "react";
import { CloseBlack, CloseBlue, CloseWhite } from "./ChipsImage/icon";
import { ChipsTypes, ChipsSize } from "./chipsTypes";

const chipsStyle = cva(
  [
    "w-full",
    "rounded-full",
    "font-semibold",
    "focus:outline-none",
    "disabled:cursor-not-allowed",
    "flex",
    "justify-center",
    "font-light",
    "items-center",
  ],
  {
    variants: {
      variant: {
        [ChipsTypes.default]: "",
        [ChipsTypes.not_active]: "",
        [ChipsTypes.active]: "",
        addRightIcon: false,
        addLeftIcon: false,
      },
      size: {
        [ChipsSize.small]: "px-3 py-0.5   text-sm",
        [ChipsSize.medium]: "px-4 py-2 text-base",
        [ChipsSize.large]: "px-6 py-3 text-lg",
      },
      colorscheme: {
        primary: "text-white",
      },
    },
    compoundVariants: [
      {
        variant: ChipsTypes.default,
        colorscheme: "primary",
        className: "bg-[#D0E3FF]  text-[#334EAC] gap-2 ",
      },
      {
        variant: ChipsTypes.not_active,
        colorscheme: "primary",
        className:
          "text-[#081F5C] bg-[#E8EBED] gap-2",
      },
      {
        variant: ChipsTypes.active,
        colorscheme: "primary",
        className: "text-primary-600 bg-gradient-to-r from-[#7096D1] to-[#334EAC] text-[#FFFFFF] gap-2",
      },
    ],
    defaultVariants: {
      variant: ChipsTypes.default,
      size: ChipsSize.small,
      colorscheme: "primary",
    },
  }
);




type ChipsProps = ComponentProps<"div"> & VariantProps<typeof chipsStyle> & {
  addRightIcon?: boolean;
  addLeftIcon?: boolean; 
  variant?: ChipsTypes;
  children?: ReactNode;
};

export const Chips = forwardRef<HTMLDivElement, ChipsProps>(
  ({ variant = ChipsTypes.default, size, colorscheme, className, addRightIcon = false, addLeftIcon = false, children, ...props }, ref) => {
    let hasText = false;

    switch (true) {
      case children !== undefined:
      case children !== null:
      case children !== '':
        hasText = true;
        break;
      default:
        hasText = false;
    }

    const iconChange = variant === ChipsTypes.default 
      ? <CloseBlue className={className} />
      : variant === ChipsTypes.not_active 
        ? <CloseBlack className={className} /> 
        : <CloseWhite className={className} />;

    return (
      <div
        ref={ref}
        className={cn(chipsStyle({ variant, size, colorscheme, className }))}
        {...props}
      >
        {addLeftIcon && iconChange}
        <span className={cn(hasText ? "" : "sr-only")}>{children}</span>
        {addRightIcon && iconChange}
      </div>
    );
  }
);

export default Chips;
