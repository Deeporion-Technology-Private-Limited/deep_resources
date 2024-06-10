import type { Meta, StoryObj } from "@storybook/react";
import { Chips }from "."
import { ChipsTypes } from "./chipsTypes";

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
    variant: ChipsTypes.default,
    children: "#1 day",
    addRightIcon : false,
    addLeftIcon : false,
    },
};

export const Not_Active: Story = {
  args: {
    variant:ChipsTypes.not_active,
    children: "#1 day",
    addRightIcon : false,
    addLeftIcon : false,
  },
};

export const Active: Story = {
  args: {
    variant: ChipsTypes.active,
    children: "#1 day",
    addRightIcon : false,
    addLeftIcon : false,
  },
};