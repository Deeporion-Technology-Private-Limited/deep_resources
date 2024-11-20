import { Meta, StoryObj } from "@storybook/react";
import Wishlist from ".";
import { cardData, sortingArray } from "@/components/Data/Whishlist";


const meta: Meta<typeof Wishlist> = {
    title: "Examples/Wishlist",
    component: Wishlist,
    parameters: {
        layout: "centered",
    },
}

export default meta;

type Story = StoryObj<typeof Wishlist>

export const WishlistPage: Story = {
    args: {
        data: cardData,
        sortingArray: sortingArray,
        handleAddToCart() {
            alert("Added to the cart")
        },
    }
}