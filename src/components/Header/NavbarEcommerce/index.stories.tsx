import type { Meta, StoryObj } from "@storybook/react";
import { NavbarEcommerceHeader } from ".";


const meta: Meta<typeof NavbarEcommerceHeader> = {
  title: "Components/NavbarEcommerceHeader", 
  component: NavbarEcommerceHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};