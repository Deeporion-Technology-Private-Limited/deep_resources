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
    checked: false,
    label: "",
    onChange: (e) => {alert(e.target.value)},
    value: "label",
    className: "",
    labelClassname: "",
  },
};


export const WithText: Story = {
  args: {
    type: InputType.Checkbox,
    label: "This is a text",
    defaultChecked: true,
    onChange: () => alert("You selected this option")
  },
};

export const Disable: Story = {
  args: {
    type: InputType.Checkbox,
    disabled: true
  },
};

