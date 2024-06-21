import type { Meta, StoryObj } from "@storybook/react";
import ProductListing from "./ProductListing";
import { demo } from "../ShopingCards/data";

const meta: Meta<typeof ProductListing> = {
  title: "Examples/Pages",
  component: ProductListing,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Product_Listing: Story = {};

export const View: Story = {
  args: {
    item: demo,
  },
};
