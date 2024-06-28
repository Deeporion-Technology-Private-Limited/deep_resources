import { Meta, StoryObj } from '@storybook/react';
import { AutoComplete } from '.';

declare const meta: Meta<typeof AutoComplete>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Text: Story;
export declare const Country: Story;
export declare const MultipleValues: Story;
