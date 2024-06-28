import { default as React, ComponentProps } from '../../../node_modules/react';
import { VariantProps } from 'class-variance-authority';
import { MenuItemSize } from './MenuitemTypes';

declare const menuItemStyles: (props?: ({
    variant?: "Default" | "LeftIcon" | "RightIcon" | "LeftSpacer" | "Border" | null | undefined;
    size?: MenuItemSize | null | undefined;
    colorscheme?: "Primary" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
interface MenuItemProps extends ComponentProps<"div">, VariantProps<typeof menuItemStyles> {
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
export declare const MenuItem: React.ForwardRefExoticComponent<Omit<MenuItemProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export {};
