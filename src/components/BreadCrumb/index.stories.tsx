import type { Meta, StoryObj } from "@storybook/react";
import { BreadCrumb } from ".";
import HomeIcon from "../BreadCrumb/icon/Home.svg";
import CategoryIcon from "../BreadCrumb/icon/Category.svg";
import RightArrow from "../BreadCrumb/icon/RightArrow.svg";
import Divider from "../BreadCrumb/icon/Divider.svg";

const meta: Meta<typeof BreadCrumb> = {
  title: "Components/BreadCrumb/BreadCrumb",
  component: BreadCrumb,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    breadCrumbItems: {
      control: { type: 'object' },
    },
    defaultSeparatorIconUrl: {
      control: 'text',
      defaultValue: RightArrow,
    },
  },
};

export default meta;

type Story = StoryObj<typeof BreadCrumb>;

export const Default: Story = {
  args: {
    breadCrumbItems: [
      { text: 'Home', href: '/home' },  
      { text: 'Category', href: '/category' },  
      { text: 'Product', href: '/product' },  
    ],
    defaultSeparatorIconUrl: RightArrow,
  },
};

export const BreadCrumbsDefaultSeparateIcon: Story = {
  args: {
    breadCrumbItems: [
      { text: 'Home', iconUrl: HomeIcon },  
      { text: 'Category', iconUrl: CategoryIcon },  
    ],
    defaultSeparatorIconUrl: RightArrow,
  },
};

export const BreadCrumbsCustomSeparateIcon: Story = {
  args: {
    breadCrumbItems: [
      { text: 'Home', separatorIconUrl: Divider, href: '/home' },  
      { text: 'Category', separatorIconUrl: Divider, href: 'category' },  
    ]
  },
};

export const BreadCrumbs: Story = {
  args: {
    breadCrumbItems: [
      { text: 'Home', href: '/home' },  
      { text: 'Category', href: '/category' },  
      { text: 'Sub-category', href: '/subCategory' },  
      { text: 'Details', href: '/details' },  
      { text: 'Reviews', href: '/reviews' },  
      { text: 'Contact', href: '/contact' },  
    ],
    defaultSeparatorIconUrl: RightArrow,
  },
};
