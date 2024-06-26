import { Meta, StoryObj } from "@storybook/react";
import { AccountSetting } from "./index";

const meta: Meta<typeof AccountSetting> = {
    title: "Examples/AccountSetting",
    component: AccountSetting,
    parameters: {
        layout: "centered",
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {};
