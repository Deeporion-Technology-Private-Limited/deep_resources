import type { Meta, StoryObj } from "@storybook/react";
import AdminDasboardStory from ".";

const meta: Meta<typeof AdminDasboardStory> = {
  title: "Examples/DashboardAdmin",
  component: AdminDasboardStory,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DashboardView: Story = {

};