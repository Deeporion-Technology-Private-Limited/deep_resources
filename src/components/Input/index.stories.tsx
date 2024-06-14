import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";
import SearchImage from "./Icons/SearchImage";
import CloseEye from "./Icons/CloseEye";
import OpenEye from "./Icons/OpenEye";
import { InputType, Placeholder } from "../Input/type";

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
    placeholder: Placeholder.Text,
  },
};

export const Password: Story = {
  args: {
    type: InputType.Password,
    placeholder: Placeholder.Password,
    eye: <CloseEye />,
    eyeOpen: <OpenEye />,
  },
};

export const Number: Story = {
  args: {
    type: InputType.Number,
    placeholder: Placeholder.Number,
  },
};

export const Numbers: Story = {
  args: {
    type: InputType.Numbers,
    placeholder: Placeholder.Number,
  },
};

export const Date: Story = {
  args: {
    type: InputType.Date,
    placeholder: Placeholder.Date,
  },
};

export const Phone: Story = {
  args: {
    type: InputType.Phones,
    placeholder: Placeholder.Phone,
  },
};

export const PhoneNumber: Story = {
  args: {
    type: InputType.Phone,
    placeholder: Placeholder.PhoneNumber,
  },
};

export const SearchInput: Story = {
  args: {
    type: InputType.Search,
    placeholder: Placeholder.Search,
  },
};

export const SearchIcon: Story = {
  args: {
    type: InputType.SearchIcon,
    search: <SearchImage />,
    placeholder: Placeholder.SearchIcon,
  },
};

export const EmailInput: Story = {
  args: {
    type: InputType.Email,
    placeholder: Placeholder.Email,
  },
};

export const SimpleInput: Story = {
  args: {
    type: InputType.Input,
    placeholder: Placeholder.Input,
  },
};

export const PrefixInput: Story = {
  args: {
    type: InputType.Prefix,
    placeholder: Placeholder.Prefix,
    prefix: "$",
  },
};

export const OtpInput: Story = {
  args: {
    type: InputType.Otp,
  },
};