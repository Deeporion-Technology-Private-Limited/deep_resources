import type { Meta, StoryObj } from "@storybook/react";
import Signup from "./Signup";

const meta: Meta<typeof Signup> = {
  title: "Examples/Form",
  component: Signup,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Sign_up: Story = {};
