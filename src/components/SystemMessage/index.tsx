import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { CloseBlack, CloseRed, CloseYellow } from "./systemIcon/icon";

const systemMessageStyle = cva(
  [
    "w-[360px]",
    "h-[60px]",
    "b-[0px, 0px, 0px, 4px]",
    "p-[12px, 16px, 12px, 16px]",
    "rounded",
    "gap-[8px]",
    "border-l-[4px]",
  ],
  {
    variants: {
      variant: {
        error: "",
        warning: "",
        information: "",
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
        variant: "error",
        colorscheme: "primary",
        className: " text-[#DC2626] gap-2 border-l-[#DC2626]  bg-[#FEE2E2]", 
      },
      {
        variant: "warning",
        colorscheme: "primary",
        className: "text-[#D97706]  border-l-[#D97706]  bg-[#FEF3C7] gap-2",
      },
      {
        variant: "information",
        colorscheme: "primary",
        className:
        "border-l-[#8833FF] text-black  gap-2",
      },
    ],
    defaultVariants: {
      variant: "error",
      size: "sm",
      colorscheme: "primary",
    },
  }
);

type SystemMessageProps = ComponentProps<"div"> &
  VariantProps<typeof systemMessageStyle> & { addRightIcon?: boolean };

export const SystemMessage = forwardRef<HTMLDivElement, SystemMessageProps>(
  (
    {
      variant = "error",
      size,
      colorscheme,
      className,
      addRightIcon = false,
      children,
      ...props
    },
    ref
  ) => {


    const iconChange = variant === "error" ?  <CloseRed/> : variant === "warning" ? <CloseYellow/> : <CloseBlack/>



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
