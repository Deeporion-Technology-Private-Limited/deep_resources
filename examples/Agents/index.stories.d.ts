import { Meta, StoryObj } from '@storybook/react';
import { default as Agents } from '.';

declare const meta: Meta<typeof Agents>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const View: Story;
