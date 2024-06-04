import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const inputStyles = cva(
  [
    "w-[25px]",
    "h-[25px]",
    "border",
    "rounded-lg",
    "hover:border-neutral-900",
    "focus:outline-none",
  ],
  {
    variants: {
      variant: {
        Basic: "",
        Disable: true,
      },
      size: {
        sm: "h-[18px] w-[18px]",
        md: "h-[25px] w-[25px]",
        lg: "h-[32px] w-[32px]",
      },
    },
    compoundVariants: [
      {
        variant: "Basic",
      }
    ],
    defaultVariants: {
      variant: "Basic",
      size: "lg",
    },
  }
);

type InputProps = ComponentProps<"input"> & VariantProps<typeof inputStyles>;

export const Checkbox = forwardRef<HTMLInputElement, InputProps>(
  ({ variant, size, className }) => {
    return (
      <>
        <input
          type="checkbox"
          className={cn(inputStyles({ className, variant, size }))}
        />
      </>
    );
  }
);
