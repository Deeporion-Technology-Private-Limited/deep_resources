import { Meta, StoryObj } from "@storybook/react";
import { BarChartExp } from ".";
import { graphdata } from "@/components/BarChart/barConst";

const meta: Meta<typeof BarChartExp> = {
  title: "Examples/BarChartExample",
  component: BarChartExp,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    barData: graphdata,
    svgWidth: 400,
    svgHeight: 300,
    dataYRangeMax: 100,
    peddingBetweenBar:15,
  }
};
