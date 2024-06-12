import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, ReactNode, forwardRef } from "react";
import { CloseBlack } from "./ChipsImage/icon";
import { CloseBlue } from "./ChipsImage/icon";
import { CloseWhite } from "./ChipsImage/icon";
import { ChipsTypes, ChipsSize, chipscolour } from "./chipsTypes";

const chipsStyle = cva(
  [
    "w-full",
    "focus:outline-none",
    "min-w-[80px]",
    "min-h-[20px]",
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
        sm: ChipsSize.small,
        md:ChipsSize.medium ,
        lg:ChipsSize.large ,
      },
      colorscheme: {
        primary: chipscolour.Primary,
      },
    },
    compoundVariants: [
      {
        variant: ChipsTypes.default,
        className: "bg-[#D0E3FF] text-[#334EAC] gap-1 ",
      },
      {
        variant: ChipsTypes.not_active,
        className: "text-[#081F5C] bg-[#E8EBED] gap-2 rounded-full px-2",
      },
      {
        variant: ChipsTypes.active,
        className: "text-primary-600 bg-gradient-to-r from-[#7096D1] to-[#334EAC] text-[#FFFFFF] gap-2",
      },
    ],
    defaultVariants: {
      variant: ChipsTypes.default,
      size:"sm",
      colorscheme: "primary",
    },
  }
);

type ChipsProps = ComponentProps<"div"> & VariantProps<typeof chipsStyle> & {
  addRightIcon?: boolean;
  addLeftIcon?: boolean; 
  variant?: ChipsTypes;
  children?: ReactNode;
  handleClick : ()=> void
};


export const Chips = forwardRef<HTMLDivElement, ChipsProps>(
  ({ variant = ChipsTypes.default, size, colorscheme, className,handleClick, 
    addRightIcon = false, addLeftIcon = false, children, ...props }, ref) => {


    const iconChange =
    variant === ChipsTypes.default ? (
      <CloseBlue className={className} handleClicked={handleClick} />
    ) : variant === ChipsTypes.not_active ? (
      <CloseBlack className={className} handleClicked={handleClick} />
    ) : (
      <CloseWhite className={className} handleClicked={handleClick} />
    )

    return (
      <div
        ref={ref}
        className={cn(chipsStyle({ variant, size, colorscheme, className }))}
        {...props}
      >
        {addLeftIcon && iconChange}
        <span>{children}</span>
        {addRightIcon && iconChange}
      </div>
    );
  }
);

export default Chips;
