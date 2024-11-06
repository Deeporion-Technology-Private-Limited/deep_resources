import { FindIconUrl } from "../../../utils/Constant";
import { CardCart } from "../../Cards";
import { NavItems } from "../../Layout";
import { Favourite, Notification, Setting } from "../../MenuItem/Icon/icon";

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
  {
    menuLeftIcon: <CardCart />,
    menuIcon: FindIconUrl("OutlineShoppingCart.svg"),
    menus: "Cart",
  },
  {
    menuLeftIcon: <Setting />,
    menuIcon: FindIconUrl("OutlineSettings.svg"),
    menus: "Setting",
  },
];
