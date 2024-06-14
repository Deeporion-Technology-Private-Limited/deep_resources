import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "./LoginForm";
import NewPassword from "./NewPassword";

const meta: Meta<typeof NewPassword> = {
  title: "Examples/Form",
  component: NewPassword,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const New_Password: Story = {};
