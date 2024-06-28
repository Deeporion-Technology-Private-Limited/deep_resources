import { Meta, StoryObj } from '@storybook/react';
import { Chips } from '.';

declare const meta: Meta<typeof Chips>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Not_Active: Story;
export declare const Active: Story;
