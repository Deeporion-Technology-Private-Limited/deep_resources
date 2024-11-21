import type { Meta, StoryObj } from "@storybook/react";
import { ProductDescriptionReview } from ".";


const meta: Meta<typeof ProductDescriptionReview> = {
  title: "Examples/ProductDescriptionReview",
  component: ProductDescriptionReview,
  parameters: {
    layout: "centered",
  }
};


export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {};
