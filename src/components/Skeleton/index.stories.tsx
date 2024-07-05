import type { Meta, StoryObj } from "@storybook/react";
import {
  Skeleton,
  SkeletonImage,
  SkeletonLayout,
  SkeletonLoginForm,
  SkeletonShoppingCard,
} from ".";
import { ButtonSize, SkeletonVariant } from "../Button/type";

const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        SkeletonVariant.Circle,
        SkeletonVariant.Text,
        SkeletonVariant.Card,
      ],
    },
    size: {
      control: "select",
      options: [ButtonSize.Small, ButtonSize.Medium, ButtonSize.Large],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Circle: Story = {
  args: {
    variant: SkeletonVariant.Circle,
    size: ButtonSize.Medium,
  },
};

export const Text: Story = {
  args: {
    variant: SkeletonVariant.Text,
    size: ButtonSize.Medium,
  },
};

export const Card: Story = {
  args: {
    variant: SkeletonVariant.Card,
    size: ButtonSize.Large,
  },
};

export const SkeletonExample: Story = {
  render: () => <SkeletonLayout />,
};

export const ShoppingCardExample: Story = {
  render: () => <SkeletonShoppingCard />,
};

export const LoginFormExample: Story = {
  render: () => <SkeletonLoginForm />,
};

export const ImageExample: Story = {
  render: () => <SkeletonImage />,
};
