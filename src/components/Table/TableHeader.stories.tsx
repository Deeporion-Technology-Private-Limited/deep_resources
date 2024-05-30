import type { Meta, StoryObj } from "@storybook/react";
import { TableHeader } from "./TableHeader";

const meta: Meta<typeof TableHeader> = {
  title: "Components/TableHeader",
  component: TableHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: ["ID", "Order", "Date", "Amount", "Time created", "Status", "Name", "Role"],
  },
};

export const Solid: Story = {
  args: {
    variant: "solid",
    children: ["ID", "Order", "Date", "Amount", "Time created", "Status", "Name", "Role"],
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: ["ID", "Order", "Date", "Amount", "Time created", "Status", "Name", "Role"],
  },
};

export const Custom: Story = {
  args: {
    variant: "custom",
    children: ["ID", "Order", "Date", "Amount", "Time created", "Status", "Name", "Role"],
  },
};

