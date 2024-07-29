import { TopHoverMenuCard } from "@/components/Header/ExpandedNavbar";
import {
  GenderItem,
  TopItem,
} from "@/components/Header/ExpandedNavbar/topHoverObjects";
import {
  NavItems,
  navBarIcons,
} from "@/components/types";
import { FindIconUrl } from "@/utils/Constant";

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
