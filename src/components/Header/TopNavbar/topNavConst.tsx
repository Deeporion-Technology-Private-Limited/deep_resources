
import { FindIconUrl } from "@/utils/Constant";
import { NavbarDirection } from "../type";

export type NavItems = {
    text: string;
    href: string;
    component?: React.ReactNode;
  };
  
  export type navBarIcons = {
    icon?: string;
    iconName?: string;
    onClick?: () => void;
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


  export const navBarIconsData: navBarIcons[] = [
    { icon: FindIconUrl("FavoriteBorder.svg")},
    { icon: FindIconUrl("NotificationsNone.svg")},
    { icon: FindIconUrl("OutlineShoppingCart.svg")},
    { icon: FindIconUrl("OutlineSettings.svg")},
  ]