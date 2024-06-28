import { Meta, StoryObj } from '@storybook/react';
import { default as Calendar } from '.';

declare const meta: Meta<typeof Calendar>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithSelectedDate: Story;
