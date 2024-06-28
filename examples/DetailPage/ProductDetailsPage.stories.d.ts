import { Meta, StoryObj } from '@storybook/react';
import { default as ProductDetails } from '../DetailPage/ProductDetailsPage';

declare const meta: Meta<typeof ProductDetails>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Product: Story;
