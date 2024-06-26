import { Meta, StoryObj } from "@storybook/react";
import ShareWindow from ".";
import { socialIcons } from "./data";
const meta: Meta<typeof ShareWindow> = {
  title: "Examples/SharePopup",
  component: ShareWindow,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {
  args:{
    item:socialIcons
  }
};
