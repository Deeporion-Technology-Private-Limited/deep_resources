import React, { forwardRef, useState } from "react";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { MenuItemSize, MenuItemVariant, PrimaryType } from "./MenuitemTypes";
import { Text } from "../Text";
import { Box } from "@/components";
import { Cart } from "./Icon/icon";

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
    "relative",
  ],
  {
    variants: {
      variant: MenuItemVariant,
      size: {
        [MenuItemSize.Small]: "text-sm",
        [MenuItemSize.Medium]: "text-base",
      },
      colorscheme: PrimaryType,
    },
    compoundVariants: [
      {
        variant: "Default",
        colorscheme: "Primary",
      },
      {
        variant: "LeftIcon",
        colorscheme: "Primary",
      },
      {
        variant: "RightIcon",
        colorscheme: "Primary",
      },
      {
        variant: "LeftSpacer",
        colorscheme: "Primary",
      },
    ],
    defaultVariants: {
      size: MenuItemSize.Medium,
      colorscheme: "Primary",
    },
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
    const [isSubMenuIcon, setIsSubMenuIcon] = useState(false);


    const handleClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      if (onClick) {
        onClick();
      } else if (isSubmenu && children) {
        setSubmenuVisible(!submenuVisible);
      } else {
        alert("Default Click behaviour");
      }
      if(leftIcon && rightIcon) {
        setIsSubMenuIcon(!isSubMenuIcon)
      }
    };

    const classNames = cn(
      menuItemStyles({ variant, size, className }),
      leftIcon && "gap-2",
      leftSpacer && "pl-[42px]",
      border && "border",
      rightIcon && "gap-[65px] pr-[4px]"
    );

    return (
      <div ref={ref} className={classNames} onClick={handleClick} {...props}>
        {leftIcon && rightIcon ? (
          <Box className="flex justify-center items-center gap-2">
            {leftIcon}
            <Text>{label}</Text>
          </Box>
        ) : (
          <>
            {leftIcon}
            <Text>{label}</Text>
          </>
        )}

        {isSubMenuIcon ? (<Cart/>) : rightIcon}
        {isSubmenu && submenuVisible && (
          <div className="absolute left-[100%] top-0">{children}</div>
        )}
      </div>
    );
  }
);
