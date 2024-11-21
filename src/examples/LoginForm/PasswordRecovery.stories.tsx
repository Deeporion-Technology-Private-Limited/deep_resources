import type { Meta, StoryObj } from "@storybook/react";
import PasswordRecovery from "./PasswordRecovery";

const meta: Meta<typeof PasswordRecovery> = {
  title: "Examples/Form",
  component: PasswordRecovery,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Password_recovery: Story = {};
