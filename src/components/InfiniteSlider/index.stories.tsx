import { Meta, StoryObj } from '@storybook/react';
import AutoCarousel from '.';
import './infinite.css';

const meta: Meta<typeof AutoCarousel> = {
  title: 'Components/InfiniteSlides',
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
      { id: 1, name: 'Influencive', logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmv3oaR8peoozFay_djlBq_qWYw2U3LwkOcQ&s' },
      { id: 2, name: 'Dailyhunt', logoUrl: 'https://iabtechlab.com/wp-content/uploads/2018/12/Dailyhunt-Logo.png' },
      { id: 3, name: 'Deccan Chronicle', logoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdZKNia6RjyKXzNwoE9w7hP3dxMqxuGQEUIQ&s' },
      { id: 4, name: 'ETimes', logoUrl: 'https://yt3.googleusercontent.com/a5oxXqjRE0YjpL05Jf2IPyMo1flw5ICfa0hsbgmI2ekV-XeZ6dyaLaa4r-v1vw9LWV_S7-9PQsE=s900-c-k-c0x00ffffff-no-rj' },
      { id: 5, name: 'Ent', logoUrl: 'https://media.istockphoto.com/id/1355188517/vector/otolaryngology-clinic-concept.jpg?s=612x612&w=0&k=20&c=vj41wAH2mYF2Otoeq9T5MA4gnlYJ5JN4BOWbgAJozDQ=' },
    ],
  },
};
