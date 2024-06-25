import type { Meta, StoryObj } from "@storybook/react";
import person from "../navbarIcons/person.svg";
import notification from "../navbarIcons/notification.svg";
import fav from "../navbarIcons/favorite.svg";
import cart from "../navbarIcons/shoping_cart.svg";
import setting from "../navbarIcons/settings.svg";
import profile from "../navbarIcons/image.png";
import log from "../navbarIcons/logo.svg";
import { Topnavbar } from ".";
import { NavbarDirection } from "../type";
import { TopHoverMenuCard } from "../ExpandedNavbar";
import { GenderItem, TopItem } from "../ExpandedNavbar/topHoverObjects";

const meta: Meta<typeof Topnavbar> = {
  title: "Components/Header/TopNavbar",
  component: Topnavbar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Logo",
    direction: NavbarDirection.Row,
    navItem: [
      { text: "Home", href: "/" },
      { text: "About", href: "/about" },
      { text: "Contact", href: "/contact" },
    ],
    navBarIcons: [
      { icon: fav },
      { icon: notification },
      { icon: cart },
      { icon: setting },
    ],
    profilePicture: profile,
    isSearch: true,
  },
};

export const LogedIn: Story = {
  args: {
    title: "Logo",
    direction: NavbarDirection.Row,
    navItem: [
      { text: "Home", href: "/" },
      { text: "About", href: "/about" },
      { text: "Contact", href: "/contact" },
    ],
    navBarIcons: [
      { icon: fav },
      { icon: notification },
      { icon: cart },
      { icon: setting },
    ],
    profilePicture: profile,
    isSearch: true,
    isLogin: true,
  },
};

export const WithLogoImage: Story = {
  args: {
    title: "Logo",
    LogoIcon: log,
    direction: NavbarDirection.Row,
    navItem: [
      { text: "Home", href: "/" },
      { text: "About", href: "/about" },
      { text: "Contact", href: "/contact" },
    ],
    navBarIcons: [
      { icon: fav },
      { icon: notification },
      { icon: cart },
      { icon: setting },
    ],
    profilePicture: profile,
    isSearch: true,
    isLogin: true,
  },
};

export const WithHemburger: Story = {
  args: {
    title: "Logo",
    LogoIcon: log,
    direction: NavbarDirection.Row,
    navItem: [
      { text: "Home", href: "/" },
      { text: "About", href: "/about" },
      { text: "Contact", href: "/contact" },
    ],
    navBarIcons: [
      { icon: person, iconName: "Logo" },
      { icon: fav },
      { icon: notification },
      { icon: cart },
      { icon: setting },
    ],
    profilePicture: profile,
    isSearch: true,
    isLogin: true,
    hemburgerClick: () => {
      alert("open hemburger");
    } 
  },
};

export const OnNavItemHover: Story = {
  args: {
    title: "Logo",
    direction: NavbarDirection.Row,
    navItem: [
      {
        text: "Home",
        href: "/",
        component: (
          <TopHoverMenuCard TopHoverMenuItem={TopItem} title="Categories" />
        ),
      },
      {
        text: "About",
        href: "/about",
        component: (
          <TopHoverMenuCard
            TopHoverMenuItem={GenderItem}
            listStyle="gap-[30px] py-[0px]"
          />
        ),
      },
      { text: "Contact", href: "/contact" },
    ],
    navBarIcons: [
      { icon: person, iconName: "Logo" },
      { icon: fav },
      { icon: notification },
      { icon: cart },
      { icon: setting },
    ],
    profilePicture: profile,
    isSearch: true,
    isLogin: true,
  },
};
