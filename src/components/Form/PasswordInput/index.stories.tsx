import type { Meta, StoryObj } from "@storybook/react";
import PasswordInput from "./";
import {
  InputType,
  InputVariant,
  Placeholder,
} from "@/components/types";

const meta: Meta<typeof PasswordInput> = {
  title: "Components/Forms/PasswordInput",
  component: PasswordInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["outlined", "standard", "filled"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Password: Story = {
  args: {
    type: InputType.Password,
    label: InputType.PasswordInputLabel,
    name: InputType.Name,
    placeholder: Placeholder.Password,
    className: InputType.ClassName,
    readOnly: false,
    disabled: false,
    required: true,
    autoFocus: false,
    size: 30,
    labelAsterisk: true,
    errors: false,
    variant: InputVariant.Outlined,
    initialValue:InputType.TextInputIntialValue,
  },
};
