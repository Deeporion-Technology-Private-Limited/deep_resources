import { Cart, Favourite, Notification, Setting } from "../MenuItem/Icon/icon";
import { TopHoverMenuCard } from "../Header/ExpandedNavbar";
import { TopItem } from "../Header/ExpandedNavbar/topHoverObjects";

export const navItemSideBar: NavItems[] = [
    { menus: "Home" },
    { menus: "Men" },
    {
      menus: "Women",
      navComponent: (
        <TopHoverMenuCard
          TopHoverMenuItem={TopItem}
          title="Categories"
          listStyle="gap-5"
          className="bg-[#EBE3E0] rounded-[8px] p-[20px] pt-[9px]"
        />
      ),
    },
    { menus: "Kids" },
    { menus: "Gift Cards" },
    {
      menuLeftIcon: <Favourite />,
      menus: "Favourite",
    },
    {
      menuLeftIcon: <Notification />,
      menus: "Notifications",
      submenu: [
        {
          menus: "fav3 to 1",
        },
      ],
    },
    { menuLeftIcon: <Cart />, menus: "Cart" },
    {
      menuLeftIcon: <Setting />,
      menus: "Setting",
    },
  ];

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