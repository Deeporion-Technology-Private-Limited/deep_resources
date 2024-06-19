import instagram from "../../components/Header/navbarIcons/Instagram.svg";
import linkedin from "../../components/Header/navbarIcons/LinkedIn.svg";
import facebook from "../../components/Header/navbarIcons/Facebook.svg";
import google from "../../components/Header/navbarIcons/Google.svg";

interface titleFooter {
  title?: string;
  titleColor?: string;
}

interface serviceItem {
  name?: string;
  value?: string;
}
interface socialLinks {
  iconUrl?: string;
}

interface listItem {
  name?: string;
  href?: string;
}

interface footerCopyright {
  copyright?: string;
  copyrightBgStyle?: string;
  copyrightTextStyle?: string;
}

export const serviceData: serviceItem[] = [
  {
    name: "Phone",
    value: "1-800-123-4567",
  },
  {
    name: "Email",
    value: "karan@gmail.com",
  },
];

export const listItem: listItem[] = [
  { name: "Home", href: "" },
  { name: "Customer Reviews", href: "" },
  { name: "Video Library", href: "" },
  { name: "Careers", href: "" },
];
export const needHelpListItem: listItem[] = [
    { name: "Exchange and Return Policy", href: "" },
    { name: "Shipping Policy", href: "" },
    { name: "Contact Us", href: "" },
    { name: "Privacy Policy", href: "" },
    { name: "Terms and Use", href: "" },

  ];

export const linksItem: socialLinks[] = [
  { iconUrl: instagram },
  { iconUrl: linkedin },
  { iconUrl: facebook },
  { iconUrl: google },
];
export const descrip: string =
  "Be the first to know about our new collections, exclusive offers, and other perks!";

export const titleForCustomerServices : titleFooter = {
    title: "Customer Services",
}
export const titleForNeedHelp : titleFooter = {
    title: "Need Help",
}
export const titleForCompany : titleFooter = {
    title: "The Company",
}

export const footerCopyrightItem: footerCopyright = {
  copyright: "2024 All rights reserved",
  copyrightBgStyle: "bg-[#3F271E]",
  copyrightTextStyle: "text-[#fff]",
}

export const footerColor: string = "#3F271E"