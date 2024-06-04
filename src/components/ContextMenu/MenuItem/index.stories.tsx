import type { Meta, StoryObj } from "@storybook/react";
import { LeftIcon, RightIcon } from "./Icon/icon";
import { MenuItem } from ".";

const meta: Meta<typeof MenuItem> = {
    title: "Components/Menu/Menu Item",
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
        label: "MenuItem",
        leftSpacer: false,
        border: false,
        size: "md",
    },
};

export const WithRightIcon: Story = {
    args: {
        variant: "withRightIcon",
        label: "MenuItem",
        rightIcon: <LeftIcon />,
        size: "md",
    },
};

export const WithLefttIcon: Story = {
    args: {
        variant: "withLeftIcon",
        label: "MenuItem",
        leftIcon: <RightIcon/>,
        size: "md",
    },
};


export const WithLefttSpacer: Story = {
    args: {
        variant: "withRightIcon",
        label: "MenuItem",
        leftSpacer: true,
        size: "md",
    },
};

export const WithBorder: Story = {
    args: {
        variant: "default",
        label: "MenuItem",
        border: true,
        leftSpacer: true,
        size: "md",
    },
};