import { Meta, StoryObj } from '@storybook/react';
import { default as ProfileAvatar, ProfileAvatarProps } from '.';

declare const meta: Meta<typeof ProfileAvatar>;
export default meta;
type StoryProps = StoryObj<ProfileAvatarProps>;
export declare const Default: StoryProps;
export declare const WithImage: StoryProps;
export declare const CustomColors: StoryProps;
