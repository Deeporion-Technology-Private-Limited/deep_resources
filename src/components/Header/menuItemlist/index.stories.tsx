import type { Meta, StoryObj } from "@storybook/react";
import { AnchorList } from ".";
import { Anchor } from "../manuItem";

const meta: Meta<typeof AnchorList> = {
  title: "Components/AnchorList",
  component: AnchorList,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Anchor href="https://example.com">Menu</Anchor>
        <Anchor href="https://example.com">Item</Anchor>
      </>
    ),
  },
};

export const Column: Story = {
  args: {
    variant: "column",
    children: (
      <>
        <Anchor href="https://example.com">Menu</Anchor>
        <Anchor href="https://example.com">Item</Anchor>
      </>
    ),
  },
};