import { Meta, StoryObj } from "@storybook/react";
import {ProductDetailCard} from ".";
import {productCode, productDetails, productSpecifications} from "../Data/productData";

const meta: Meta<typeof ProductDetailCard> = {
  title: "Components/ProductDetailCard",
  component: ProductDetailCard,
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
