import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from ".";
import { ButtonSize } from "../Button/type";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Default Checkbox",
    checked: false,
    size: ButtonSize.Medium,
    variant: "Basic",
    labelClassname: "",
    className: "",
    onChange: () => { },
  },
};

export const Checked: Story = {
  args: {
    label: "Checked Checkbox",
    checked: true,
    size: ButtonSize.Medium,
    variant: "Basic",
    onChange: () => { },
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Checkbox",
    checked: false,
    size: ButtonSize.Medium,
    variant: "Disable",
    disabled: true,
    onChange: () => { },
  },
};

export const Radio: Story = {
  args: {
    label: "Radio Option",
    checked: false,
    size: ButtonSize.Medium,
    variant: "Basic",
    type: "radio",
    onChange: () => { },
  },
};

export const LabelBefore: Story = {
  args: {
    label: "Label Before Checkbox",
    checked: false,
    size: ButtonSize.Medium,
    variant: "Basic",
    labelPosition: "before",
    onChange: () => { },
  },
};

export const CustomClassName: Story = {
  args: {
    label: "Custom Styled Checkbox",
    checked: false,
    size: ButtonSize.Medium,
    variant: "Basic",
    className: "bg-red-500 border-blue-500",
    onChange: () => { },
  },
};

export const CustomContainer: Story = {
  args: {
    label: "Custom Container Style",
    checked: false,
    size: ButtonSize.Medium,
    variant: "Basic",
    // containerClassName: "p-4 bg-gray-100 border border-gray-300 rounded",
    onChange: () => { },
  },
};
