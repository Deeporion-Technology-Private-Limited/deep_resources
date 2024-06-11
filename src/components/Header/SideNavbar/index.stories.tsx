import type { Meta, StoryObj } from "@storybook/react";
import person from "../navbarIcons/person.svg";
import notification from "../navbarIcons/notification.svg";
import fav from "../navbarIcons/favorite.svg";
import cart from "../navbarIcons/shoping_cart.svg";
import setting from "../navbarIcons/settings.svg";
import profile from "../navbarIcons/image.png";
import log from "../navbarIcons/logo.svg";
import { SideNavbar } from ".";
import { NavbarDirection } from "../type";

const meta: Meta<typeof SideNavbar> = {
  title: "Components/Header/SideNavbar",
  component: SideNavbar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Logo",
    direction: NavbarDirection.Column,
    navItem: [
      { menuIcon: fav },
      { menuIcon: notification },
      { menuIcon: cart },
      { menuIcon: setting },
    ],
    navBarIcons: [{ icon: person, iconName: "Logo" }],
    profilePicture: profile,
  },
};

export const LogedIn: Story = {
  args: {
    title: "Logo",
    direction: NavbarDirection.Column,
    navItem: [
      { menuIcon: fav },
      { menuIcon: notification },
      { menuIcon: cart },
      { menuIcon: setting },
    ],
    navBarIcons: [{ icon: person, iconName: "Logo" }],
    profilePicture: profile,
    isLogin: true,
  },
};

export const WithLogoIcon: Story = {
  args: {
    title: "Logo",
    direction: NavbarDirection.Column,
    navItem: [
      { menuIcon: fav },
      { menuIcon: notification },
      { menuIcon: cart },
      { menuIcon: setting },
    ],
    navBarIcons: [{ icon: person, iconName: "Logo" }],
    profilePicture: profile,
    isLogin: true,
    LogoIcon: log,
  },
};
