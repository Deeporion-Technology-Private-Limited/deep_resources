import type { Meta, StoryObj } from "@storybook/react";
import { Anchor } from ".";

const meta: Meta<typeof Anchor> = {
  title: "Components/Anchor",
  component: Anchor,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "https://example.com",
    children: "Click me",
  },
};