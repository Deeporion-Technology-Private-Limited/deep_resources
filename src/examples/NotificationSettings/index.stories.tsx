import type { Meta, StoryObj } from "@storybook/react";
import NotificationSettings from ".";


const meta: Meta<typeof NotificationSettings> = {
  title: "Examples/NotificationSettings",
  component: NotificationSettings,
  parameters: {
    layout: "centered",
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
