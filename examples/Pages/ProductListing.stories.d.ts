import { Meta, StoryObj } from '@storybook/react';
import { default as ProductListing } from './ProductListing';

declare const meta: Meta<typeof ProductListing>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Product_Listing: Story;
export declare const View: Story;
