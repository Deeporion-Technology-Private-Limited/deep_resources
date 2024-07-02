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
      menuLeftIcon: <Notification />,
      menuIcon: notification,
      menus: "Notifications",
    },
    { menuLeftIcon: <Cart />, menuIcon: cart, menus: "Cart" },
    { menuLeftIcon: <Setting />, menuIcon: setting, menus: "Setting" },
  ];