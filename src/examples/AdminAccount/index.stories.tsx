import type { Meta, StoryObj } from "@storybook/react";
import AdminStoryComp from ".";

const meta: Meta<typeof AdminStoryComp> = {
  title: "Examples/AdminAccountDetails",
  component: AdminStoryComp,
  parameters: {
    layout: "centered",
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
