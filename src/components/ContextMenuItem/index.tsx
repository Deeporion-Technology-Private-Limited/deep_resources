import React, { forwardRef } from "react";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const menuItemStyles = cva(
    [
        "flex",
        "w-full",
        "items-center",
        "py-[9px]",
        "pl-[16px]",
        "pr-5",
        "rounded-lg",
        "bg-white",
        "shadow",
        "cursor-pointer",
    ],
    {
        variants: {
            variant: {
                default: "",
                hover: "",
                active: "",
            },
            size: {
                sm: "text-sm",
                md: "text-base",
            },
            colorscheme: {
                primary: "text-black",
            },
        },
        compoundVariants: [
            {
                variant: "default",
                colorscheme: "primary",
                className: "",
            },
            {
                variant: "hover",
                colorscheme: "primary",
                className: "hover:bg-gray-100",

            },
            {
                variant: "active",
                colorscheme: "primary",
                className: "active:bg-[#D0E3FF]",

            },
        ],
        defaultVariants: {
            size: "md",
            colorscheme: "primary",
        },
    }
);

interface MenuItemProps extends ComponentProps<"div">, VariantProps<typeof menuItemStyles> {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    leftSpacer?: React.ReactNode;
}

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
    ({ variant, size,leftIcon, rightIcon, leftSpacer, children,className, ...props }, ref) => {
        return (
            <div 
             ref={ref}
                className={cn(menuItemStyles({ variant, size, className }), leftIcon && "gap-2" , leftSpacer && "pl-5 pr-10" , rightIcon && "")}
                {...props}>
                    {leftIcon && <div>{leftIcon}</div>}
                    {leftSpacer && <div className="mr-2">{leftSpacer}</div>}
                    {children}
                    {rightIcon && <div>{rightIcon}</div>}
            </div>
        );
    }
);
