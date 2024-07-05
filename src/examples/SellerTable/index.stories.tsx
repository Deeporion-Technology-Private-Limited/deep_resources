import type { Meta, StoryObj } from "@storybook/react";
import SellerTableExample from ".";

const meta: Meta<typeof SellerTableExample> = {
  title: "Examples/SellerTable",
  component: SellerTableExample,
  parameters: {
    layout: "centered",
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
