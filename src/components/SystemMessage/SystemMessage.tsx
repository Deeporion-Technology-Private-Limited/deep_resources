import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { ChipCloseBlack, CloseRed, CloseYellow } from "./systemIcon/icon";
import { messageColor, systemMessageSize, systemMessageTypes } from "../types";
import { cn } from "../../utils";

const systemMessageStyle = cva(
  [
    "w-[360px]",
    "h-fit",
    "b-[0px, 0px, 0px, 4px]",
    "p-[12px, 16px, 12px, 16px]",
    "rounded",
    "gap-[8px]",
    "border-l-[4px]",
    "border-t-[0.5px]",
    "border-b-[0.5px]",
    "border-r-[0.5px]",
  ],
  {
    variants: {
      variant: {
        [systemMessageTypes.error]: "",
        [systemMessageTypes.warning]: "",
        [systemMessageTypes.information]: "",
      },
      size: {
              sm: systemMessageSize.small ,
             md: systemMessageSize.medium,
            lg:systemMessageSize.large ,
      },
      colorscheme: {
        primary: messageColor.Primary ,
      },
    },
    compoundVariants: [
      {
        variant: systemMessageTypes.error,
        className: " text-[#DC2626] gap-2 border-l-[#DC2626]  bg-[#FEE2E2]", 
      },
      {
        variant: systemMessageTypes.warning,
        className: "text-[#D97706]  border-l-[#D97706]  bg-[#FEF3C7] gap-2",
      },
      {
        variant: systemMessageTypes.information,
        className:"border-l-[#8833FF] text-black  gap-2",
      },
    ],
    defaultVariants: {
      variant:systemMessageTypes.error,
      size: "sm",
      colorscheme: "primary",
    },
  }
);

type SystemMessageProps = ComponentProps<"div"> &
  VariantProps<typeof systemMessageStyle> & { addRightIcon?: boolean , handleClose:()=>void};

export const SystemMessage = forwardRef<HTMLDivElement, SystemMessageProps>(
  (
    {
      variant = systemMessageTypes.error,
      size,
      colorscheme,
      className,
      handleClose,
      addRightIcon = false,
      children,
      ...props
    },
    ref
  ) => {


    const iconChange = variant === systemMessageTypes.error ?  <CloseRed handleClick={handleClose}/> : 
    variant === systemMessageTypes.warning ? <CloseYellow handleClick={handleClose}/> : <ChipCloseBlack handleClick={handleClose}/>



    return (
      <div
        ref={ref}
        className={cn(systemMessageStyle({ variant, size, colorscheme, className }))}
        {...props}
      >
       <div className="flex gap-2">
       <div>{children}</div>
        <button>
        {addRightIcon && iconChange}
        </button>
       </div>
        
      </div>
    );
  }
);
