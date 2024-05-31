import type { Meta, StoryObj } from "@storybook/react";
import { MenuItem } from "."; // Assuming you named the MenuItem component file MenuItem.tsx

const meta: Meta<typeof MenuItem> = {
    title: "Components/ContextMenuItem",
    component: MenuItem,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: "default",
        children: "MenuItem",
        leftIcon: false,
        rightIcon: false,
        leftSpacer: false,
        size: "md",
    },
};

export const Hover: Story = {
    args: {
        variant: "hover",
        children: "MenuItem",
        leftIcon: false,
        rightIcon: false,
        leftSpacer: false,
        size: "md",
    },
};

export const Active: Story = {
    args: {
        variant: "active",
        children: "MenuItem",
        leftIcon: false,
        rightIcon: false,
        leftSpacer: false,
        size: "md",

    },
};
