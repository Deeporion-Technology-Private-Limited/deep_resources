import { Meta, StoryObj } from "@storybook/react";
import AddNewGiftCards from ".";

const meta: Meta<typeof AddNewGiftCards> = {
    title: "Examples/AddNewGiftCards",
    component: AddNewGiftCards,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {}