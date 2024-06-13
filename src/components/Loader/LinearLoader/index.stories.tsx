import type { Meta, StoryObj } from "@storybook/react";
import { LinearLoader } from ".";

const meta: Meta<typeof LinearLoader> = {
  title: "Components/Loader/LinearLoader",
  component: LinearLoader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof LinearLoader>;

export const LinearLoaders: Story = {
  args: {
    color: "blue",
    backgroundColor: "lightgray",
    height: "15px",
    animationDuration: "1s"
  },

};
