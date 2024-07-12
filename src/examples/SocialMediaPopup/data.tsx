import { FindIconUrl } from "@/utils/Constant";
export interface PopupButtons {
  icon?: string;
  text?: string;
  buttonText?: string;
  click?: () => void;
}

export interface PopupItem {
    item: PopupButtons[];
  }
export const socialMedia: PopupButtons[] = [
  {
    icon: FindIconUrl("Facebook.svg"),
    text: "facebook",
    click: () => {
      alert("facebook function");
    },
    buttonText: "Connect facebook",
  },
  {
    icon: FindIconUrl("Google.svg"),
    text: "google",
    click: () => {
      alert("google function");
    },
    buttonText: "Connect google",
  },
  {
    icon: FindIconUrl("twitter.svg"),
    text: "twitter",
    click: () => {
      alert("twitter function");
    },
    buttonText: "Connect twitter",
  },
  {
    icon: FindIconUrl("LinkedIn.svg"),
    text: "linkedin",
    click: () => {
      alert("linkedin function");
    },
    buttonText: "Connect linkedin",
  },
  {
    icon: FindIconUrl("Instagram.svg"),
    text: "instagram",
    click: () => {
      alert("instagram function");
    },
    buttonText: "Connect instagram",
  },
  {
    icon: FindIconUrl("YouTube-1.svg"),
    text: "youtube",
    click: () => {
      alert("youtube function");
    },
    buttonText: "Connect youtube",
  },
];
