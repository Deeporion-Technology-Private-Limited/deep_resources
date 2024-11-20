
import { GenderItem, TopHoverMenuCard, TopItem } from "@/components";
import {
  NavItems,
  NavItems1,
  navBarIcons,
} from "@/components/types";
import { FindIconUrl } from "@/utils/Constant";

export const navItemArry: NavItems1[] = [
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
