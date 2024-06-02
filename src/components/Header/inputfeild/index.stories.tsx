import type { Meta, StoryObj } from "@storybook/react";
import { InputIc } from ".";
import search from "./inputicons/search.svg"

const meta: Meta<typeof InputIc> = {
  title: "Components/InputIc",
  component: InputIc,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter your text",
    className: "pl-[20px]"
  },
};

export const WithIcon: Story = {
  args: {
    placeholder: "Enter text",
    iconSrc: search,
  },
};

