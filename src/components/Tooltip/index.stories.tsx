import { Meta, StoryObj } from "@storybook/react";
import Tooltip from ".";
import { PositionType } from "./type";

const meta: Meta<typeof Tooltip> = {
    title: "Components/Tooltip",
    component: Tooltip,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        trigger: {
            control: 'select',
            options: ['click', 'hover'],
        },
        placement: {
            control: 'select',
            options: Object.values(PositionType),
        },
        arrow: {
            control: 'boolean',
        },
        content: {
            control: 'text',
        },
        children: {
            control: 'text',
        },
    },
};

export default meta;

type Story = StoryObj<typeof meta>;

const createArgs = (placement: PositionType, trigger: 'click' | 'hover', arrow: boolean, content: string, children: string) => ({
    placement,
    trigger,
    arrow,
    content,
    children,
});

export const Default: Story = {
    args: createArgs(PositionType.Top, 'hover', false, 'Default Tooltip', 'Hover over me'),
};
