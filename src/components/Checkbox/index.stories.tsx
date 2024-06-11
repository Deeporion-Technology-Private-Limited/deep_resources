import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from ".";

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
    type: "checkbox",
  },
};

export const Radio: Story = {
  args: {
    type: "radio",
  },
};

export const WithText: Story = {
  args: {
    type: "checkbox",
    label: "This is a text"
  },
};

export const Disable: Story = {
  args: {
    type: "checkbox",
    disabled: true
  },
};

