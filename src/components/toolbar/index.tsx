import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

const toolStyles = cva([
    "flex"
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
} & VariantProps<typeof toolStyles>;

export const Toolbar = forwardRef<HTMLDivElement, AnchorListProps>(
  ({ className, children, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(toolStyles({ variant, className }))}
        {...props}
      >
        {children}
      </div>
    );
  }
);
