import React from "react";
import { useState, forwardRef, useRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../../utils";

const tooltipStyles = cva([
  "w-full",
  "h-fit",
  "rounded",
  "p-2",
  "text-center",
  "bg-slate-300",
  "text-black",
  "shadow-lg",
  "absolute",
  "z-10",
]);

interface ITooltipProps extends VariantProps<typeof tooltipStyles> {
  content: string;
  children: React.ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  arrow?: boolean;
  trigger: "click" | "hover";
  className?: string;
}

export const Tooltip = forwardRef<HTMLDivElement, ITooltipProps>(
  (
    {
      children,
      content = "tooltip",
      placement,
      arrow = false,
      trigger,
      className,
      ...props
    },
    ref,
  ) => {
    const [visible, setVisible] = useState(false);
    const timeoutRef = useRef<number | null>(null);

    const showTooltip = () => {
      if (trigger === "hover") {
        timeoutRef.current = window.setTimeout(() => {
          setVisible(true);
        }, 100);
      } else if (trigger === "click") {
        setVisible(true);
      }
    };

    const hideTooltip = () => {
      if (trigger === "hover") {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
        setVisible(false);
      } else if (trigger === "click") {
        setVisible(false);
      }
    };

    const toggleTooltip = () => {
      setVisible(!visible);
    };

    return (
      <div
        className="relative"
        onMouseLeave={trigger === "hover" ? hideTooltip : undefined}
      >
        <div
          onMouseEnter={trigger === "hover" ? showTooltip : undefined}
          onClick={trigger === "click" ? toggleTooltip : undefined}
          className="inline-flex"
        >
          {children}
        </div>

        {visible && (
          <div data-testid="tooltip">
            <div
              ref={ref}
              className={cn(
                tooltipStyles({ className }),
                placementClasses(placement),
              )}
              {...props}
            >
              {content}
              {arrow && (
                <div data-testid="arrow" className={arrowClasses(placement)} />
              )}
            </div>
          </div>
        )}
      </div>
    );
  },
);

const placementClasses = (placement?: ITooltipProps["placement"]) => {
  const baseClasses = "transform -translate-x-1/2 left-1/2";
  switch (placement) {
    case "top":
      return `${baseClasses} bottom-full mb-2 translate-y-0`;
    case "bottom":
      return `${baseClasses} top-full mt-2 translate-y-0`;
    case "left":
      return `transform -translate-y-1/2 top-1/2 right-full mr-2 translate-x-0`;
    case "right":
      return `transform -translate-y-1/2 top-1/2 left-full ml-2 translate-x-0`;
    default:
      return `${baseClasses} top-full mt-2 translate-y-0`; // default to bottom
  }
};

const arrowClasses = (placement?: ITooltipProps["placement"]) => {
  const baseArrowClasses = "absolute w-0 h-0 border-8";
  switch (placement) {
    case "top":
      return `${baseArrowClasses} border-t-slate-300 border-transparent border-b-0 bottom-[-8px] left-1/2 transform -translate-x-1/2`;
    case "bottom":
      return `${baseArrowClasses} border-b-slate-300 border-transparent border-t-0 top-[-8px] left-1/2 transform -translate-x-1/2`;
    case "left":
      return `${baseArrowClasses} border-l-slate-300 border-transparent border-r-0 right-[-8px] top-1/2 transform -translate-y-1/2`;
    case "right":
      return `${baseArrowClasses} border-r-slate-300 border-transparent border-l-0 left-[-8px] top-1/2 transform -translate-y-1/2`;
    default:
      return `${baseArrowClasses} border-b-slate-300 border-transparent border-t-0 top-[-8px] left-1/2 transform -translate-x-1/2`; // default to bottom
  }
};


