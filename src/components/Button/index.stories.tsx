import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { ButtonSize, ButtonVariant } from "./type";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
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
    loader: false,
    addRightIcon: false,
    addLeftIcon: false,
    size: ButtonSize.Medium,
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    variant: ButtonVariant.DefaultSeconday,
    children: "Button",
    hover: true,
    loader: false,
    addRightIcon: false,
    addLeftIcon: false,
    size: ButtonSize.Medium,
    disabled: false,
  },
};

export const DarkBackground: Story = {
  args: {
    children: "Button",
    variant: ButtonVariant.DefaultDarkBackground,
    hover: true,
    loader: false,
    addRightIcon: false,
    addLeftIcon: false,
    size: ButtonSize.Medium,
    disabled: false,
  },
};
