import { cn } from "@/utils";
import { cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const logoStyles = cva([["w-fit", "text-[24px]", "font-bold"]]);

type LogoProps = ComponentProps<"div">;

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} {...props} className={cn(logoStyles({ className }))}>
        {children}
      </div>
    );
  }
);
