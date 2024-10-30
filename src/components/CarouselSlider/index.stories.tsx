import { Meta, StoryObj } from "@storybook/react";
import { Carousel } from ".";

const meta: Meta<typeof Carousel> = {
  title: "Components/Carousel/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CarouselSlider: Story = {
  args: {
    items: [
      {
        image:
          "https://img.lovepik.com/background/20211022/large/lovepik-taobao-tmall-e-commerce-banner-background-image_500603827.jpg",
        heading: "First Slide Heading",
        headingClassName: "text-3xl font-bold text-yellow-300",
        text: "Centered Text on First Slide",
        textClassName: "text-lg",
        button: {
          label: "Learn More",
          onClick: () => alert("First Slide Button Clicked"),
        },
      },
      {
        image:
          "https://t3.ftcdn.net/jpg/04/86/29/98/360_F_486299886_4aXrDh0LPy7BK4SUJvhCkKpnnExNDsLX.jpg",
        heading: "Second Slide Heading",
        headingClassName: "text-3xl font-bold text-green-300",
        text: "Centered Text on Second Slide",
        textClassName: "text-lg",
        button: {
          label: "Shop Now",
          onClick: () => alert("Second Slide Button Clicked"),
        },
      },
      {
        image:
          "https://cdn.pixabay.com/photo/2015/08/23/09/22/banner-902589_640.jpg",
        heading: "Third Slide Heading",
        headingClassName: "text-3xl font-bold text-blue-300",
        text: "Centered Text on Third Slide",
        textClassName: "text-lg",
        button: {
          label: "Contact Us",
          onClick: () => alert("Third Slide Button Clicked"),
        },
      },
    ],
  },
};
