import { Meta, StoryObj } from '@storybook/react';
import { SideNavbar } from '.';

declare const meta: Meta<typeof SideNavbar>;
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Default: Story;
export declare const LogedIn: Story;
export declare const WithLogoIcon: Story;
export declare const WithMenuItemName: Story;
export declare const LargeSideBar: Story;
export declare const HoverSideBar: Story;
