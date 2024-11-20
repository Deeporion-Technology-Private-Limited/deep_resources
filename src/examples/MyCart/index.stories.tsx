import { Meta, StoryObj } from "@storybook/react";
import Cart from ".";
import { demo } from "@/components/Data/MyCart";
const meta: Meta<typeof Cart> = {
  title: "Examples/MyCart",
  component: Cart,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;


export const View: Story = {
  args:{
      item:demo,
      handleCart:()=>{
        alert("checkout clicked")
      }
  }
};
