import type { Meta, StoryObj } from "@storybook/react";
import { GenderItem, TopHoverMenuCard, TopItem, Topnavbar } from "..";
import { NavbarDirection } from "../../types";
import { navBarIconsData } from "@/components/Data/navBarIconsData";
import { FindIconUrl } from "@/utils/Constant";

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
    navBarIcons: navBarIconsData,
    profilePicture: FindIconUrl("profileImage.png"),
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
    navBarIcons: navBarIconsData,
    profilePicture: FindIconUrl("profileImage.png"),
    isSearch: true,
    isLogin: true,
  },
};

export const WithLogoImage: Story = {
  args: {
    title: "Logo",
    LogoIcon: FindIconUrl("logo.svg"),
    direction: NavbarDirection.Row,
    navItem: [
      { text: "Home", href: "/" },
      { text: "About", href: "/about" },
      { text: "Contact", href: "/contact" },
    ],
    navBarIcons: navBarIconsData,
    profilePicture: FindIconUrl("profileImage.png"),
    isSearch: true,
    isLogin: true,
  },
};

export const WithHemburger: Story = {
  args: {
    title: "Logo",
    LogoIcon: FindIconUrl("logo.svg"),
    direction: NavbarDirection.Row,
    navItem: [
      { text: "Home", href: "/" },
      { text: "About", href: "/about" },
      { text: "Contact", href: "/contact" },
    ],
    navBarIcons: navBarIconsData,
    profilePicture: FindIconUrl("profileImage.png"),
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
    navBarIcons: navBarIconsData,
    profilePicture: FindIconUrl("profileImage.png"),
    isSearch: true,
    isLogin: true,
  },
};
