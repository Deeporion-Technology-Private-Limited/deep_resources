import { Meta, StoryObj } from '@storybook/react';
import { default as AdminStoryComp } from '.';

declare const meta: Meta<typeof AdminStoryComp>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
