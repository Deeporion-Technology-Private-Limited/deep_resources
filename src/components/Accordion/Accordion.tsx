import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentProps, forwardRef, useState } from "react";
import { cn } from "../../utils";
import { AccordionTypes } from "../types";

const accordionStyle = cva(["h-fit", "text-sm", "items-center", "w-[400px]"], {
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
});

type AccordionProps = ComponentProps<"div"> &
  VariantProps<typeof accordionStyle> & {
    variant?: AccordionTypes;
    children: any;
    content: any;
    Icon: React.ReactNode;
    childClassName?: string;
    status?: React.ReactNode;
    subChildren?: string;
  };

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      variant = AccordionTypes.Arrow,
      content,
      status,
      className,
      Icon,
      children,
      subChildren,
      childClassName,
      ...props
    },
    ref
  ) => {
    const [handleButton, setHandleButton] = useState(false);

    const handleClick = () => setHandleButton(!handleButton);

    return (
      <div className={cn(accordionStyle({ variant, className }))}>
        <div ref={ref} className=" border h-fit w-full px-4 py-2" {...props}>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center">
              {" "}
              <div data-testid="children">
                {" "}
                {children}
                <div
                  className="text-[2vh] font-serif font-medium h-fit"
                  data-testid="subchildren"
                >
                  {subChildren}
                </div>
              </div>{" "}
              <div data-testid="status">{status}</div>
            </div>
            <div
              className={`duration-300 transform rotate-180 cursor-pointer hover:shadow hover:border  ${
                handleButton && "origin-center rotate-[none] "
              } `}
              onClick={handleClick}
              data-testid="icon"
            >
              {Icon}
            </div>
          </div>
        </div>
        {handleButton && (
          <div
            className={cn(
              ` w-full ${
                handleButton ? "h-auto " : "h-0"
              }  left-0 border  bg-white`,
              childClassName
            )}
          >
            <div className="px-4 py-2">{content}</div>
          </div>
        )}
      </div>
    );
  }
);

export default Accordion;
