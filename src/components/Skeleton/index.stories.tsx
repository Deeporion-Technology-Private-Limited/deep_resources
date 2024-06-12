
import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton, SkeletonLayout } from ".";
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
      control: 'select',
      options: [SkeletonVariant.Circle, SkeletonVariant.Rectangle],
    },
    size: {
      control: 'select',
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

export const Rectangle: Story = {
  args: {
    variant: SkeletonVariant.Rectangle,
    size: ButtonSize.Medium,
  },
};

export const SkeletonExample: StoryObj<typeof SkeletonLayout> = {
  render: () => <SkeletonLayout />,
};
