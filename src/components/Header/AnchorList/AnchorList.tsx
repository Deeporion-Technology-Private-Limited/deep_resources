import { VariantProps, cva } from "class-variance-authority";
import React, { forwardRef } from "react";
import { cn } from "../../../utils";

const anchorListStyles = cva(
  ["text-[18px]", "font-bold", "w-fit", "flex"],
  {
    variants: {
      variant: {
        row: "flex flex-row",
        column: "flex flex-col",
      },
    },
    defaultVariants: {
      variant: "row",
    },
  }
);

type AnchorListProps = {
  children: React.ReactNode;
  className?: string;
} & VariantProps<typeof anchorListStyles>;

export const AnchorList = forwardRef<HTMLUListElement, AnchorListProps>(
  ({ className, children, variant, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        className={cn(anchorListStyles({ variant, className }))}
        {...props}
      >
        {children}
      </ul>
    );
  }
);
