import React, { forwardRef, useState } from "react";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { Text } from "@/components/Text";

// Define enums for MenuItemVariant and MenuItemSize
enum MenuItemVariant {
    Default = "default",
    WithLeftIcon = "withLeftIcon",
    WithRightIcon = "withRightIcon",
    WithLeftSpacer = "withLeftSpacer"
}

enum MenuItemSize {
    Small = "sm",
    Medium = "md"
}

// Define styles for MenuItem
const menuItemStyles = cva(
    [
        "flex",
        "w-full",
        "min-w-[184px]",
        "py-[9px]",
        "pl-[16px]",
        "pr-5",
        "rounded-lg",
        "items-center",
        "bg-white",
        "shadow",
        "cursor-pointer",
        "hover:bg-[#E8EBED]",
        "active:bg-[#D0E3FF]",
        "relative" // Added relative positioning
    ],
    {
        variants: {
            variant: {
                default: MenuItemVariant.Default,
                withLeftIcon: "",
                withRightIcon: "",
                withLeftSpacer: ""
            },
            size: {
                sm: "text-sm",
                md: "text-base"
            },
            colorscheme: {
                primary: "text-black"
            }
        },
        compoundVariants: [
            {
                variant: MenuItemVariant.Default,
                colorscheme: "primary",
                className: ""
            },
            {
                variant: MenuItemVariant.WithLeftIcon,
                colorscheme: "primary",
                className: ""
            },
            {
                variant: MenuItemVariant.WithRightIcon,
                colorscheme: "primary",
                className: ""
            },
            {
                variant: MenuItemVariant.WithLeftSpacer,
                colorscheme: "primary",
                className: ""
            }
        ],
        defaultVariants: {
            size: MenuItemSize.Medium,
            colorscheme: "primary"
        }
    }
);

// Define MenuItemProps
interface MenuItemProps
    extends ComponentProps<"div">,
    VariantProps<typeof menuItemStyles> {
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    leftSpacer?: boolean;
    label: string;
    border?: boolean;
    onClick?: () => void;
    isSubmenu?: boolean;
    children?: React.ReactNode;
}

// MenuItem Component
export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
    (
        {
            variant,
            size,
            border = false,
            leftIcon,
            rightIcon,
            leftSpacer = false,
            label,
            className,
            isSubmenu = false,
            children,
            onClick,
            ...props
        },
        ref
    ) => {
        const [submenuVisible, setSubmenuVisible] = useState(false);

        // Define a dynamic onClick handler
        const handleClick = (e: React.MouseEvent) => {
            e.stopPropagation(); // Prevent click event from bubbling up
            if (onClick) {
                onClick(); 
            } else if (isSubmenu && children) {
                setSubmenuVisible(!submenuVisible)
            } else {
                alert("Default Click behaviour"); // Default click behavior
            }
        };

        // Assemble the classNames based on props and styles
        const classNames = cn(
            menuItemStyles({ variant, size, className }),
            leftIcon && "gap-2",
            leftSpacer && "pl-[42px]",
            border && "border",
            rightIcon && "gap-[65px] pr-[4px]"
        );

        return (
            <div
                ref={ref}
                className={classNames}
                onClick={handleClick} // Use dynamic onClick handler
                {...props}
            >
                {leftIcon}
                <Text>{label}</Text>
                {rightIcon}
                {isSubmenu && submenuVisible && (
                    <div className="absolute left-[100%] top-0">{children}</div>
                )}
            </div>
        );
    }
);

// Export styles for testing or customization in Storybook
export { menuItemStyles };
