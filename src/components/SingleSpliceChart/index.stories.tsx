import type { Meta, StoryObj } from "@storybook/react";
import singleSplineChart from ".";

const meta: Meta<typeof singleSplineChart> = {
  title: "Components/singleSplineChart",
  component: singleSplineChart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "single_spline_area_chart",
    value1: [600, 800, 1100, 500, 1000, 700, 800],
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    yAxisLabels: ["1.25K", "1.45K", "1.65K", "2K", "2.75K"],
    region: ["Region1"],
    curveLineColor: "#EC4899", 
    gradientStartColor: "rgba(236, 72, 153, 0.3)", 
    gradientEndColor: "rgba(236, 72, 153, 0)" 
  },
};
