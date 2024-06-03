import type { Meta, StoryObj } from "@storybook/react";
import { NavbarEcommerce } from ".";
import { Logo } from "../logo";
import { AnchorList } from "../menuItemlist";
import { Anchor } from "../manuItem";

const meta: Meta<typeof NavbarEcommerce> = {
  title: "Components/Header/NavbarEcommerce",
  component: NavbarEcommerce,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <Logo>LOGO</Logo>
        <AnchorList>
          <Anchor href="https://example.com">Menu</Anchor>
          <Anchor href="https://example.com">Item</Anchor>
          <Anchor href="https://example.com">Menu</Anchor>
          <Anchor href="https://example.com">Item</Anchor>
        </AnchorList>
        
      </>
    ),
  },
};
