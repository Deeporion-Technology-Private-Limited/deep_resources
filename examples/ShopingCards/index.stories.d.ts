import { Meta, StoryObj } from '@storybook/react';
import { default as Cards } from '.';

declare const meta: Meta<typeof Cards>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const View: Story;
export declare const WatchList: Story;
