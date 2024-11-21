import type { Meta, StoryObj } from "@storybook/react";
import { OrderList } from "./OrderList";

const meta: Meta<typeof OrderList> = {
  title: "Examples/OrderList",
  component: OrderList,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {};
