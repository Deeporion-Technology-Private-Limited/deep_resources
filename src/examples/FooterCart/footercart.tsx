import { titleFooter } from "@/components/types";
import { FindIconUrl } from "@/utils/Constant";

interface serviceItem {
  name?: string;
  value?: string;
}
interface socialLinks {
  iconUrl?: string;
  href?: string;
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
  { iconUrl: FindIconUrl("Instagram.svg") },
  { iconUrl: FindIconUrl("LinkedIn.svg") },
  { iconUrl: FindIconUrl("Facebook.svg") },
  { iconUrl: FindIconUrl("Google.svg") },
];
export const descrip: string =
  "Be the first to know about our new collections, exclusive offers, and other perks!";

export const titleForCustomerServices: titleFooter = {
  title: "Customer Services",
  titleStyle: "font-bold",
};
export const titleForNeedHelp: titleFooter = {
  title: "Need Help",
  titleStyle: "font-bold",
};
export const titleForCompany: titleFooter = {
  title: "The Company",
  titleStyle: "font-bold",
};

export const footerCopyrightItem: footerCopyright = {
  copyright: "© 2024 All rights reserved",
  copyrightBgStyle: "bg-[#3F271E]",
  copyrightTextStyle: "text-[#fff]",
};

export const footerColor: string = "#3F271E";
