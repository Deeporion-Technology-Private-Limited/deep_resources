import { Meta, StoryObj } from "@storybook/react";
import {ProductCard} from ".";

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
    productCode: "00123456",
    productDetail: {
      productDetails: "Navy Blue printed woven empire %S, has a V-neck, three-quarter sleeves, and flared hem",
      sizeAndFit: "Semi-Fit\nThe model (height 5'8\") is wearing a size S",
      materialAndCare: "Cotton\nMachine-wash"
    },
    productSpecifications: {
      fabric: "Cotton",
      fabricType: "Cotton",
      hemline: "Flared",
      knitOrWoven: "Woven",
      length: "Maxi",
      mainTrend: "Bohemian",
      neck: "V-Neck",
      occasion: "Daily",
      color: "Black",
      style: "Dress",
    },
  },
};
