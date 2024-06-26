import facebook from "../../components/Header/navbarIcons/Facebook.svg";
import google from "../../components/Header/navbarIcons/Google.svg";
import instagram from "../../components/Header/navbarIcons/Instagram.svg";
import linkedin from "../../components/Header/navbarIcons/LinkedIn.svg";
import youtube from "../../components/Header/navbarIcons/YouTube-1.svg";
import twitter from "../ShareWindow/icon/image-5.svg";
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
    icon: facebook,
    text: "facebook",
    click: () => {
      alert("facebook function");
    },
    buttonText: "Connect facebook",
  },
  {
    icon: google,
    text: "google",
    click: () => {
      alert("google function");
    },
    buttonText: "Connect google",
  },
  {
    icon: twitter,
    text: "twitter",
    click: () => {
      alert("twitter function");
    },
    buttonText: "Connect twitter",
  },
  {
    icon: linkedin,
    text: "linkedin",
    click: () => {
      alert("linkedin function");
    },
    buttonText: "Connect linkedin",
  },
  {
    icon: instagram,
    text: "instagram",
    click: () => {
      alert("instagram function");
    },
    buttonText: "Connect instagram",
  },
  {
    icon: youtube,
    text: "youtube",
    click: () => {
      alert("youtube function");
    },
    buttonText: "Connect youtube",
  },
];
