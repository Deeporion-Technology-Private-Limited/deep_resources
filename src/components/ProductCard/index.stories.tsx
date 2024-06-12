import { Meta, StoryObj } from "@storybook/react";
import {ProductCard} from ".";
import {productCode, productDetails, productSpecifications} from "../Data/productData";

const meta: Meta<typeof ProductCard> = {
  title: "Components/ProductCard",
  component: ProductCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    productCode,
    productDetails,
    productSpecifications,
    },
};
