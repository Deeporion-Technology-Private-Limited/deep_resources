import { Meta, StoryObj } from "@storybook/react";
import {Alert} from ".";
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
      control: 'boolean',
    },
    type: {
      control: 'select',
      options: Object.values(AlertType),
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const createArgs = (type: AlertType, variant: AlertVariant, showIcon: boolean) => ({
  type,
  variant,
  showIcon,
});

export const Default: Story = {
  args: createArgs(AlertType.Success, AlertVariant.Outlined, true),
};

export const Filled: Story = {
  args: createArgs(AlertType.Success, AlertVariant.Filled, true),
};

export const Outlined: Story = {
  args: createArgs(AlertType.Error, AlertVariant.Outlined, true),
};
