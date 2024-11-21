import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentProps, forwardRef, useState } from "react";
import { cn } from "../../../utils";
import { AccordionTypes } from "../../types";


const coustomizeAccordioStyle = cva(
  [
    "h-fit",
    "border",
  
    "shadow-sm",
    "text-sm",
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
    Icon?: React.ReactNode;
    childClassName?: string;
    more?: string;
    handleMore?: () => void;
    isMore?: boolean;
  };

export const CoustomizeAccordion = forwardRef<
  HTMLDivElement,
  CoustomizeAccordioProps
>(
  (
    {
      variant,
      content,
      className,
      Icon,
      children,
      isMore,
      childClassName,
      more,
      handleMore,
      ...props
    },
    ref,
  ) => {
    const [handleButton, setHandleButton] = useState(false);

    const handleClick = () => setHandleButton(!handleButton);

    return (
      <div className="h-full w-full">
        <div
          ref={ref}
          className={cn(coustomizeAccordioStyle({ variant, className }))}
          data-testid="custom-variant"
          {...props}
        >
          <div
            className={`flex w-full cursor-pointer items-center justify-between rounded p-2 text-black ${
              handleButton
                ? `bg-gradient-to-r from-[#D2B48C] to-[#3F271E] text-white`
                : "bg-white"
            }`}
            onClick={handleClick}
          >
            <div>{`By ${children}`}</div>

            <div
              className={`rotate-180 transform cursor-pointer duration-300 hover:shadow ${
                handleButton && "origin-center rotate-[none]"
              }`}
              onClick={handleClick}
              data-testid="icon"
            >
              {Icon}
            </div>
          </div>
        </div>
        {handleButton && (
          <div className={cn("mb-1 mt-2 w-full border", childClassName)}>
            {children === "Size" && (
              <div className="font-poppins px-2 py-2 text-sm font-semibold leading-[21px]">
                Select Preferred Size
              </div>
            )}
            <div
              className={`flex h-fit w-[200px] ${
                children === "Size"
                  ? "flex-row flex-wrap gap-2"
                  : "flex-col gap-3"
              } px-2 py-3`}
            >
              {content?.map((item: any) => (
                <div
                  key={item.id || item.name}
                  className={`${
                    children === "Size"
                      ? "w-[40px] rounded-md bg-white bg-none hover:bg-gray-300"
                      : ""
                  }`}
                >
                  {children === "Size" ? (
                    <div className="font-poppins text-center text-sm font-normal">
                      {item}
                    </div>
                  ) : (
                    item
                  )}
                </div>
              ))}
            </div>
            {isMore && (
              <button
                onClick={handleMore}
                className="bg-transparent p-0 pl-4 text-[15px] font-bold"
              >
                {more}
              </button>
            )}
          </div>
        )}
      </div>
    );
  },
);

export default CoustomizeAccordion;
