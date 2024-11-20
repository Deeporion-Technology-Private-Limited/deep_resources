import { Meta, StoryObj } from "@storybook/react";
import { AdminSidebar } from ".";
import { Data } from "./adminbarConst";
import { FindIconUrl } from "@/utils/Constant";


const meta: Meta<typeof AdminSidebar> = {
  title: "Examples/AdminSidebar",
  component:AdminSidebar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    Data: Data,
    logo: FindIconUrl("Logo.svg")
  }
};
