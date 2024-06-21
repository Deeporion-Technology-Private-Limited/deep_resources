import { Meta, StoryObj } from "@storybook/react";
import ShareWindow from ".";
const meta: Meta<typeof ShareWindow> = {
  title: "Examples/SharWindow",
  component: ShareWindow,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {};
