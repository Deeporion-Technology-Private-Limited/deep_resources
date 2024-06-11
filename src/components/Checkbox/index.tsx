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
    "cursor-pointer"
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
      size: "md",
    },
  }
);

type InputProps = ComponentProps<"input"> & VariantProps<typeof inputStyles> & {
  label?: string
  type: string;
};

export const Checkbox = forwardRef<HTMLInputElement, InputProps>(
  ({ variant, size, type, className, disabled, label }) => {
    return (
      <div className="flex gap-2 items-center justify-center">
        <input
          type={type}
          disabled={disabled}
          className={cn(inputStyles({ className, variant, size }), disabled && "cursor-not-allowed")}
        />
        {label && <span>{label}</span>}
      </div>
    );
  }
);
