import { Meta, StoryObj } from "@storybook/react";
import { FollowPage } from "./";

const meta: Meta<typeof FollowPage> = {
    title: "Examples/FollowUsPage",
    component: FollowPage,
    parameters: {
        layout: "centered",
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {};
