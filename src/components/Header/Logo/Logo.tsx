import { cva } from "class-variance-authority";
import React, { ComponentProps } from "react";
import { cn } from "../../../utils";
import { Box } from "../../Layout";

const logoStyles = cva([["w-fit", "text-[24px]", "font-bold"]]);

type LogoProps = ComponentProps<"div">;

export const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <Box
        ref={ref}
        {...props}
        className={cn(logoStyles({ className }))}
        data-testid="logo"
      >
        {children}
      </Box>
    );
  }
);
