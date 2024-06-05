import type { Meta, StoryObj } from "@storybook/react";
import { SystemMessage } from ".";

const meta: Meta<typeof SystemMessage> = {
  title: "Components/systemMessage",
  component: SystemMessage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "error",
    children: "You have to agree with Privacy Policy and Terms and Conditions to Sign up",
    addRightIcon : false,
    },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "You have to agree with Privacy Policy and Terms and Conditions to Sign up",
    addRightIcon : false,
  },
};

export const Information: Story = {
  args: {
    variant: "information",
    children: "You have to agree with Privacy Policy and Terms and Conditions to Sign up",
    addRightIcon : false,
  },
};