import React, { forwardRef } from "react";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { LeftIcon, RightIcon } from "./Icon/icon";

// Styles for MenuItem
const menuItemStyles = cva(
    [
        "flex",
        // "w-full",
        "min-w-[184px]",
        "py-[9px]",
        "pl-[16px]",
        "pr-5",
        "rounded-lg",
        "items-center",
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

// Define MenuItemProps
interface MenuItemProps extends ComponentProps<"div">, VariantProps<typeof menuItemStyles> {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    leftSpacer?: boolean;
}

// MenuItem Component
export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
    ({ variant, size, leftIcon = false, rightIcon = false, leftSpacer = false, children, className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(menuItemStyles({ variant, size, className }), leftIcon && "gap-2", leftSpacer && "pl-[42px]", rightIcon && "gap-[65px] pr-[4px]")}
                {...props}
            >
                {leftIcon && <RightIcon />}
                <div>{children}</div>
                {rightIcon && <LeftIcon />}

            </div>
        );
    }
);
