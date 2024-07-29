import { Meta, StoryObj } from "@storybook/react";
import { OffersAndGiftCards } from ".";
import { Cards, Labels } from "@/components/Data/GiftCards";
import { cardsData } from "../Discount Page/data";

const meta: Meta<typeof OffersAndGiftCards> = {
    title: "Examples/OffersAndGiftCards",
    component: OffersAndGiftCards,

}

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {
    args: {
        cardsData: Cards,
        labelsData: Labels,
        discountLabels: Labels,
        discountCards: cardsData,
    }
};