import type { Meta, StoryObj } from "@storybook/react";
import { PrimaryButton } from ".";
import {ButtonVariant } from "@/components/type";

const meta: Meta<typeof PrimaryButton> = {
  title: "Components/Button/PrimaryButton",
  component: PrimaryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultNoIcon: Story = {
  args: {
    variant: ButtonVariant.DefaultNoIcon,
    children: "Button",
    hover: true,
    loader : false,
    rightIcon : false,
    addIcon : false,
  },
};

export const DefaultRightIcon: Story = {
  args: {
    variant: ButtonVariant.DefaultRightIcon,
    children: "Button",
    hover : true,
  },
};

export const DefaultLeftIcon: Story = {
  args: {
    variant: ButtonVariant.DefaultLeftIcon,
    children: "Button",
    hover : true,
  },
};