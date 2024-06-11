import { Meta, StoryObj } from "@storybook/react";
import { IconButton } from ".";
import { ButtonDirection } from "../type";
import Accout from "../ButtonImage/Account.svg"

const meta: Meta<typeof IconButton> = {
  title: "Components/Button/SingleIconButton",
  component: IconButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconUrl:Accout,
    text: "Logo",
    backgroundColor: "transparent",
    direction: ButtonDirection.Row,
  },
};

export const SingleButtonForExample: Story = {
  args: {
    iconUrl:Accout,
    text: "Logo",
    backgroundColor: "transparent",
    direction: ButtonDirection.Row,
    className: `bg-blue-500 text-[#FFFFFF] rounded`,
  },
};