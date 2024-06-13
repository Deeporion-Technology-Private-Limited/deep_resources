import { Meta, StoryObj } from "@storybook/react";
import Tooltip from ".";

const meta: Meta<typeof Tooltip> = {
    title: "Components/ToolTip/Tooltip",
    component: Tooltip,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
    args: {
        content: "Default",
        trigger: "hover",
        children: <button>Hover me</button>,
    },
};

export const HoverTooltip: Story = {
    args: {
        content: "Hover",
        trigger: "hover",
        children: <button>Hover over me</button>,
    },
};

export const ClickTooltip: Story = {
    args: {
        content: "Click",
        trigger: "click",
        children: <button>Click me</button>,
    },
};

export const TooltipTop: Story = {
    args: {
        content: "Tooltip on Top",
        trigger: "hover",
        placement: "top",
        children: <button>Hover over me</button>,
    },
};

export const TooltipBottom: Story = {
    args: {
        content: "Tooltip on Bottom",
        trigger: "hover",
        placement: "bottom",
        children: <button>Hover over me</button>,
    },
};

export const TooltipLeft: Story = {
    args: {
        content: "Tooltip on Left",
        trigger: "hover",
        placement: "left",
        children: <button>Hover over me</button>,
    },
};

export const TooltipRight: Story = {
    args: {
        content: "Tooltip on Right",
        trigger: "hover",
        placement: "right",
        children: <button>Hover over me</button>,
    },
};

export const Arrow: Story = {
    args: {
        content: "Tooltip on Right",
        trigger: "click",
        placement: "top",
        children: <button>Hover over me</button>,
        arrow: true,
    },
};
