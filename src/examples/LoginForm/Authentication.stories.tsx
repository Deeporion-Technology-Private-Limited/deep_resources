import type { Meta, StoryObj } from "@storybook/react";
import Authentication from "./Authentication";

const meta: Meta<typeof Authentication> = {
  title: "Examples/Form",
  component: Authentication,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Two_Factor_Authentication: Story = {};
