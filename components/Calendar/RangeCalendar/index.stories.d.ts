import { Meta, StoryObj } from '@storybook/react';
import { default as DateRangeCalendar } from '.';

declare const meta: Meta<typeof DateRangeCalendar>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const SelectedDateRange: Story;
