import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";
import SearchImage from "./Icons/SearchImage";
import CloseEye from "./Icons/CloseEye";
import OpenEye from "./Icons/OpenEye";
import { InputType } from "../Input/type";

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
    type: InputType.Text,
    placeholder: "Insert text here",
  },
};

export const Password: Story = {
  args: {
    type: InputType.Password,
    placeholder: "Password",
    eye: <CloseEye />,
    eyeOpen: <OpenEye />,
  },
};

export const Number: Story = {
  args: {
    type: InputType.Number,
    placeholder: "Number",
  },
};

export const Numbers: Story = {
  args: {
    type: InputType.Numbers,
    placeholder: "Number",
  },
};

export const Date: Story = {
  args: {
    type: InputType.Date,
    placeholder: "Date",
  },
};

export const Phone: Story = {
  args: {
    type: InputType.Phones,
    placeholder: "Phone",
  },
};

export const PhoneNumber: Story = {
  args: {
    type: InputType.Phone,
    placeholder: "Phone Number",
  },
};

export const SearchInput: Story = {
  args: {
    type: InputType.Search,
    placeholder: "Search",
  },
};

export const SearchIcon: Story = {
  args: {
    type: InputType.SearchIcon,
    search: <SearchImage />,
    placeholder: "Search here ...",
  },
};

export const EmailInput: Story = {
  args: {
    type: InputType.Email,
    placeholder: "Enter your email",
  },
};

export const SimpleInput: Story = {
  args: {
    type: InputType.Input,
    placeholder: "Enter Something",
  },
};

export const PrefixInput: Story = {
  args: {
    type: InputType.Prefix,
    placeholder: "Enter Something",
    prefix: "$",
  },
};