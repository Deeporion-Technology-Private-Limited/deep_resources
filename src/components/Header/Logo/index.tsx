import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";
import {Box} from "@/components"

const logoStyles = cva([["w-fit", "text-[24px]", "font-bold"]]);

type LogoProps = ComponentProps<"div">;

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Box ref={ref} {...props} className={cn(logoStyles({ className }))}>
        {children}
      </Box>
    );
  }
);
