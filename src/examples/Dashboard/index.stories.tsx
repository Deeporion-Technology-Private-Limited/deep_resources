import type { Meta, StoryObj } from "@storybook/react";
import { Dashboard } from ".";

const meta: Meta<typeof Dashboard> = {
  title: "Examples/Dashboard",
  component: Dashboard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DashboardView: Story = {

};