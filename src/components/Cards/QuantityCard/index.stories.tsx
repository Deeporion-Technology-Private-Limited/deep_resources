import { Meta, StoryObj } from "@storybook/react";
import image from "@/examples/ShopingCards/images/Web-_Product listing/3897062800_1_1_1 1.png";
import QuantityCard from ".";

const meta: Meta<typeof QuantityCard> = {
  title: "Components/Cards/AddToCart",
  component: QuantityCard,
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
    name: "Women Blue Expire Dress",
    price: 3000,
  },
};

export const WithSizeAndQuantity: Story = {
  args: {
    imageSrc: image,
    brand: "Mango",
    name: "Women Blue Expire Dress",
    price: 3000,
    sizeOptions: ["S", "M", "L"],
    quantityOptions: [1, 2, 3],
    checked: true,
    isQuantity:true,
  },
};

export const WithReturnPolicyAndDeliveryDate: Story = {
  args: {
    imageSrc: image,
    brand: "Mango",
    name: "Women Blue Expire Dress",
    price: 3000,
    returnPolicy: "14 days return available",
    deliveryText: "7 June 2024",
    isReturn:true,
  },
};
