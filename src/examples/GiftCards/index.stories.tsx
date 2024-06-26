import { Meta, StoryObj } from "@storybook/react";
import GiftCard from ".";
import { Cards, Labels } from "./data";

const meta: Meta<typeof GiftCard> = {
    title: "Examples/GiftCards",
    component: GiftCard,
    parameters: {
        layout: "centered",
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {
    args: {
        addNew: () => alert("add new cards"),
        viewMore: () => alert("view more data"),
        cardsArray: Cards,
        labelsArray: Labels,
    }
};