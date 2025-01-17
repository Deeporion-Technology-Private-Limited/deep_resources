import type { Meta, StoryObj } from "@storybook/react";
import { Chart } from ".";
import { ChartValueType, ChartsType } from "../types";
import { chartData } from "./ChartsTypes";

const meta: Meta<typeof Chart> = {
  title: "Components/Chart/Chart",
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
    variant: ChartsType.doubleSplineAreaChart,
    xAxisValues: chartData[ChartValueType.xAxisValues],
    yAxisValues: chartData[ChartValueType.yAxisValues],
    xAxisLabels: chartData[ChartValueType.xAxisLabels],
    yAxisLabels: chartData[ChartValueType.yAxisLabel],
    region: ["Region1", "Region2"],
    lineColor1: "#6366F1",
    lineColor2: "#EC4899",
    gradientColor1Start: "rgba(99, 102, 241, 0.3)",
    gradientColor1End: "rgba(99, 102, 241, 0)",
    gradientColor2Start: "rgba(236, 72, 153, 0.3)",
    gradientColor2End: "rgba(236, 72, 153, 0)",
  },
};
