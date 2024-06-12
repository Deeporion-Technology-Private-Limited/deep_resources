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
      { text: 'Home' },
      { text: 'Category' },
      { text: 'Product' },
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
      { text: 'Home', separatorIconUrl: Divider },
      { text: 'Category', separatorIconUrl: Divider },
    ]
  },
};

export const BreadCrumbs: Story = {
  args: {
    breadCrumbItems: [
      { text: 'Home' },
      { text: 'Category' },
      { text: 'Sub-category' },
      { text: 'Details' },
      { text: 'Reviews' },
      { text: 'Contact' },
    ],
    defaultSeparatorIconUrl: RightArrow,
  },
};