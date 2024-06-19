import { Meta, StoryObj } from "@storybook/react";
import ReviewCard from "./index"

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
    reviewText: `“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. “`,
    rating: 5,
    size: "large",
    StarRating: true,
    avatarImage:"https://s3-alpha-sig.figma.com/img/17d2/d1b7/f0304ba5eae93ef5a6efdf928f56da7a?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DE2fagaP5fNbdjEsguzGLHKo00u6w2IdpBPWKYnsCE4trfb6YV9TydbXzo86AbFZ~yp36-uCBNfLWe6xOw6J5nFlv6YcnyMMjQtGNqpIQfZvAEqkiUvVo05f2Y-ySCJ1ywTySeazzhW1gsFlPiWCK1apPwnoY0yR36cuCvX6QLINbiQFn86SzGhe28naeqLBSjI4OID0CAyS9lj0U2mDFxK~xsKtX~n8~FEkrkLZm7XzXq1A68YgYonLAo5-K8~RfKvUFlQ1LMFl3k4NjK6f~8YQmQfRsX3xiaLeMuDBLPjTGQLiMCaaeNJnJMY8oJDDoDkrHBBVgk1gHYC9e8LV7A__",
    imageStyle: "w-full h-full rounded-lg mb-4",
    image: false,
    textStyle:"text-center text-gray-800 mb-2 capitalize font-bold text-xl",
    avatar: true,
    starStyle:"flex mb-2 h-fit w-full text-yellow-500 bg-yellow",
  },
};

export const WithOutAvatar: Story = {
  args: {
    reviewerName: "Shweta mathor",
    reviewText: "Staying cool in this butterfly dress today",
    rating: 5,
    size: "large",
    imageStyle: "w-full h-full rounded-lg mb-4 ",
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
    imageStyle: "w-full h-full rounded-lg mb-4 ",
  },
};

export const WithOutRating: Story = {
  args: {
    imageSrc: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
    reviewerName: "Shweta mathor",
    reviewText: "Staying cool in this butterfly dress today",
    size: "large",
    StarRating: false,
    imageStyle: "w-full h-full rounded-lg mb-4 ",
    image: true,
    avatar: true,
  },
};
