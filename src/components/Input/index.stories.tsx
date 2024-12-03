import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";
import SearchImage from "./InputIcons/SearchImage";
import CloseEye from "./InputIcons/CloseEye";
import OpenEye from "./InputIcons/OpenEye";
import { InputType, InputVariant, Placeholder } from "../types";

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
    variant: InputVariant.Outlined,
  },
};

export const Password: Story = {
  args: {
    type: InputType.Password,
    placeholder: Placeholder.Password,
    eye: <CloseEye />,
    eyeOpen: <OpenEye />,
    variant: InputVariant.Outlined,
  },
};

export const Number: Story = {
  args: {
    type: InputType.Number,
    placeholder: Placeholder.Number,
    variant: InputVariant.Outlined,
  },
};

export const Numbers: Story = {
  args: {
    type: InputType.Numbers,
    placeholder: Placeholder.Number,
    variant: InputVariant.Outlined,
  },
};

export const Date: Story = {
  args: {
    type: InputType.Date,
    placeholder: Placeholder.Date,
    variant: InputVariant.Outlined,
  },
};

export const Phone: Story = {
  args: {
    type: InputType.Phones,
    placeholder: Placeholder.Phone,
    variant: InputVariant.Standard,
  },
};

export const PhoneNumber: Story = {
  args: {
    type: InputType.Phone,
    placeholder: Placeholder.PhoneNumber,
    variant: InputVariant.Outlined,
  },
};

export const SearchInput: Story = {
  args: {
    type: InputType.Search,
    placeholder: Placeholder.Search,
    variant: InputVariant.Outlined,
  },
};

export const SearchIcon: Story = {
  args: {
    type: InputType.SearchIcon,
    search: <SearchImage />,
    placeholder: Placeholder.SearchIcon,
    variant: InputVariant.Outlined,
  },
};

export const EmailInput: Story = {
  args: {
    type: InputType.Email,
    placeholder: Placeholder.Email,
    variant: InputVariant.Standard,
  },
};

export const SimpleInput: Story = {
  args: {
    type: InputType.Input,
    placeholder: Placeholder.Input,
    variant: InputVariant.Outlined,
  },
};

export const PrefixInput: Story = {
  args: {
    type: InputType.Prefix,
    placeholder: Placeholder.Prefix,
    prefix: "$",
    variant: InputVariant.Filled,
  },
};

export const OtpInput: Story = {
  args: {
    type: InputType.Otp,
    variant: InputVariant.Outlined,
  },
};
