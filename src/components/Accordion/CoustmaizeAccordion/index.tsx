import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentProps, forwardRef, useState } from "react";
import { AccordionTypes } from "../AccordionTypes";

const coustomizeAccordioStyle = cva(
  [
    "h-fit",
    "border",
    "py-2",
    "shadow-sm",
    "text-sm",
    "px-2",
    "flex",
    "justify-between",
    "items-center",
    "w-full",
  ],
  {
    variants: {
      variant: {
        [AccordionTypes.Arrow]: "",
      },
    },
    compoundVariants: [
      {
        variant: AccordionTypes.Arrow,
      }
    ],
    defaultVariants: {
      variant: AccordionTypes.Arrow,
    },
  }
);

type CoustomizeAccordioProps = ComponentProps<"div"> & VariantProps<typeof coustomizeAccordioStyle> & {
  variant?: AccordionTypes;
  children: string;
  content?: any;
  Icon: React.ReactNode;
  childClassName?: string; 
};

export const CoustomizeAccordion = forwardRef<HTMLDivElement, CoustomizeAccordioProps>(
  ({ variant, content, className, Icon, children, childClassName, ...props }, ref) => {

    const [handleButton, setHandleButton] = useState(false);

    const handleClick = () => setHandleButton(!handleButton);

    return (
      <div className="w-full">
        <div
          ref={ref}
          className={cn(coustomizeAccordioStyle({ variant, className }))}
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
              <div className="px-2 py-1">
                {content}
              </div>
          </div>
        )}
      </div>
    );
  }
);

export default CoustomizeAccordion;