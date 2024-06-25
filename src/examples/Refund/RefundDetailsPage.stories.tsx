import type { Meta, StoryObj } from "@storybook/react";
import { Refund } from "./Refund";

const meta: Meta<typeof Refund> = {
  title: "Examples/Refund",
  component: Refund,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {};
