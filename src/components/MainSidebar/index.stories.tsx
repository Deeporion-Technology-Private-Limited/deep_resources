import { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from ".";
import { SidebarItemData } from "./data";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Mainsidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    item: SidebarItemData,
    className: "",
  },
};
