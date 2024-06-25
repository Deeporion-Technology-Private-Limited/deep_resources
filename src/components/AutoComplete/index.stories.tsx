import type { Meta, StoryObj } from "@storybook/react";
import { AutoComplete } from ".";
import { countries } from "../Data/Address";

const meta: Meta<typeof AutoComplete> = {
  title: "Components/AutoComplete/AutoComplete",
  component: AutoComplete,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: "text",
    placeholder: "Insert text here",
    suggestions: ["Apple", "Banana", "Orange", "Peach", "Grapes"],
  },
};

export const Country: Story = {
  args: {
    type: "country",
    placeholder: "Insert number here",
    suggestions: countries.map((country) => country.label),
  },
};

export const MultipleValues: Story = {
  args: {
    type: "multivalues",
    placeholder: "Select Multi Values",
    suggestions: countries.map((country) => country.label),
  },
};
