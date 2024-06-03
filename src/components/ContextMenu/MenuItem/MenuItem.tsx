import React, { forwardRef } from "react";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

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
        "hover:bg-gray-100",
        "active:bg-[#D0E3FF]",
    ],
    {
        variants: {
            variant: {
                default: "",
                withLeftIcon: "",
                withRightIcon: "",
                withLeftSpacer: "",
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
                variant: "withLeftIcon",
                colorscheme: "primary",
                className: "",
            },
            {
                variant: "withRightIcon",
                colorscheme: "primary",
                className: "",
            },
            {
                variant: "withLeftSpacer",
                colorscheme: "primary",
                className: "",
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
    label: string
}

// MenuItem Component
export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
    ({ variant, size, leftIcon, rightIcon, leftSpacer = false, label, className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(menuItemStyles({ variant, size, className }), leftIcon && "gap-2", leftSpacer && "pl-[42px]", rightIcon && "gap-[65px] pr-[4px]")}
                {...props}
            >
                {leftIcon}
                <div>{label}</div>
                {rightIcon}

            </div>
        );
    }
);
