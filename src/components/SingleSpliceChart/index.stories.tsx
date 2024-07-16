import type { Meta, StoryObj } from "@storybook/react";
import SingleLineChart from ".";
import { singleSpliceType } from "../types";
import { chartData } from "../Charts/ChartsTypes";
import { ChartValueType } from "../types";

const meta: Meta<typeof SingleLineChart> = {
  title: "Components/singleSplineChart/singleSplineChart",
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
    xAxisValues: chartData[ChartValueType.xAxisValues],
    xAxisLabels: chartData[ChartValueType.xAxisLabels],
    yAxisLabels: chartData[ChartValueType.yAxisLabel],
    region: "Region1",
    curveLineColor: "#EC4899",
    gradientStartColor: "rgba(236, 72, 153, 0.3)",
    gradientEndColor: "rgba(236, 72, 153, 0)",
  },
};
