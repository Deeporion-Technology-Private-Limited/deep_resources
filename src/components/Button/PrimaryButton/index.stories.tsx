import type { Meta, StoryObj } from "@storybook/react";
import { PrimaryButton } from ".";
import {ButtonSize, ButtonVariant } from "@/components/type";

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

export const Primary: Story = {
  args: {
    variant: ButtonVariant.DefaultPrimary,
    children: "Button",
    hover: true,
    loader : false,
    addRightIcon : false,
    addLeftIcon : false,
    size : ButtonSize.Medium,
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    variant: ButtonVariant.DefaultSeconday,
    children: "Button",
    hover : true,
    loader : false,
    addRightIcon : false,
    addLeftIcon : false,
    size : ButtonSize.Medium,
    disabled: false,
  },
};

export const Darkbackground: Story = {
  args: {
    variant: ButtonVariant.DefaultDarkBackground,
    children: "Button",
    hover : true,
    loader : false,
    addRightIcon : false,
    addLeftIcon : false,
    size : ButtonSize.Medium,
    disabled: false,
  },
};