import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const navBarStyles = cva([
  "w-full",
  "border",
  "h-[76px]",
  "flex",
  "justify-center",
  "items-center",
  "px-[40px]",
]);

type LogoImageProps = ComponentProps<"div"> &
  VariantProps<typeof navBarStyles>;

export const NavbarEcommerce = forwardRef<HTMLDivElement, LogoImageProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(navBarStyles({className}))} {...props}>
        <div className="flex justify-between items-center gap-12">
          {children}
        </div>
      </div>
    );
  }
);
