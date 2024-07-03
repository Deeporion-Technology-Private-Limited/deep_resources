import { Meta, StoryObj } from "@storybook/react";
import { BarChart } from ".";
import { graphdata } from "./barConst";

const meta: Meta<typeof BarChart> = {
  title: "Examples/BarChart",
  component: BarChart,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: graphdata,
    svgW: 400,
    svgH: 300,
    dYMax: 100,
  }
};
