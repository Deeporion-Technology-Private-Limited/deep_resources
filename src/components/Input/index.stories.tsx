import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Components/Inputs/Input",
  component: Input,
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
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Password",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Number",
  },
};

export const Numbers: Story = {
  args: {
    type: "numbers",
    placeholder: "Number",
  },
};

export const Date: Story = {
  args: {
    type: "date",
    placeholder: "Date",
  },
};

export const Phone: Story = {
  args: {
    type: "Phone",
    placeholder: "Phone",
  },
};

export const PhoneNumber: Story = {
  args: {
    type: "Phone number",
    placeholder: "Phone Number",
  },
};

export const SearchInput: Story = {
  args: {
    type: "search",
    placeholder: "Search",
  },
};

export const EmailInput: Story = {
  args: {
    type: "email",
    placeholder: "Enter your email",
  },
};
