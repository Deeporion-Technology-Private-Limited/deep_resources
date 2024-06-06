import type { Meta, StoryObj } from "@storybook/react";
import DateRangeCalendar from './range';

const meta: Meta<typeof DateRangeCalendar> = {
  title: "Components/Calendar/RangeCalendar",
  component: DateRangeCalendar,
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

export const SelectedDateRange: Story = {
  args: {
      year: currentYear,
      month: currentMonth,
      selectedDate: new Date(),
  },
  argTypes: {
    onDateRangeSelect: { action: "selected" },
  },
};
