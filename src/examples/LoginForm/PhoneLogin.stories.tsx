import type { Meta, StoryObj } from "@storybook/react";
import PhoneLogin from "./PhoneLogin";

const meta: Meta<typeof PhoneLogin> = {
  title: "Examples/Form",
  component: PhoneLogin,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Phone_login: Story = {};
