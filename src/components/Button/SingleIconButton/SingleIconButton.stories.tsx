import { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./SingleIconButton";
import { ButtonDirection } from "../type";

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

export const SingleButton: Story = {
  args: {
    account: true,
    text: "Logo",
    backgroundColor: "transparent",
    direction: ButtonDirection.Row,
  },
};