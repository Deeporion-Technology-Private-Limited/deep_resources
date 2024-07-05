import { Meta, StoryObj } from "@storybook/react";
import Settings from ".";
const meta: Meta<typeof Settings> = {
  title: "Examples/Settings",
  component: Settings,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {};
