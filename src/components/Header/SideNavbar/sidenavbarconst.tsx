import { NavItems } from ".";
import {
  Cart,
  Favourite,
  Notification,
  Setting,
} from "@/components/MenuItem/Icon/icon";
import { FindIconUrl } from "@/utils/Constant";


export const navItemDetail: NavItems[] = [
    {
      menuLeftIcon: <Favourite />,
      menuIcon: FindIconUrl("FavoriteBorder.svg"),
      menus: "Favourite",
    },
    {
      menuLeftIcon: <Notification />,
      menuIcon: FindIconUrl("NotificationsNone.svg"),
      menus: "Notifications",
    },
    { menuLeftIcon: <Cart />, menuIcon: FindIconUrl("OutlineShoppingCart.svg"), menus: "Cart" },
    { menuLeftIcon: <Setting />, menuIcon: FindIconUrl("OutlineSettings.svg"), menus: "Setting" },
  ];

