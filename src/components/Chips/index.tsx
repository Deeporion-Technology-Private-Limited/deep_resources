import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import {  CloseBlack, CloseBlue, CloseWhite } from "./ChipsImage/icon";


const chipsStyle= cva(
    [
      "w-full",
      "rounded-full",
      "font-semibold",
      "focus:outline-none",
      "disabled:cursor-not-allowed",
       "flex",
    "justify-center",
"items-center"],
    {
      variants: {
        variant: {
          solid: "",
          outline: "border-2",
          ghost: "transition-colors duration-300",
          addRightIcon : false,
    addLeftIcon : false,
        },
        size: {
          sm: "px-4 py-2 text-sm",
          md: "px-4 py-2 text-base",
          lg: "px-6 py-3 text-lg",
        },
        colorscheme: {
          primary: "text-white",
        },
      },
      compoundVariants: [
        {
          variant: "solid",
          colorscheme: "primary",
          className: "bg-[#D0E3FF] hover:bg-primary-600 text-[#334EAC] gap-2",
        },
        {
          variant: "outline",
          colorscheme: "primary",
          className:
            "text-[#081F5C] bg-[#E8EBED] gap-2",
        },
        {
          variant: "ghost",
          colorscheme: "primary",
          className: "text-primary-600 bg-gradient-to-r from-[#7096D1] to-[#334EAC] text-[#FFFFFF] gap-2",
        },
      ],
      defaultVariants: {
        variant: "solid",
        size: "sm",
        colorscheme: "primary",
      },
    }
  );

  


type ChipsProps = ComponentProps<"button"> & VariantProps<typeof chipsStyle>&{ addRightIcon?: boolean;
    addLeftIcon?: boolean;}

export const Chips = forwardRef<HTMLDivElement, ChipsProps>(
  ({ variant = "solid", size, colorscheme, className, addRightIcon = false, addLeftIcon = false,children, ...props }, ref) => {

   
 const hasText = children !== undefined && children !== null && children !== '';
 const iconChange =  variant === "solid"? <CloseBlue className={className}  />
 : variant === "outline" ?<CloseBlack className={className}   /> : <CloseWhite  className={className} />
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