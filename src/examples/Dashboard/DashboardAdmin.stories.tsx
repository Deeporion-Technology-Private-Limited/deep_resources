import type { Meta, StoryObj } from "@storybook/react";
import DashboardAdmin from "./DashboardAdmin";

const meta: Meta<typeof DashboardAdmin> = {
  title: "Examples/DashboardAdmin",
  component: DashboardAdmin,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DashboardView: Story = {

};