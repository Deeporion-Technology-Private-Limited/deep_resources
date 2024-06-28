import { Meta, StoryObj } from '@storybook/react';
import { default as ProductCard } from './index';

declare const meta: Meta<typeof ProductCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const OnlyImage: Story;
export declare const WithFavoriteIcon: Story;
export declare const WithBestSeller: Story;
export declare const AdditionalImages: Story;
export declare const WithSizes: Story;
export declare const WithTitleAndPrice: Story;
