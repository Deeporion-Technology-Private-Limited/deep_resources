import { Meta, StoryObj } from "@storybook/react";
import SocialMediaPopup from ".";
import { socialMedia } from "./data";

const meta: Meta<typeof SocialMediaPopup> = {
  title: "Examples/SocialMediaPopup",
  component: SocialMediaPopup,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof SocialMediaPopup>;
export const View: Story = {
  args: {
    item: socialMedia,
  },
};
