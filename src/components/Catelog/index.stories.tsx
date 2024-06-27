import { Meta, StoryObj } from "@storybook/react";
import Cateloge from ".";
import { arr } from "./data";

const meta: Meta<typeof Cateloge> = {
  title: "Components/Catelog",
  component: Cateloge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args:{
    data:arr,
  }
};
