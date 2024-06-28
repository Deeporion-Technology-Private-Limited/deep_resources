import { Meta, StoryObj } from '@storybook/react';
import { Topnavbar } from '.';

declare const meta: Meta<typeof Topnavbar>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const LogedIn: Story;
export declare const WithLogoImage: Story;
export declare const WithHemburger: Story;
export declare const OnNavItemHover: Story;
