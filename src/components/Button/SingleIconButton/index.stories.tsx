import { Meta, StoryObj } from "@storybook/react";
import { IconButton } from ".";
import { ButtonDirection } from "../../types";
import { FindIconUrl } from "@/utils/Constant";

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
    iconUrl: FindIconUrl("Account.svg"),
    text: "Logo",
    backgroundColor: "transparent",
    direction: ButtonDirection.Row,
  },
};

export const SingleButtonForExample: Story = {
  args: {
    iconUrl: FindIconUrl("Account.svg"),
    text: "Logo",
    backgroundColor: "transparent",
    direction: ButtonDirection.Row,
    className: `bg-blue-500 text-[#FFFFFF] rounded`,
  },
};
