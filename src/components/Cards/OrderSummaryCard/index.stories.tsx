import { Meta, StoryObj } from "@storybook/react";
import OrderSummary from ".";
import image from "@/examples/ShopingCards/images/Web-_Product listing/3897062800_1_1_1 1.png"

const meta: Meta<typeof OrderSummary> = {
  title: "Components/Cards/OrderSummary",
  component: OrderSummary,
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
    subTotal: "₹ 187",
    delivery: "₹ 4.5",
    taxes: "₹ 3.45",
    total: "₹ 3950",
  },
};

