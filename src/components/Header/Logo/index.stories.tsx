import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from ".";

const meta: Meta<typeof Logo> = {
  title: "Components/Header/Logo",
  component: Logo,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
      children:"Logo"
    },
  };


