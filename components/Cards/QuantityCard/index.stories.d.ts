import { Meta, StoryObj } from '@storybook/react';
import { default as QuantityCard } from '.';

declare const meta: Meta<typeof QuantityCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const WithSizeAndQuantity: Story;
export declare const WithReturnPolicyAndDeliveryDate: Story;
