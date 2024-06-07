import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";
import SearchImage from "./Icons/SearchImage";
import CloseEye from "./Icons/CloseEye";
import OpenEye from "./Icons/OpenEye";

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
    eye: <CloseEye />,
    eyeOpen: <OpenEye />,

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
    type: "phone",
    placeholder: "Phone Number",
  },
};

export const SearchInput: Story = {
  args: {
    type: "search",
    placeholder: "Search",
  },
};

export const SearchIcon: Story = {
  args: {
    type: "search icon",
    search: <SearchImage />,
    placeholder: "Search here ...",
  },
};

export const EmailInput: Story = {
  args: {
    type: "email",
    placeholder: "Enter your email",
  },
};

export const SimpleInput: Story = {
  args: {
    type: "input",
    placeholder: "Enter Something",
  },
};

export const PrefixInput: Story = {
  args: {
    type: "prefix",
    placeholder: "Enter Something",
    prefix: "$"
  },
};
