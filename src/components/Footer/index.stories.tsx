import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from ".";
import { Box, IconsList, IconButton, Input, Text, Button } from "@/components";

import instagram from "../Header/navbarIcons/Instagram.svg";
import linkedin from "../Header/navbarIcons/LinkedIn.svg";
import facebook from "../Header/navbarIcons/Facebook.svg";
import google from "../Header/navbarIcons/Google.svg";

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
    title: "Customer Services",
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
    title: "Need Help",
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
    title: "SIGN UP FOR OUR NEWSLETTER",
    description:
      "Be the first to know about our new collections, exclusive offers, and other perks!",
    newsLetter: true,
    links:[
      {iconUrl: instagram},
      {iconUrl: linkedin},
      {iconUrl: facebook},
      {iconUrl: google},
    ]
  },
};