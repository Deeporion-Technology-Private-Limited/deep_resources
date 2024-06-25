import notification from "../../components/Header/navbarIcons/notification.svg";
import fav from "../../components/Header/navbarIcons/favorite.svg";
import cart from "../../components/Header/navbarIcons/shoping_cart.svg";
import setting from "../../components/Header/navbarIcons/settings.svg";
import { TopHoverMenuCard } from "@/components/Header/ExpandedNavbar";
import {
  GenderItem,
  TopItem,
} from "@/components/Header/ExpandedNavbar/topHoverObjects";
import {
  NavItems,
  navBarIcons,
} from "@/components/Header/TopNavbar/topNavConst";

export const navItemArry: NavItems[] = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Women",
    href: "/about",
    component: (
      <TopHoverMenuCard TopHoverMenuItem={TopItem} title="Categories" />
    ),
  },
  {
    text: "Kids",
    href: "/gender",
    component: (
      <TopHoverMenuCard
        TopHoverMenuItem={GenderItem}
        listStyle="gap-[30px] py-[0px]"
      />
    ),
  },
  { text: "Gift Card", href: "/gift" },
];

export const navIconArray: navBarIcons[] = [
  { icon: fav },
  { icon: notification },
  { icon: cart },
  { icon: setting },
];
