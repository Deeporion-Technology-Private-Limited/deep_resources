import { Meta, StoryObj } from '@storybook/react';
import { SystemMessage } from '.';

declare const meta: Meta<typeof SystemMessage>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const Warning: Story;
export declare const Information: Story;
