import { Meta, StoryObj } from '@storybook/react';
import { default as AddressPage } from './Address';

declare const meta: Meta<typeof AddressPage>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const View: Story;
