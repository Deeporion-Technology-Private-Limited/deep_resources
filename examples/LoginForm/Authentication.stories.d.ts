import { Meta, StoryObj } from '@storybook/react';
import { default as Authentication } from './Authentication';

declare const meta: Meta<typeof Authentication>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Two_Factor_Authentication: Story;
