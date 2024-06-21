import type { Meta, StoryObj } from "@storybook/react";
import  ConfirmOrder from ".";

const meta: Meta<typeof ConfirmOrder> = {
  title: "Examples/ConfirmOrder",
  component: ConfirmOrder,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ConfirmOrderView: Story = {
  args: {
    title: "Hey Tessa Rain",
    message: "Your Order is Confirmed!",
    description: "We'll send you a shipping confirmation e-mail as soon as your order gets shipped.",
    children: "Track your Order",
    onClick: () => {alert("Track your Order!")},
  },
};