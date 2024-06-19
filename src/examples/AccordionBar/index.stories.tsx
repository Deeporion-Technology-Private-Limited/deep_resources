import type { Meta, StoryObj } from "@storybook/react";
import { AccordionBar } from ".";

const meta: Meta<typeof AccordionBar> = {
  title: "Examples/AccordionBar",
  component: AccordionBar,
  parameters: {
    layout: "centered",
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
