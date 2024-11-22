import { useNavigate } from "react-router-dom";
import { FindIconUrl } from "../../../utils/Constant";
import { NavbarDirection } from "../../types";

const navigate = useNavigate();

export interface IReviewRating {
  average_rating: number;
  total_review_count: number;
}
export interface IDataTopNav {
  brand: string;
  discountPercentOfFirstVariant: string | number | null;
  discountedPriceOfFirstVariant: string | number | null;
  id: number;
  image: string;
  isFavorite: boolean;
  name: string;
  price: string;
  priceOfFirstVariant: string;
  ratingAndReview: IReviewRating;
}


export type INavItems = {
  text: string;
  href: string;
  id?: string | number;
  component?: React.ReactNode;
};

export type NavBarIcons = {
  icon?: string;
  iconName?: string;
  onClick?: () => void;
  count?: number;
};

export interface ITopNavbarProps {
  children?: React.ReactNode;
  className?: string;
  isLogin?: boolean;
  isSearch?: boolean;
  direction?: NavbarDirection;
  title?: string;
  LogoIcon?: string;
  navItem?: INavItems[];
  navBarIcons?: NavBarIcons[];
  profilePicture?: string;
  hemburgerClick?: () => void;
  handleLogin?: () => void;
  handleProfile?: () => void;
  searchItem?: string;
  setSearchItem?: (searchItem: string) => void;
  handleChange?: () => void;
  handleNavigate?: () => void;
  data?: IDataTopNav[];
  onLogoClick?: () => void;
  name?: string;
}

export const navBarIconsData: NavBarIcons[] = [
  {
    icon: FindIconUrl("FavoriteBorder.svg"),
    onClick() {
      navigate("/");
    },
  },
  { icon: FindIconUrl("NotificationsNone.svg") },
  { icon: FindIconUrl("OutlineShoppingCart.svg") },
  { icon: FindIconUrl("OutlineSettings.svg") },
];
