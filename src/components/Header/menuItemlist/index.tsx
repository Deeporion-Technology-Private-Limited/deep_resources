import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

const anchorListStyles = cva(
  [
    "text-[12px]",
    "font-bold",
    "w-fit",
  ],
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
