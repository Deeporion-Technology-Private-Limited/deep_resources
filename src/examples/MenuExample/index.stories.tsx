import { Meta, StoryObj } from "@storybook/react";
import { ContextMenuItem } from ".";

const meta: Meta<typeof ContextMenuItem> = {
    title: "Examples/Menu",
    component: ContextMenuItem,
    parameters: {
        layout: "centered",
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {};