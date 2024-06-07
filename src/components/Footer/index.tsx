import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import { Box } from "@/components";

const navBarStyles = cva([[
    "pl-[30px]",
    "text-[#36454f]",
    "text-[13px]",
    "max-w-[320px]"
]]);
type CustomerProps = ComponentProps<"div"> &
  VariantProps<typeof navBarStyles>;

export const Footer = forwardRef<HTMLDivElement, CustomerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        className={cn(navBarStyles({ className }))}
        {...props}
      >
        {children}
      </Box>
    );
  }
);
