import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter your text",
  },
};

export const WithLabel: Story = {
  args: {
    placeholder: "Enter your text",
    className: "pl-[20px]"
  },
};

export const SearchInput: Story = {
  args: {
    type: "search",
    placeholder: "Search",
  },
};
