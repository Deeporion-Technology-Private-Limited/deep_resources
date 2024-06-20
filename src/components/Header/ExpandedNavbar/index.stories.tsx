import type { Meta, StoryObj } from "@storybook/react";
import { TopHoverMenuCard } from ".";
import { GenderItem, TopItem } from "./topHoverObjects";

const meta: Meta<typeof TopHoverMenuCard> = {
  title: "Components/Header/ExpandedNavbar",
  component: TopHoverMenuCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        TopHoverMenuItem : TopItem,  
        title: "Categories"
    }
};

export const GenderBased: Story = {
    args: {
        TopHoverMenuItem : GenderItem,  
        listStyle: "gap-[30px] py-[0px]"
    }
};
