import type { Meta, StoryObj } from "@storybook/react";
import SingleLineChart from ".";
import { singleSpliceType } from "./singleSpliceType";
import { ChartValueType, chartData } from "../Charts/ChartsTypes";

const meta: Meta<typeof SingleLineChart> = {
  title: "Components/singleSplineChart",
  component: SingleLineChart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: singleSpliceType.SingleLineChart,
    xAxis: chartData[ChartValueType.Valuex],
    days: chartData[ChartValueType.Days],
    yAxisLabels: chartData[ChartValueType.yAxisLabel],
    region: "Region1",
    curveLineColor: "#EC4899",
    gradientStartColor: "rgba(236, 72, 153, 0.3)",
    gradientEndColor: "rgba(236, 72, 153, 0)"
  },
};
