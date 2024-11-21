import type { Meta, StoryObj } from "@storybook/react";
import OffersGiftCards from ".";

const meta: Meta<typeof OffersGiftCards> = {
  title: "Examples/OffersGiftCards",
  component: OffersGiftCards,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {};
