import type { Meta, StoryObj } from "@storybook/react";
import CatalogueProducts from ".";

const meta: Meta<typeof CatalogueProducts> = {
  title: "Examples/CatalogueProducts",
  component: CatalogueProducts,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {};
