import React from "react";
import { TopHoverMenuCard, TopItem, GenderItem, profile } from "../Header";
import { Cart, Favourite, Notification, Setting } from "../MenuItem/Icon/icon";
import { NavItems } from "../types";


export const navItemSideBar: NavItems[] = [
  { menus: "Home" },
  { menus: "Men" },
  {
    menus: "Women",
    navComponent: (
      <TopHoverMenuCard
        TopHoverMenuItem={TopItem}
        title="Categories"
        listStyle="gap-[30px]"
        className="bg-[#EBE3E0] rounded-[8px] p-[20px] pt-[9px]"
      />
    ),
  },
  {
    menus: "Kids",
    navComponent: (
      <TopHoverMenuCard
        TopHoverMenuItem={GenderItem}
        listStyle="gap-[30px] py-[0px]"
        className="bg-[#EBE3E0] rounded-[8px] p-[20px] pt-[9px]"
      />
    ),
  },
  { menus: "Gift Cards" },
  {
    menuLeftIcon: <Favourite />,
    menus: "Favourite",
  },
  {
    menuLeftIcon: <Notification />,
    menus: "Notifications",
  },
  { menuLeftIcon: <Cart />, menus: "Cart" },
  {
    menuLeftIcon: <Setting />,
    menus: "Setting",
  },
];
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
