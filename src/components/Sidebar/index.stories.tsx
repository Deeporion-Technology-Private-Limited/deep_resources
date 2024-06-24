import type { Meta, StoryObj } from "@storybook/react";
import { Sidebar } from ".";
import { navItemSideBar } from "./sidebarConst";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Logo",
    navItem: navItemSideBar,
    handleClose: () => alert("close"),
    handleLogin:() => alert("login"),
    userLogedIn: false,
  },
};
