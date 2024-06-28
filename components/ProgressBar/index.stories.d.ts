import { Meta, StoryObj } from '@storybook/react';
import { default as ProgressBar } from '.';

declare const meta: Meta<typeof ProgressBar>;
export default meta;
type StoryProps = StoryObj<typeof ProgressBar>;
export declare const Linear: StoryProps;
export declare const Circular: StoryProps;
export declare const CustomizedLinear: StoryProps;
export declare const CustomizedCircularWithBackground: StoryProps;
