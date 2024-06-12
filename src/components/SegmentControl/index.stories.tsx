import type { Meta, StoryObj } from "@storybook/react";
import { SegmentControl } from ".";

const meta: Meta<typeof SegmentControl> = {
  title: "Components/Segment-Control/SegmentControl",
  component: SegmentControl,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "default",
    suggestions: ["Segment 1", "Segment 2", "Segment 3"],
    onSegmentChange: (segment: any) => segment,
    size: "medium",
  },
};

export const Toggle: Story = {
  args: {
    type: "toggle",
    suggestions: ["Day", "Week", "Month", "Year"],
    onSegmentChange: (segment: any) => segment,
    size: "medium",
  },
};
