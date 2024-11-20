import { Meta, StoryObj } from "@storybook/react";
import Cards from ".";
import { demo ,array} from "./data";
const meta: Meta<typeof Cards> = {
    title: "Examples/ShopingCards",
    component: Cards,
    tags:['autodocs']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {
    args:{
        item:demo
    }
};

export const WatchList: Story = {
    args:{
        item:array
    }
};
