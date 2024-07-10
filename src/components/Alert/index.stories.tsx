import { Meta, StoryObj } from "@storybook/react";
import { Alert } from ".";
import { AlertType, AlertVariant } from "./type";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    showIcon: {
      control: "boolean",
    },
    type: {
      control: "select",
      options: Object.values(AlertType),
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const createArgs = (
  type: AlertType,
  variant: AlertVariant,
  showIcon: boolean,
  children: React.ReactNode,
) => ({
  type,
  variant,
  showIcon,
  children,
});

export const Default: Story = {
  args: createArgs(AlertType.Success, AlertVariant.Outlined, true, "This is alert"),
};

export const Filled: Story = {
  args: createArgs(
    AlertType.Success,
    AlertVariant.Filled,
    true,
    "This is a success alert"
  ),
};

export const Outlined: Story = {
  args: createArgs(
    AlertType.Error,
    AlertVariant.Outlined,
    true,
    "This is a error alert"
  ),
};
