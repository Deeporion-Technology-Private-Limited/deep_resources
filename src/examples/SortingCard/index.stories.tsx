import { Meta, StoryObj } from "@storybook/react";
import SortingCard from ".";
import { Data, breadCrumbsData, chipsArray, optionsArray } from "./data";

const meta: Meta<typeof SortingCard> = {
    title: "Examples/Sorting Card",
    component: SortingCard,
    parameters: {
        layout: "centered",
    },
};

export default meta;

type Story = StoryObj<typeof SortingCard>

export const SortCard: Story = {
    args: {
        title: "Women",
        breadCrumbs: breadCrumbsData,
        data: Data,
        options: optionsArray,
        chips: chipsArray,
        breadCrumbIcon: "/src/components/BreadCrumb/icon/RightArrow.svg",
    },
}