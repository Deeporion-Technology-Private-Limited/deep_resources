import type { Meta, StoryObj } from "@storybook/react";
import { CoustomizeAccordion } from ".";

const meta: Meta<typeof CoustomizeAccordion> = {
  title: "Examples/CoustomizeAccordion",
  component: CoustomizeAccordion,
  parameters: {
    layout: "centered",
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
