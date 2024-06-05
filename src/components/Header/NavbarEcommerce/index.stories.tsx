import type { Meta, StoryObj } from "@storybook/react";
import { ComponentWithLogin, NavbarEcommerce } from ".";

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
    children: <>
     <ComponentWithLogin isLogin={false}/>
    </>
  }
};

export const LoggedIn: Story = {
  args: {
    isLogin: true,
    children: <>
     <ComponentWithLogin isLogin/>
    </>
  },
};


