import { NavbarDirection } from "../type";

export type NavItems = {
    text: string;
    href: string;
    component?: React.ReactNode;
  };
  
  export type navBarIcons = {
    icon?: string;
    iconName?: string;
  };
  
  export interface TopNavbarProps {
    children?: React.ReactNode;
    className?: string;
    isLogin?: boolean;
    isSearch?: boolean;
    direction?: NavbarDirection;
    title?: string;
    LogoIcon?: string;
    navItem?: NavItems[];
    navBarIcons?: navBarIcons[];
    profilePicture?: string;
    hemburgerClick?: () => void;
  }