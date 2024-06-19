import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentProps, forwardRef, useState } from "react";
import { AccordionTypes } from "./AccordionTypes";

const accordionStyle = cva(
  [
    "h-fit",
    "text-sm",
    "items-center",
    "w-[400px]",
  ],
  {
    variants: {
      variant: {
        [AccordionTypes.Arrow]: "",
        [AccordionTypes.Cursor]: "",
      },
    },
    compoundVariants: [
      {
        variant: AccordionTypes.Arrow,
      },
      {
        variant: AccordionTypes.Cursor,
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

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ variant = AccordionTypes.Arrow, content, className, Icon, children, childClassName, ...props }, ref) => {

    const [handleButton, setHandleButton] = useState(false);

    const handleClick = () => setHandleButton(!handleButton);

    return (
      <div className="h-[200px]">
        <div className={cn(accordionStyle({ variant, className }))}>
        <div
          ref={ref}
          className=" border h-fit w-full px-2 py-2"
          {...props}
         
        >
          <div className="flex items-center justify-between w-full">
            <div >{children}</div>
            <div className={`duration-300 transform rotate-180 cursor-pointer hover:shadow  ${handleButton && "origin-center rotate-[none] "} `}  onClick={handleClick}>
              {Icon}
            </div>
          </div>
        </div>
        {handleButton && (
          <div className={cn(` w-full ${handleButton ? "h-auto ": "h-0"}  left-0 border  bg-white`, childClassName)}>
            <div className="px-2 py-1 ">{content}</div>
          </div>
        )}
      </div>

      </div>
    );
  }
);

export default Accordion;
