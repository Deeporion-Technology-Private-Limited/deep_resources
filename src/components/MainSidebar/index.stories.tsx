import { Meta, StoryObj } from "@storybook/react";
import { MainSidebar } from ".";
import { SidebarItemData } from "./data";

const meta: Meta<typeof MainSidebar> = {
  title: "Components/Mainsidebar",
  component: MainSidebar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    item: SidebarItemData,
    className: "",
    labelStyle: "w-full p-10",
  },
};
