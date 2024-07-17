import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from ".";
import { ButtonSize } from "../types";
import { useState } from "react";

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
    value: "Default Checkbox",
    checked: false,
    size: ButtonSize.Medium,
    variant: "Basic",
    labelClassname: "",
    onChange: () => { },
  },
};

export const Checked: Story = {
  args: {
    label: "Checked Checkbox",
    checked: true,
    size: ButtonSize.Medium,
    onChange: () => { },
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Checkbox",
    checked: false,
    size: ButtonSize.Medium,
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

export const ToogleSwitch: Story = {
  args: {
    type: "toggle",
    checked: false,
    size: ButtonSize.Medium,
    variant: "Basic",
    labelPosition: "before",
    onChange: () => { },
  },
};

export const CustomCheckbox: Story = {
  args: {
    type: "checkbox",
    label: "Custom Checkbox",
    checked: true,
    containerClassName: "w-10 h-10 rounded-lg border-2 border-blue-500 bg-blue-100",
    inputClassName: "cursor-pointer",
    checkedClassName: "",
    fillColor: 'red'
  }
}

export const CustomeRadio: Story = {
  args: {
    type: "radio",
    label: "Custom Radio",
    containerClassName: "w-10 h-10 rounded-full border-2 border-green-500 bg-teal-200 ",
    inputClassName: "cursor-pointer",
    checkedClassName: "bg-red-500",
  }
};

export const CustomToggle: Story = {
  args: {

    type: "toggle",
    label: "Custom Toggle",
    containerClassName: "w-[4.2rem] h-9 rounded-full border-2 border-purple-500 bg-white",
    inputClassName: "cursor-pointer",
    checkedClassName: "bg-teal-500",
  }
};

export const DisabledToggle: Story = {

  args: {
    type: "toggle",
    label: "Disabled Toggle",
    checked: false,
    disabled: true,
    containerClassName: "w-16 h-9 rounded-full border-2 border-gray-500 bg-gray-200 cursor-not-allowed opacity-50",
    inputClassName: "cursor-not-allowed",
    checkedClassName: "bg-gray-500",
  }
}

export const RadioGroup: Story = {

  args: {

  },

  render: () => {
    const [checkedValue, setCheckedValue] = useState<string>("option1"); // State to track checked value

    return (
      <div>
        <Checkbox
          label="Option 1"
          type="radio"
          value="option1"
          name="radioGroup"
          checked={checkedValue === "option1"}
          onChange={() => setCheckedValue("option1")}
        />
        <Checkbox
          label="Option 2"
          type="radio"
          value="option2"
          name="radioGroup"
          checked={checkedValue === "option2"}
          onChange={() => setCheckedValue("option2")}
        />
        <Checkbox
          label="Option 3"
          type="radio"
          value="option3"
          name="radioGroup"
          checked={checkedValue === "option3"}
          onChange={() => setCheckedValue("option3")}
        />
      </div>
    );
  }


};