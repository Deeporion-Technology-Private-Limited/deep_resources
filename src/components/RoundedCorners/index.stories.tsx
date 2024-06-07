import type { Meta, StoryObj } from "@storybook/react";
import { RoundedCorners } from ".";
import { BorderRadius } from "./type";

const meta: Meta<typeof RoundedCorners> = {
  title: "Components/RoundedCorners",
  component: RoundedCorners,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BorderRadiusLevels: Story = {
  args: {
    borderRadius: BorderRadius.Medium
  },
};