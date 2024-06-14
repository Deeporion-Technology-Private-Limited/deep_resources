import type { Meta, StoryObj } from "@storybook/react";
import { CircularLoader } from ".";

const meta: Meta<typeof CircularLoader> = {
  title: "Components/Loader/CircularLoader",
  component: CircularLoader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof CircularLoader>;

export const CircularLoaders: Story = {
  args: {
    border: "8px solid #f3f3f3",
    borderTop: "8px solid blue",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    animation: "spin 2s linear infinite",
  },
};
