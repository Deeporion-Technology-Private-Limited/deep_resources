import { Meta, StoryObj } from "@storybook/react";
import ReviewCard from "./ReviewCard";

const meta: Meta<typeof ReviewCard> = {
  title: "Components/Cards/ReviewCard",
  component: ReviewCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;



export const WithOutImage: Story = {
  args: {
    reviewerName: "Shweta mathor",
    reviewText: "Staying cool in this butterfly dress today",
    rating: 5,
    size: "large",
    StarRating: true,
    imageStyle:"w-full h-full rounded-lg mb-4 ",
    image: false,
    avatar: true,
  },
};

export const WithOutAvatar: Story = {
  args: {
    reviewerName: "Shweta mathor",
    reviewText: "Staying cool in this butterfly dress today",
    rating: 5,
    size: "large",
    imageStyle:"w-full h-full rounded-lg mb-4 ",
    StarRating: true,
    image: false,
    avatar: false,
  },
};
export const WithImage: Story = {
  args: {
    imageSrc: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
    reviewerName: "Shweta mathor",
    reviewText: "Staying cool in this butterfly dress today",
    rating: 5,
    size: "large",
    StarRating: true,
    image: true,
    avatar: true,
    imageStyle:"w-full h-full rounded-lg mb-4 ",
  },
};

export const WithOutRating: Story = {
  args: {
    imageSrc: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
    reviewerName: "Shweta mathor",
    reviewText: "Staying cool in this butterfly dress today",
    size: "large",
    StarRating: false,
    imageStyle:"w-full h-full rounded-lg mb-4 ",
    image: true,
    avatar: true,
  },
};

