import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { ButtonIconPosition, ButtonSize, ButtonVariant } from "../../types";
import { FindIconUrl } from "@/utils/Constant";

const meta: Meta<typeof Button> = {
  title: "Components/Button/DefaultButton",
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
    iconUrl: FindIconUrl("AddItem.svg"),
    children: "Button",
    hover: true,
    size: ButtonSize.Medium,
    disabled: false,
    iconPosition: ButtonIconPosition.Right ,
  }
};

export const Secondary: Story = {
  args: {
    variant: ButtonVariant.DefaultSeconday,
    iconUrl: FindIconUrl("AddItem.svg"),
    children: "Button",
    hover: true,
    size: ButtonSize.Medium,
    disabled: false,
    iconPosition: ButtonIconPosition.Right ,
  },
};

export const DarkBackground: Story = {
  args: {
    children: "Button",
    iconUrl: FindIconUrl("AddItem.svg"),
    variant: ButtonVariant.DefaultDarkBackground,
    hover: true,
    size: ButtonSize.Medium,
    disabled: false,
    iconPosition: ButtonIconPosition.Right ,

  },
};
