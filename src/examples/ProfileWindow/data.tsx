import facebook from "../../components/Header/navbarIcons/Facebook.svg";
import Gmail from "../../components/Header/navbarIcons/mail.svg";
import linkedin from "../../components/Header/navbarIcons/LinkedIn.svg";
import twitter from "../ShareWindow/icon/image-5.svg";

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
  { icon: Gmail, plateform: "email", detail: "Alma Lawson@gmail.com" },
  { icon: facebook, plateform: "facebook", detail: "Alma Lawson" },
  { icon: linkedin, plateform: "linkdin", detail: "Alma Lawson" },
  { icon: twitter, plateform: "twitter", detail: "@Alma Lawson" },
];
