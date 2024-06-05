import type { Meta, StoryObj } from "@storybook/react";
import { Chips }from "."

const meta: Meta<typeof Chips> = {
  title: "Components/Chips",
  component: Chips,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "solid",
    children: "#1 day",
    addRightIcon : false,
    addLeftIcon : false,
    },
};

export const Not_Active: Story = {
  args: {
    variant: "outline",
    children: "#1 day",
    addRightIcon : false,
    addLeftIcon : false,
  },
};

export const Active: Story = {
  args: {
    variant: "ghost",
    children: "#1 day",
    addRightIcon : false,
    addLeftIcon : false,
  },
};