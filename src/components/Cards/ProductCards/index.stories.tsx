import { Meta, StoryObj } from "@storybook/react";
import ProductCard from "./index";

const meta: Meta<typeof ProductCard> = {
  title: "Components/Cards/ProductCards",
  component: ProductCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const OnlyImage: Story = {
  args: {
    imageSrc:"https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
    hoverEffect: false,
    imageClass: "w-full h-full rounded-lg",
    desMenu: false,
    favorite: false,
  },
};
export const WithFavoriteIcon: Story = {
  args: {
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1669863278689-0c1d732c74d9?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    size: "medium",
    hoverEffect: true,
    imageClass: "w-full h-full object-cover object-center",
    desMenu: false,
    favorite: true,
  },
};

export const WithBestSeller: Story = {
  args: {
    imageSrc: `https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    isBestseller: "Bestseller",
    deliveryInfo: "12-15 days delivery",
    imageClass: "w-full h-full object-cover object-center",
    favorite: true,
  },
};

export const AdditionalImages: Story = {
  args: {
    imageSrc: `https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    isBestseller: "Bestseller",
    deliveryInfo: "12-15 days delivery",
    imageClass: "w-full h-full object-cover object-center",
    favorite: true,
    desMenu:true,
    additionalImages: [
      "https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
};


export const WithSizes: Story = {
  args: {
    imageSrc: `https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    isBestseller: "Bestseller",
    deliveryInfo: "12-15 days delivery",
    imageClass: "w-full h-full object-cover object-center",
    favorite: true,
    desMenu:true,
    additionalImages: [
      "https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    sizes:["S","M","L","Xl"]
  },
};



export const WithTitleAndPrice: Story = {
  args: {
    imageSrc: `https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    isBestseller: "Bestseller",
    deliveryInfo: "12-15 days delivery",
    imageClass: "w-full h-full object-cover object-center",
    favorite: true,
    desMenu:true,
    additionalImages: [
      "https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1541271696563-3be2f555fc4e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    sizes:["S","M","L","Xl"],
    title:"title for Card",
    price:"39000",
  },
};