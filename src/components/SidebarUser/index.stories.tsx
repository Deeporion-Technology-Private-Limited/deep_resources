import type { Meta, StoryObj } from "@storybook/react";
import { menuItems } from "./data";
import SettingsSideBar from ".";

const meta: Meta<typeof SettingsSideBar> = {
  title: "Components/UserSideBar",
  component: SettingsSideBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const DashboardView: Story = {
  args: {
    menuItems: menuItems,
  },
};
