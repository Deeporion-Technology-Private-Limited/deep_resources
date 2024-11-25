import { Meta, StoryObj } from "@storybook/react";
// import './infinite.css';
import { AutoCarousel } from "./AutoCarousel";
import { FindIconUrl } from "@/utils/Constant";

const Dailyhunt = FindIconUrl("Dailyhunt.svg");
const Deccan = FindIconUrl("Deccan.svg");
const Ent = FindIconUrl("Ent.svg");
const ETimes = FindIconUrl("ETimes.svg");
const Influencive = FindIconUrl("Influencive.svg");

const meta: Meta<typeof AutoCarousel> = {
  title: "Components/InfiniteSlides/AutoCarousel",
  component: AutoCarousel,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Slides: Story = {
  args: {
    items: [
      { id: 1, name: "Influencive", logoUrl: Influencive },
      { id: 2, name: "Dailyhunt", logoUrl: Dailyhunt },
      { id: 3, name: "Deccan Chronicle", logoUrl: Deccan },
      { id: 4, name: "ETimes", logoUrl: ETimes },
      { id: 5, name: "Ent", logoUrl: Ent },
    ],
  },
};
