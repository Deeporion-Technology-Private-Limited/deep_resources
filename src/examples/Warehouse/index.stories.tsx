import type { Meta, StoryObj } from "@storybook/react";
import Warehouses from ".";

const meta: Meta<typeof Warehouses> = {
  title: "Examples/Warehouse",
  component: Warehouses,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {};
