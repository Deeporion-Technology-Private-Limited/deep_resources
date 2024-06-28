import { VariantProps } from 'class-variance-authority';
import { ComponentProps } from '../../../../node_modules/react';
import { Box } from '../..';
import { NavbarDirection } from '../type';

declare const navBarStyles: (props?: ({
    direction?: NavbarDirection | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type NavItems = {
    menus: string;
    menuIcon?: string;
    menuIconComponent?: React.ReactNode;
    path?: string;
    submenu?: NavItems[];
};
export type profile = {
    profileName?: string;
    profilePicture?: string;
};
interface LogoImageProps extends ComponentProps<typeof Box>, VariantProps<typeof navBarStyles> {
    children?: React.ReactNode;
    className?: string;
    isLogin?: boolean;
    direction?: NavbarDirection;
    title?: string;
    LogoIcon?: string;
    navItem?: NavItems[];
    showNavItemName?: boolean;
    profileItem: profile;
    hover: boolean;
    largeSidebar?: boolean;
}
export declare const SideNavbar: import('../../../../node_modules/react').ForwardRefExoticComponent<Omit<LogoImageProps, "ref"> & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>>;
export {};
