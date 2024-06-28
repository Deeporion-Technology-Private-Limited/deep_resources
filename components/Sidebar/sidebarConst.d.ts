/// <reference types="react" />
export declare const navItemSideBar: NavItems[];
export type NavItems = {
    menus: string;
    menuIcon?: string;
    menuLeftIcon?: React.ReactNode;
    path?: string;
    submenu?: NavItems[];
    navComponent?: React.ReactNode;
};
export interface profile {
    profileName?: string;
    profilePicture?: string;
}
export interface SidbarProps {
    children?: React.ReactNode;
    className?: string;
    isLogin?: boolean;
    title?: string;
    LogoIcon?: string;
    navItem?: NavItems[];
    profileItem?: profile;
    handleClose?: () => void;
    handleLogin?: () => void;
    userLogedIn?: boolean;
}
