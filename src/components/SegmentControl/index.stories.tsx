import type { Meta, StoryObj } from "@storybook/react";
import { SegmentControl } from ".";
import React from "react";
import { VariantProps } from "class-variance-authority";
import { ClassProp } from "class-variance-authority/types";
import { JSX } from "react/jsx-runtime";

const meta: Meta<typeof SegmentControl> = {
  title: "Components/SegmentControl",
  component: SegmentControl,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
      defaultValue: 'medium',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = (args: JSX.IntrinsicAttributes & Omit<{ suggestions: string[]; onSegmentChange?: ((segment: string) => void) | undefined; size?: "small" | "medium" | "large" | undefined; } & React.ClassAttributes<HTMLDivElement> & React.HTMLAttributes<HTMLDivElement> & VariantProps<(props?: ({ size?: "small" | "medium" | "large" | null | undefined; } & ClassProp) | undefined) => string>, "ref"> & React.RefAttributes<HTMLDivElement>) => <SegmentControl {...args} />;
Default.args = {
  suggestions: ["Segment 1", "Segment 2", "Segment 3"],
  onSegmentChange: (segment) => segment,
  size: 'medium', // Default size
};
