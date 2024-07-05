import notification from "../navbarIcons/notification.svg";
import fav from "../navbarIcons/favorite.svg";
import cart from "../navbarIcons/shoping_cart.svg";
import setting from "../navbarIcons/settings.svg";
import { NavItems } from ".";
import {
  Cart,
  Favourite,
  Notification,
  Setting,
} from "@/components/MenuItem/Icon/icon";


export const navItemDetail: NavItems[] = [
    {
      menuLeftIcon: <Favourite />,
      menuIcon: fav,
      menus: "Favourite",
    },
    {
      menuLeftIcon: <Notification />,
      menuIcon: notification,
      menus: "Notifications",
    },
    { menuLeftIcon: <Cart />, menuIcon: cart, menus: "Cart" },
    { menuLeftIcon: <Setting />, menuIcon: setting, menus: "Setting" },
  ];

