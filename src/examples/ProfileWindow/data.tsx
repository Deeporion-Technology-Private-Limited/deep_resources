import twitter from "../ShareWindow/icon/Twitter.svg";
import { FindIconUrl } from "@/utils/Constant";

export interface platformItem {
  icon?: string;
  plateform?: string;
  detail?: string;
}

export interface ProfileProps {
  name?: string;
  address?: string;
  imgSrc?: string;
  className?: string;
}
export const plateforms: platformItem[] = [
  { icon: FindIconUrl("MailOutline.svg"), plateform: "email", detail: "Alma Lawson@gmail.com" },
  { icon: FindIconUrl("Facebook.svg"), plateform: "facebook", detail: "Alma Lawson" },
  { icon: FindIconUrl("LinkedIn.svg"), plateform: "linkdin", detail: "Alma Lawson" },
  { icon: twitter, plateform: "twitter", detail: "@Alma Lawson" },
];
