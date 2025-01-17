import {
  InputType,
  InputVariant,
  Placeholder,
} from "@/components/types";
import type { Meta, StoryObj } from "@storybook/react";
import {FormInput} from "./";

const meta: Meta<typeof FormInput> = {
  title: "Components/Forms/FormInput",
  component: FormInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "email", "number", "tel", "date"],
    },
    variant: {
      control: "select",
      options: ["outlined", "standard", "filled"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: InputType.Text,
    label: InputType.TextInputLabel,
    name: InputType.Name,
    placeholder: Placeholder.Text,
    className: InputType.ClassName,
    readOnly: false,
    disabled: false,
    required: true,
    autoFocus: false,
    size: 30,
    labelAsterisk: true,
    errors: true,
    variant: InputVariant.Outlined,
    initialValue: InputType.TextInputIntialValue,
  },
};
