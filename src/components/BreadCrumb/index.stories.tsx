import type { Meta, StoryObj } from "@storybook/react";
import { BreadCrumb } from ".";
import RightArrow from "./icon/RightArrow.svg";
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
  },
};

export default meta;

type Story = StoryObj<typeof BreadCrumb>;

export const BreadCrumbs: Story = {
  args: {
    iconUrl: RightArrow,
    breadCrumbItems: ['Home', 'Category', 'Product'],
  },
};
