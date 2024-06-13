import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentProps, forwardRef, useState } from "react";
import { AccordionTypes } from "./AccordionTypes";
import { Minus } from "./Icon/Icon";
import { Checkbox } from "../Checkbox";


const accordionStyle = cva(
    [
        "w-[500px]",
        "h-fit",
        "border",
        "py-2",
        "flex",
        "justify-between",
        "shadow-sm",
        "relative",
        "text-sm"
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
    variant?: AccordionTypes;
    children?: String;
    content: string;
    Select: any[];
    Icon: React.ReactNode
};

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
    ({ variant = AccordionTypes.Arrow, content, className, Select, Icon, children, ...props }, ref) => {

        const [handleButton, setHandleButton] = useState(false);

        const handleClick = () => setHandleButton(!handleButton);

        return (
            <>
                <div
                    ref={ref}
                    className={cn(accordionStyle({ variant, className }))}
                    {...props}
                    onClick={handleClick}
                >
                    <div >{children}</div>
                    <div className={`duration-300 ${handleButton || variant !== AccordionTypes.Plus && "origin-center -rotate-180"}`}>
                        {handleButton && variant === AccordionTypes.Plus ? <Minus /> : Icon}
                    </div>
                    {handleButton && (
                    <div className="absolute top-10 left-0 w-full border h-fit overflow-y-auto">
                        {variant === AccordionTypes.Plus ? (
                            Select.map((item, i) => (
                                <div key={i} className="flex px-2 py-1">
                                    <Checkbox value={item} /> {item}
                                </div>
                            ))
                        ) : (
                            <div className="px-2 py-1">{content}</div>
                        )}
                    </div>
                )}
                </div>
               
            </>
        );
    }
);

export default Accordion;
