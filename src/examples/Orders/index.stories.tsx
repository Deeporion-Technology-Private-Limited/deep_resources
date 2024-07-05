import { Meta, StoryObj } from "@storybook/react";
import Agents from ".";
import Order from ".";
import { data } from "./data";
import { sortingArray } from "../Wishlist/Data";

const meta: Meta<typeof Agents> = {
  title: "Examples/Order",
  component: Order,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const OrderTable: Story = {
  args: {
    data: data,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target.value);
    },
    sortingArray: sortingArray,
    search: "",
    onCheckBoxChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      alert(value);
      return value;
    },
  },
};
