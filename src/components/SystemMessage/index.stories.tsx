import type { Meta, StoryObj } from "@storybook/react";
import { SystemMessage } from ".";
import { systemMessageTypes } from "./systemMessageTypes";

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
    variant: systemMessageTypes.error,
    children: "You have to agree with Privacy Policy and Terms and Conditions to Sign up",
    addRightIcon : false,
    },
};

export const Warning: Story = {
  args: {
    variant: systemMessageTypes.warning,
    children: "You have to agree with Privacy Policy and Terms and Conditions to Sign up",
    addRightIcon : false,
  },
};

export const Information: Story = {
  args: {
    variant: systemMessageTypes.information,
    children: "You have to agree with Privacy Policy and Terms and Conditions to Sign up",
    addRightIcon : false,
  },
};