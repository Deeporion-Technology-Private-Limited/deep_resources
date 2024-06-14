import { Meta, StoryObj } from "@storybook/react";
import { Sizechartmodel } from ".";

const meta: Meta<typeof Sizechartmodel> = {
    title: "Examples/Sizechartmodel",
    component: Sizechartmodel,
    parameters: {
        layout: "centered",
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {};
