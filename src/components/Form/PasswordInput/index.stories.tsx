import type { Meta, StoryObj } from "@storybook/react";
import PasswordInput from "./";
import {
  FormInputType,
  FormInputVariant,
  Placeholder,
} from "@/components/Data/FormInputData";

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
    type: FormInputType.Password,
    label: FormInputType.PasswordInputLabel,
    name: FormInputType.Name,
    placeholder: Placeholder.Password,
    className: FormInputType.ClassName,
    readOnly: false,
    disabled: false,
    required: true,
    autoFocus: false,
    size: 30,
    labelAsterisk: true,
    errors: false,
    variant: FormInputVariant.Outlined,
    initialValue: FormInputType.TextInputIntialValue,
  },
};
