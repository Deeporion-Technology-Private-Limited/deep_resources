import type { Meta, StoryObj } from "@storybook/react";
import { AddGiftCard } from ".";

const meta: Meta<typeof AddGiftCard> = {
  title: "Examples/AddGiftCard",
  component: AddGiftCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const AddGiftCardView: Story = {

};