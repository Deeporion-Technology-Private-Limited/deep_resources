import Calendar from '.';
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Calendar> = {
  title: "Components/Calendars/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;

export const Default: Story = {
  args: {
    year: currentYear,
    month: currentMonth,
  }
};

export const WithSelectedDate: Story = {
  args: {
    year: currentYear,
    month: currentMonth,
    selectedDate:  new Date(),
    onDateSelect: (date : Date) => date,
  },
};