import type { Meta, StoryObj } from "@storybook/react";
import AdminSubscriptionStory from ".";


const meta: Meta<typeof AdminSubscriptionStory> = {
  title: "Examples/AdminSubscriptionPage",
  component: AdminSubscriptionStory,
  parameters: {
    layout: "centered",
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
