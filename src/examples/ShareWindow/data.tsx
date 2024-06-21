import icon from "./icon/image-1.svg";
import icon1 from "./icon/image-2.svg";
import icon2 from "./icon/image-3.svg";
import icon3 from "./icon/image-4.svg";
import icon4 from "./icon/image-5.svg";
import icon5 from "./icon/image-6.svg";
import icon6 from "./icon/image-7.svg";
import icon7 from "./icon/image.svg";

export interface IconValues {
  icon?: string;
  text?: string;
  Click?: () => void;
}

export const socialIcons: IconValues[] = [
  {
    icon: icon7,
    text: "copy",
    Click: () => {
      alert("Copy function");
    },
  },
  {
    icon: icon,
    text: "Email",
    Click: () => {
      alert("Email function");
    },
  },
  {
    icon: icon1,
    text: "WhatsApp",
    Click: () => {
      alert("whatsapp function");
    },
  },
  {
    icon: icon2,
    text: "instagram",
    Click: () => {
      alert("instagram function");
    },
  },
  {
    icon: icon3,
    text: "Facebook",
    Click: () => {
      alert("facebook function");
    },
  },
  {
    icon: icon4,
    text: "Twitter",
    Click: () => {
      alert("twitter function");
    },
  },
  {
    icon: icon5,
    text: "slack",
    Click: () => {
      alert("slack function");
    },
  },
  {
    icon: icon6,
    text: "dropbox",
    Click: () => {
      alert("dropbox");
    },
  },
];
