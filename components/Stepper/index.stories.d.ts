import { default as React } from '../../../node_modules/react';
import { Meta, StoryObj } from '@storybook/react';

type Step = {
    component: React.FC;
    title: string;
};
declare const meta: Meta;
export default meta;
export declare const Default: StoryObj<{
    steps: Step[];
}>;
