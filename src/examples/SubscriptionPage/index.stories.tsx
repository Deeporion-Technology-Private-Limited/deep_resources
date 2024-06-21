import type { Meta, StoryObj } from "@storybook/react";
import { SubscriptionPage } from ".";


const meta: Meta<typeof SubscriptionPage> = {
  title: "Examples/SubscriptionPage",
  component: SubscriptionPage,
  parameters: {
    layout: "centered",
  }
};


export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {};
