import type { Meta, StoryObj } from "@storybook/react";
import  ProductDetails  from "../DetailPage/ProductDetailsPage";

const meta: Meta<typeof ProductDetails> = {
  title: "Examples/ProductDetails",
  component: ProductDetails,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Product: Story = {};
