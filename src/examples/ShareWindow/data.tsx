import { FindIconUrl } from "@/utils/Constant";

export interface IconValues {
  icon?: string;
  text?: string;
  Click?: () => void;
}
export interface ShareItem{
  item:IconValues[];
}

export const socialIcons: IconValues[] = [
  {
    icon: FindIconUrl("ContentCopy.svg"),
    text: "copy",
    Click: () => {
      alert("Copy function");
    },
  },
  {
    icon: FindIconUrl("OutlineMail.svg"),
    text: "Email",
    Click: () => {
      alert("Email function");
    },
  },
  {
    icon: FindIconUrl("Whatsapp.svg"),
    text: "WhatsApp",
    Click: () => {
      alert("whatsapp function");
    },
  },
  {
    icon: FindIconUrl("Instagram.svg"),
    text: "instagram",
    Click: () => {
      alert("instagram function");
    },
  },
  {
    icon: FindIconUrl("Facebook.svg"),
    text: "Facebook",
    Click: () => {
      alert("facebook function");
    },
  },
  {
    icon: FindIconUrl("twitter.svg"),
    text: "Twitter",
    Click: () => {
      alert("twitter function");
    },
  },
  {
    icon: FindIconUrl("Slack.svg"),
    text: "slack",
    Click: () => {
      alert("slack function");
    },
  },
  {
    icon: FindIconUrl("Dropbox.svg"),
    text: "dropbox",
    Click: () => {
      alert("dropbox");
    },
  },
];
