import { cn } from "@/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps, forwardRef, useState } from "react";
import { AccordionTypes } from "./AccordionTypes";
import { UpCursor, UpArrow, Minus, Plus } from "./Icon/Icon";
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
};





export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
    ({ variant = AccordionTypes.Arrow, content, className, Select, children, ...props }, ref) => {

        const [handleButton, setHandleButton] = useState(false);

        const handleClick = () => setHandleButton(!handleButton);

        const showIcon = variant === AccordionTypes.Arrow ? <UpArrow /> :
            variant === AccordionTypes.Cursor ? <UpCursor /> : handleButton ? <Minus /> : <Plus />

        return (
            <><div
                ref={ref}
                className={cn(accordionStyle({ variant, className }))}
                {...props}
            >
                <div>{children}</div>
                <div onClick={handleClick} className={`duration-300 ${handleButton || variant !== AccordionTypes.Plus && "duration-300 origin-center -rotate-180 "} `}>{showIcon}</div>
            </div>
                <div>
                    {handleButton && <div className="w-[510px] border py-2">
                        {variant === AccordionTypes.Plus ? (Select.map((item , i) => {
                           return <div className="flex gap-2 w-[300px]" key={i}> <Checkbox type={InputType.Checkbox} value={item} onChange={(e)=> console.log("e",e)
                           }/>  {item} </div>
                        })) :( content)}</div>}
                </div>

            </>
        );
    }
);

export default Accordion;