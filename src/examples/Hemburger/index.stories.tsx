import { Meta, StoryObj } from "@storybook/react";
import { Hamburger } from ".";

const meta: Meta<typeof Hamburger> = {
    title: "Examples/Hemburger",
    component: Hamburger,
    tags: ["autodocs"],
  };
  
  export default meta;
  
  type Story = StoryObj<typeof meta>;

  export const Default: Story = {
  };