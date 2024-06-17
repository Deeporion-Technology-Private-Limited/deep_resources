import { Meta, StoryObj } from '@storybook/react';
import AutoCarousel from '.';
import './infinite.css';
import Influencive from "../../images/Influencive.svg"
import Dailyhunt from "../../images/Dailyhunt.svg"
import Deccan from "../../images/Deccan.svg"
import ETimes from "../../images/ETimes.svg"
import Ent from "../../images/Ent.svg"


const meta: Meta<typeof AutoCarousel> = {
  title: 'Components/InfiniteSlides/InfiniteSlides',
  component: AutoCarousel,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Slides: Story = {
  args: {
    items: [
      { id: 1, name: 'Influencive', logoUrl: Influencive },
      { id: 2, name: 'Dailyhunt', logoUrl: Dailyhunt },
      { id: 3, name: 'Deccan Chronicle', logoUrl: Deccan },
      { id: 4, name: 'ETimes', logoUrl: ETimes },
      { id: 5, name: 'Ent', logoUrl: Ent },
    ],
  },
};
