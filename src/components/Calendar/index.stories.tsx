import Calendar from '.';
import type { Meta, StoryObj } from "@storybook/react";
import { Month } from '../type';

const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default : Story = {
  args : {
  year: 2024,
  month: Month.April,
}
};

export const WithSelectedDate : Story = {
  args : {
    year: 2024,
    month: Month.April,
    selectedDate: new Date(2024, 3, 15),
}
};