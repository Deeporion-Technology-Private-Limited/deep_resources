import React, { forwardRef, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { MenuItemSize, MenuItemVariant, PrimaryType } from "../types";
import { Text } from "../Text";
import { UpArrow } from "./Icon/icon";
import { cn } from "../../utils";
import { Box } from "../Layout";

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

interface MenuItemProps
  extends ComponentProps<"div">,
    VariantProps<typeof menuItemStyles> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftSpacer?: boolean;
  label: string;
  border?: boolean;
  iconLeftStyle?: string;
  iconRightStyle?: string;
  labelStyle?: string;
  onClick?: () => void;
  isSubmenu?: boolean;
  wannaChangRightIcon?: boolean;
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
      wannaChangRightIcon = false,
      children,
      iconLeftStyle = "",
      iconRightStyle = "",
      labelStyle = "",
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
      if (rightIcon) {
        setIsSubMenuIcon(!isSubMenuIcon);
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
            <Box className={iconLeftStyle}>{leftIcon}</Box>
            <Text className={labelStyle}>{label}</Text>
          </Box>
        ) : (
          <>
            {leftIcon && <Box className={iconLeftStyle}>{leftIcon}</Box>}
            <Text className={labelStyle}>{label}</Text>
          </>
        )}
        {rightIcon && (
          <Box className={iconRightStyle}>
            {(wannaChangRightIcon && isSubMenuIcon ? (
            <UpArrow />) : (rightIcon))}
          </Box>
        )}
        {isSubmenu && submenuVisible && (
          <div className="absolute left-[100%] top-0">{children}</div>
        )}
      </div>
    );
  }
);
