import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentProps, forwardRef, useState } from "react";
import { cn } from "../../../utils";
import { AccordionTypes } from "../../types";

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
    "w-[400px]",
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
      },
    ],
    defaultVariants: {
      variant: AccordionTypes.Arrow,
    },
  }
);

type CoustomizeAccordioProps = ComponentProps<"div"> &
  VariantProps<typeof coustomizeAccordioStyle> & {
    variant?: AccordionTypes;
    children: string;
    content?: any;
    Icon: React.ReactNode;
    childClassName?: string;
  };

export const CoustomizeAccordion = forwardRef<
  HTMLDivElement,
  CoustomizeAccordioProps
>(
  (
    { variant, content, className, Icon, children, childClassName, ...props },
    ref
  ) => {
    const [handleButton, setHandleButton] = useState(false);

    const handleClick = () => setHandleButton(!handleButton);

    return (
      <div className="w-full">
        <div
          ref={ref}
          className={cn(coustomizeAccordioStyle({ variant, className }))}
          data-testid="custom-variant"
          {...props}
        >
          <div className="flex items-center justify-between w-full">
            <div>{children}</div>
            <div
              className={`duration-300 transform cursor-pointer rotate-180 hover:shadow ${handleButton && "origin-center rotate-[none]"}`}
              onClick={handleClick}
              data-testid="icon"
            >
              {Icon}
            </div>
          </div>
        </div>

        {handleButton && (
          <div className={cn("mt-1 w-full border bg-white", childClassName)}>
            <div className="px-2 py-1">
              {content.map((item: any) => (
                <div>{item}</div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
);

export default CoustomizeAccordion;
