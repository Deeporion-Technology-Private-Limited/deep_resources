import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

const iconStyles = cva([["flex", "w-fit"]]);

type IconProps = {
  iconUrl: string;
} & VariantProps<typeof iconStyles> &
  ComponentProps<"div">;

export const Icon = forwardRef<HTMLDivElement, IconProps>(
  ({ className, iconUrl, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(iconStyles({ className }))} {...props}>
        <img className="w-[24px] h-[24px]" src={iconUrl} alt="Icon" />
        <span className="text-[16px] font-bold">{children}</span>
      </div>
    );
  }
);
