import type { Meta, StoryObj } from "@storybook/react";
import PhoneVerify from "./PhoneVerify";

const meta: Meta<typeof PhoneVerify> = {
  title: "Examples/Form",
  component: PhoneVerify,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Phone_verify: Story = {};
