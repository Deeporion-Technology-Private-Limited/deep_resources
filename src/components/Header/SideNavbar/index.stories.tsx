import type { Meta, StoryObj } from "@storybook/react";
import {SideNavbar } from ".";
import { NavbarDirection } from "../../types";

import { navItemDetail } from "./sidenavbarconst";
import { FindIconUrl } from "@/utils/Constant";

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
  profilePicture: FindIconUrl("profileImage.png"),
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Logo",
    direction: NavbarDirection.Column,
    navItem: navItemDetail,
    profileItem: profileDetail,
    showProfile: true,
  },
};

export const LogedIn: Story = {
  args: {
    title: "Logo",
    direction: NavbarDirection.Column,
    navItem: navItemDetail,
    isLogin: true,
    profileItem: profileDetail,
    showProfile: true,
  },
};

export const WithLogoIcon: Story = {
  args: {
    title: "Logo",
    direction: NavbarDirection.Column,
    navItem: navItemDetail,
    isLogin: true,
    LogoIcon: FindIconUrl("logo.svg"),
    profileItem: profileDetail,
    showProfile: true,
  },
};

export const WithMenuItemName: Story = {
  args: {
    title: "Logo",
    direction: NavbarDirection.Column,
    navItem: navItemDetail,
    isLogin: true,
    LogoIcon: FindIconUrl("logo.svg"),
    showNavItemName: true,
    profileItem: profileDetail,
    showProfile: true,
  },
};

export const LargeSideBar: Story = {
  args: {
    title: "Logo",
    className: "min-w-[260px]",
    direction: NavbarDirection.Column,
    navItem: navItemDetail,
    isLogin: true,
    LogoIcon: FindIconUrl("logo.svg"),
    showNavItemName: true,
    largeSidebar: true,
  },
};

export const HoverSideBar: Story = {
  args: {
    title: "Logo",
    direction: NavbarDirection.Column,
    navItem: navItemDetail,
    isLogin: true,
    LogoIcon: FindIconUrl("logo.svg"),
    showNavItemName: true,
    profileItem: profileDetail,
    largeSidebar: false,
    hover: true,
    showProfile: true,
  },
};
