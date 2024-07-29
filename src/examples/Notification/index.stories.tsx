import { Meta, StoryObj } from "@storybook/react";
import { Notification } from ".";
import { notificationsObj } from "@/components/Data/Notification";

const meta: Meta<typeof Notification> = {
    title: "Examples/Notification",
    component: Notification,
    tags: ["autodocs"],
  };
  
  export default meta;
  
  type Story = StoryObj<typeof meta>;

  export const Default: Story = {
    args: {
        value: notificationsObj 
    }
  };