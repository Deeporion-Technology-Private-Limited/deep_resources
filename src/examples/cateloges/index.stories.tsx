import type { Meta, StoryObj } from "@storybook/react";
import Cateloges from ".";

const meta: Meta<typeof Cateloges> = {
  title: "Examples/CatelogesExample",
  component: Cateloges,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {};
