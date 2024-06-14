import { Meta, StoryObj } from "@storybook/react";
import Cards from ".";

const meta: Meta<typeof Cards> = {
    title: "Examples/ShopingCards",
    component: Cards,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {};
