import { Meta, StoryObj } from "@storybook/react";
import FaverateCard from ".";
import image from "@/examples/ShopingCards/images/Web-_Product listing/3897062800_1_1_1 1.png"
import image1 from "@/components/Cards/icons/image (1).svg"

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

export const RowCardWithIcon: Story ={
  args: {
    imageSrc:image,
    brand:"mango",
    description:"Black Sleeveless Crepe Dress",
    className:"flex p-4 items-end",
    iconUrl:image1,
    favorite:true,
    isDescription:false,
  }
}