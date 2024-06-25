import type { Meta, StoryObj } from "@storybook/react";
import notification from "../navbarIcons/notification.svg";
import fav from "../navbarIcons/favorite.svg";
import cart from "../navbarIcons/shoping_cart.svg";
import setting from "../navbarIcons/settings.svg";
import profile from "../navbarIcons/image.png";

import log from "../navbarIcons/logo.svg";
import { NavItems, SideNavbar } from ".";
import { NavbarDirection } from "../type";
import {
  Cart,
  Favourite,
  Notification,
  Setting,
} from "@/components/MenuItem/Icon/icon";

const meta: Meta<typeof SideNavbar> = {
  title: "Components/Header/SideNavbar",
  component: SideNavbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

const profileDetail = {
  profileName: "karan",
  profilePicture: profile,
};

const navItemDetail: NavItems[] = [
  {
    menuIconComponent: <Favourite />,
    menuIcon: fav,
    menus: "Favourite",
    submenu: [
      {
        menus: "fav1",
      },
      { menus: "fav2" },
      {
        menus: "fav3",
        submenu: [
          {
            menus: "fav3 to 1",
          },
          { menus: "fav3 to 2" },
          {
            menus: "fav3 to 3",
          },
        ],
      },
    ],
  },
  {
    menuIconComponent: <Notification />,
    menuIcon: notification,
    menus: "Notifications",
  },
  { menuIconComponent: <Cart />, menuIcon: cart, menus: "Cart" },
  { menuIconComponent: <Setting />, menuIcon: setting, menus: "Setting" },
];

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Logo",
    direction: NavbarDirection.Column,
    navItem: navItemDetail,
    profileItem: profileDetail,
  },
};

export const LogedIn: Story = {
  args: {
    title: "Logo",
    direction: NavbarDirection.Column,
    navItem: navItemDetail,
    isLogin: true,
    profileItem: profileDetail,
  },
};

export const WithLogoIcon: Story = {
  args: {
    title: "Logo",
    direction: NavbarDirection.Column,
    navItem: navItemDetail,
    isLogin: true,
    LogoIcon: log,
    profileItem: profileDetail,
  },
};

export const WithMenuItemName: Story = {
  args: {
    title: "Logo",
    direction: NavbarDirection.Column,
    navItem: navItemDetail,
    isLogin: true,
    LogoIcon: log,
    showNavItemName: true,
    profileItem: profileDetail,
  },
};

export const LargeSideBar: Story = {
  args: {
    title: "Logo",
    direction: NavbarDirection.Column,
    navItem: navItemDetail,
    isLogin: true,
    LogoIcon: log,
    showNavItemName: true,
    profileItem: profileDetail,
    largeSidebar: true,
    hover: false,
  },
};

export const HoverSideBar: Story = {
  args: {
    title: "Logo",
    direction: NavbarDirection.Column,
    navItem: navItemDetail,
    isLogin: true,
    LogoIcon: log,
    showNavItemName: true,
    profileItem: profileDetail,
    largeSidebar: false,
    hover: true,
  },
};
