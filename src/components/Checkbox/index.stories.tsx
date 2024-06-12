import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from ".";
import { InputType } from "./CheckboxTypes";

const meta: Meta<typeof Checkbox> = {
    title: "Components/Checkbox",
    component: Checkbox,
    parameters: {
      layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    type: InputType.Checkbox,
  },
};

export const Radio: Story = {
  args: {
    type: InputType.Radio,
  },
};

export const WithText: Story = {
  args: {
    type: InputType.Checkbox,
    label: "This is a text"
  },
};

export const Disable: Story = {
  args: {
    type: InputType.Checkbox,
    disabled: true
  },
};

