import type { Meta, StoryObj } from "@storybook/react";
import { FooterCart } from ".";
import { footerCopyrightItem } from "./footercart";

const meta: Meta<typeof FooterCart> = {
  title: "Examples/FooterCart",
  component: FooterCart,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    footerCopyRights: footerCopyrightItem
  }
};