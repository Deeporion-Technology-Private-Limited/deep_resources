import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";
import {Box} from "@/components"

const toolStyles = cva(["flex", "items-center", " justify-between", "pl-8"], {
  variants: {
    variant: {
      row: "flex flex-row",
      column: "flex flex-col",
    },
    size: {
      sm: "w-64",
      md: "w-96", 
      lg: "w-128",
      xl: "w-[668px]",
      full: "100%"
    },
  },
  defaultVariants: {
    variant: "row",
    size: "full"
  },
});

type AnchorListProps = {
  children: React.ReactNode;
  className?: string;
} & VariantProps<typeof toolStyles>;

export const Toolbar = forwardRef<HTMLDivElement, AnchorListProps>(
  ({ className, children, variant, size, ...props }, ref) => {
    return (
      <Box className="w-fit">
        <Box
          ref={ref}
          className={cn(toolStyles({ variant, size, className }))}
          {...props}
        >
          {children}
        </Box>
      </Box>
    );
  }
);
