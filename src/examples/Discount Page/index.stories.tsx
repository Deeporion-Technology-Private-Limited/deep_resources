import { Meta, StoryObj } from "@storybook/react";
import DiscountPage from ".";

const meta: Meta<typeof DiscountPage> = {
    title: "Examples/Discount & TopDeals",
    component: DiscountPage,
    parameters: {
        layout: "centered",
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {};
