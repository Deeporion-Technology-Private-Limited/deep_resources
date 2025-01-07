import { cn } from "@/utils";
import React, { FC, forwardRef } from "react";

interface ISeparatorProps {
  orientation?: "horizontal" | "vertical";
  textAlign?: "left" | "center" | "right";
  className?: string;
  color?: string;
  children?: React.ReactNode;
}

const Separator: FC<ISeparatorProps> = forwardRef(
  ({
    orientation = "horizontal",
    textAlign = "center",
    color = "bg-gray-300",
    className,
    children,
  }: ISeparatorProps): React.JSX.Element => {
    const isHorizontal = orientation === "horizontal";

    if (!children) {
      return (
        <div
          className={cn(
            isHorizontal ? "w-full h-[1px]" : "h-full w-[1px]",
            "flex-shrink-0",
            color,
            className
          )}
        />
      );
    }

    return (
      <div
        className={cn(
          "flex items-center w-full",
          isHorizontal ? "flex-row" : "flex-col",
          className
        )}
      >
        <div
          className={cn(
            isHorizontal ? "flex-1 h-[1px]" : "w-[1px] h-full",
            color
          )}
        />

        <span
          className={cn(
            "px-4",
            isHorizontal && textAlign === "left" && "order-first",
            isHorizontal && textAlign === "right" && "order-last",
            textAlign === "center" && "mx-auto"
          )}
        >
          {children}
        </span>

        <div
          className={cn(
            isHorizontal ? "flex-1 h-[1px]" : "w-[1px] h-full",
            color
          )}
        />
      </div>
    );
  }
);

export default Separator;
