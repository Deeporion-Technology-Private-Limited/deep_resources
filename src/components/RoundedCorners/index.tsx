import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { BorderRadius } from "../types";
import {Box} from "@/components";

const roundedCornerStyles = cva(
  [
    "w-[128px]",
    "h-[128px]",
		"border",
		"border-[#CBD5E1]",
		"border-[1px]",
  ],
  {
    variants: {
      borderRadius: {
        [BorderRadius.None]: "rounded-none",
        [BorderRadius.Small]: "rounded-sm",
        [BorderRadius.Medium]: "rounded",
        [BorderRadius.MediumMD]: "rounded-md",
        [BorderRadius.Large]: "rounded-lg",
        [BorderRadius.XL]: "rounded-xl",
        [BorderRadius.DoubleXL]: "rounded-2xl",
        [BorderRadius.TripleXL]: "rounded-3xl",
        [BorderRadius.QuadrupleXL]: "rounded-4xl",
        [BorderRadius.Full]: "rounded-full",
      }, 
    },
    defaultVariants: {
      borderRadius: BorderRadius.None,
    },
  }
);

type RoundedCornersProps = ComponentProps<"div"> & VariantProps<typeof roundedCornerStyles> & {
  borderRadius?: BorderRadius;
};

export const RoundedCorners = forwardRef<HTMLDivElement, RoundedCornersProps>(
  ({ borderRadius = BorderRadius.None, className, children, ...props }, ref) => {

    return (
      <Box
        ref={ref}
        className={cn(roundedCornerStyles({ borderRadius }), className)}
        {...props}
      >
				{children}
      </Box>
    );
  }
);
