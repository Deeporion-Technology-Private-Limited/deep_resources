import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentProps } from "react";
import { cn } from "../../utils";
import { ChipsSize, ChipsTypes, chipscolour } from "../types";
import { CloseBlack, CloseWhite } from "./ChipsImage/icon";

const chipsStyle = cva(["w-fit", "h-fit", "flex", "items-center", "gap-3"], {
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
      md: ChipsSize.medium,
      lg: ChipsSize.large,
    },
    colorscheme: {
      primary: chipscolour.Primary,
    },
  },
  compoundVariants: [
    {
      variant: ChipsTypes.default,
      className: "bg-[#EBE3E0] text-[#3F271E]",
    },
    {
      variant: ChipsTypes.not_active,
      className: "text-[#081F5C] bg-[#E8EBED] gap-2 rounded-full px-2",
    },
    {
      variant: ChipsTypes.active,
      className:
        "text-primary-600 bg-gradient-to-r from-[#7096D1] to-[#334EAC] text-[#FFFFFF] gap-2",
    },
  ],
  defaultVariants: {
    variant: ChipsTypes.default,
    size: "sm",
    colorscheme: "primary",
  },
});

type ChipsProps = ComponentProps<"div"> &
  VariantProps<typeof chipsStyle> & {
    addRightIcon?: boolean;
    addLeftIcon?: boolean;
    variant: ChipsTypes;
    children?: string;
    handleClick?: () => void;
  };

export const Chips = React.forwardRef<HTMLDivElement, ChipsProps>(
  (
    {
      variant = ChipsTypes.default,
      size,
      colorscheme,
      className,
      handleClick,
      addRightIcon = false,
      addLeftIcon = false,
      children,
      ...props
    },
    ref
  ) => {
    const iconChange =
      variant === ChipsTypes.default ? (
        <CloseBlack handleClicked={handleClick} />
      ) : variant === ChipsTypes.not_active ? (
        <CloseBlack handleClicked={handleClick} />
      ) : (
        <CloseWhite handleClicked={handleClick} />
      );

    return (
      <div
        ref={ref}
        className={cn(chipsStyle({ variant, size, colorscheme, className }))}
        {...props}
      >
        {addLeftIcon && (
          <div className="mr-auto cursor-pointer">{iconChange}</div>
        )}
        <div>{children}</div>
        {addRightIcon && (
          <div className="ml-auto cursor-pointer">{iconChange}</div>
        )}
      </div>
    );
  }
);


