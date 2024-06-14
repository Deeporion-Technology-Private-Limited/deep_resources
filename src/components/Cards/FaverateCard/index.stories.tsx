import { Meta, StoryObj } from "@storybook/react";
import FaverateCard from ".";
import image from "@/examples/ShopingCards/images/Web-_Product listing/Frame 1-3.png"

const meta: Meta<typeof FaverateCard> = {
  title: "Components/Cards/FaverateCard",
  component: FaverateCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageSrc: image,
    brand: "Mango",
    description: "Black Sleeveless Crepe Dress",
    price: 3950,
    favorite: false,
  },
};

export const WithFavoriteAndStar: Story = {
  args: {
    imageSrc:image,
    brand: "Mango",
    description: "Black Sleeveless Crepe Dress",
    price: 3950,
    favorite: true,
    starRating: true,
    rating: 4.1,
    reviews: 132,
  },
};

export const WithNew: Story = {
  args: {
    imageSrc: image,
    brand: "Mango",
    description: "Black Sleeveless Crepe Dress",
    isnew: "new",
  },
};
