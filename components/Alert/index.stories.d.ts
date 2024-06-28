import { Meta, StoryObj } from '@storybook/react';
import { Alert } from '.';

declare const meta: Meta<typeof Alert>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Filled: Story;
export declare const Outlined: Story;
