import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentProps, forwardRef, useState } from "react";
import { AccordionTypes } from "./AccordionTypes";
import { Checkbox } from "../Checkbox";

const accordionStyle = cva(
  [
    "h-fit",
    "border",
    "py-2",
    "shadow-sm",
    "text-sm",
    "px-2",
    "flex", // Use flex for dynamic width
    "justify-between",
    "items-center",
    "w-full", // Full width
  ],
  {
    variants: {
      variant: {
        [AccordionTypes.Arrow]: "",
        [AccordionTypes.Cursor]: "",
        [AccordionTypes.Plus]: ""
      },
    },
    compoundVariants: [
      {
        variant: AccordionTypes.Arrow,
      },
      {
        variant: AccordionTypes.Cursor,
      },
      {
        variant: AccordionTypes.Plus,
      },
    ],
    defaultVariants: {
      variant: AccordionTypes.Arrow,
    },
  }
);

type AccordionProps = ComponentProps<"div"> & VariantProps<typeof accordionStyle> & {
  variant: AccordionTypes;
  children: string;
  content?: any;
  Icon: React.ReactNode;
  childClassName?: string; 
};

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ variant = AccordionTypes.Arrow, content, className, Icon, children, childClassName, ...props }, ref) => {

    const [handleButton, setHandleButton] = useState(false);

    const handleClick = () => setHandleButton(!handleButton);

    return (
      <div className="w-full"> {/* Ensure the accordion takes full width of its parent */}
        <div
          ref={ref}
          className={cn(accordionStyle({ variant, className }))}
          {...props}
          onClick={handleClick}
        >
          <div className="flex items-center justify-between w-full">
            <div>{children}</div>
            <div className={`duration-300 transform ${handleButton && "origin-center rotate-180"}`}>
              {Icon}
            </div>
          </div>
        </div>

        {handleButton && (
          <div className={cn("mt-1 w-full border bg-white", childClassName)}>
            {variant !== AccordionTypes.Plus ? (
              <div className="px-2 py-1">{content}</div>
            ) : (
              <div className="px-2 py-1">
                {content.map((item: any, i: number) => (
                  <div className="flex w-full justify-between" key={i}>
                    {item} <Checkbox value={item} />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

export default Accordion;
