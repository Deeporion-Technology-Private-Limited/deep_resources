import type { Meta, StoryObj  } from "@storybook/react";
import { MyCartSummary } from ".";


const meta: Meta<typeof MyCartSummary> = {
  title: "Examples/MyCartSummary",
  component: MyCartSummary,
  parameters: {
    layout: "centered",
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
