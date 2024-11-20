import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from ".";
import { FindIconUrl } from "@/utils/Constant";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CustomerServices: Story = {
  args: {
    className: "max-w-[320px]",
    heading: {
      title:"Customer Services",
    },
    services: [
      {
        name: "Phone",
        value: "1-800-123-4567",
      },
      {
        name: "Email",
        value: "karan@gmail.com",
      },
    ]
  },
};

export const NeedHelp: Story = {
  args: {
    className: "max-w-[320px]",
    heading: {
      title:"Need help",
    },
    list: [
      { name: "The Pinklay Story", href: "https://www.pinklay.com" },
      { name: "The Pinklay Story", href: "https://www.pinklay.com" },
      { name: "The Pinklay Story", href: "https://www.pinklay.com" },
      { name: "The Pinklay Story", href: "https://www.pinklay.com" },
    ],
  },
};

export const NewsLetter: Story = {
  args: {
    className: "max-w-full",
    heading: {
      title:"The NewsLetter",
    },
    description:
      "Be the first to know about our new collections, exclusive offers, and other perks!",
    newsLetter: true,
    links:[
      {
        iconUrl: FindIconUrl("Instagram.svg"),
        href: ""
      },
      {
        iconUrl: FindIconUrl("LinkedIn.svg"),
        href: ""
      },
      {
        iconUrl: FindIconUrl("Facebook.svg"),
        href: ""
      },
      {
        iconUrl: FindIconUrl("Google.svg"),
        href: ""
      },
    ]
  },
};
