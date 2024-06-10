import type { Meta, StoryObj } from "@storybook/react";
import Chart from ".";
import { ChartsType } from "./ChartsTypes";

const meta: Meta<typeof Chart> = {
  title: "Components/Chart",
  component: Chart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: ChartsType.Double_spline_area_chart,
    value1: [600, 800, 1100, 500, 1000, 700, 800],
    value2: [500, 700, 1000, 400, 900, 600, 700],
    days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    yAxisLabels: ["1.25K", "1.45K", "1.65K", "2K", "2.75K"],
    region: ["Region1", "Region2"],
    lineColor1: "#6366F1",
    lineColor2: "#EC4899",
    gradientColor1Start: "rgba(99, 102, 241, 0.3)",
    gradientColor1End: "rgba(99, 102, 241, 0)",
    gradientColor2Start: "rgba(236, 72, 153, 0.3)",
    gradientColor2End: "rgba(236, 72, 153, 0)"
  },
};
