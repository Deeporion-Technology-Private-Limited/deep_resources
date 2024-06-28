import { Meta, StoryObj } from "@storybook/react";
import { AdminSidebar } from ".";

const meta: Meta<typeof AdminSidebar> = {
  title: "Examples/AdminSidebar",
  component:AdminSidebar,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
