import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import React, { ComponentProps, forwardRef, useState } from "react";
import { AccordionTypes } from "./AccordionTypes";
import {  Minus } from "./Icon/Icon";
import { Checkbox } from "../Checkbox";
import { InputType } from "../Checkbox/CheckboxTypes";


const accordionStyle = cva(
    [
        "w-[510px]",
        "h-fit",
        "border",
        "py-2",
        "flex",
        "justify-between",
        "shadow-sm",
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
    Icon : React.ReactNode
};





export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
    ({ variant = AccordionTypes.Arrow, content, className, Select, Icon, children, ...props }, ref) => {

        const [handleButton, setHandleButton] = useState(false);

        const handleClick = () => setHandleButton(!handleButton);

        return (
            <><div
                ref={ref}
                className={cn(accordionStyle({ variant, className }))}
                {...props}
            >
                <div>{children}</div>
                <div onClick={handleClick} className={`duration-300 ${handleButton || variant !== AccordionTypes.Plus && "duration-300 origin-center -rotate-180 "} `}>{handleButton && variant === AccordionTypes.Plus ?  <Minus/>: Icon}</div>
            </div>
                <div>
                    {handleButton && <div className="w-[510px] border py-2">
                        {variant === AccordionTypes.Plus ? (Select.map((item , i) => {
                           return <div className="flex gap-2 w-[300px]" key={i}> <Checkbox value={item} onChange={(e)=> console.log("e",e)
                           }/>  {item} </div>
                        })) :( content)}</div>}
                </div>

            </>
        );
    }
);

export default Accordion;
