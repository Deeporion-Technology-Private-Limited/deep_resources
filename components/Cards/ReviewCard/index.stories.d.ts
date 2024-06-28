import { Meta, StoryObj } from '@storybook/react';
import { default as ReviewCard } from './index';

declare const meta: Meta<typeof ReviewCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const WithOutImage: Story;
export declare const WithOutAvatar: Story;
export declare const WithImage: Story;
export declare const WithOutRating: Story;
