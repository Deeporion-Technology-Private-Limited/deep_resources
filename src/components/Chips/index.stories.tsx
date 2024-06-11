import type { Meta, StoryObj } from "@storybook/react";
import { Chips } from "."
import { ChipsTypes, chipsChildren } from "./chipsTypes";

const meta: Meta<typeof Chips> = {
  title: "Components/Chips",
  component: Chips,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: ChipsTypes.default,
    children:chipsChildren.chipsChildren,
    addRightIcon: false,
    addLeftIcon: false,
    handleClick : ()=>{ alert("Click on default" )}
  },
};

export const Not_Active: Story = {
  args: {
    variant: ChipsTypes.not_active,
    children: chipsChildren.chipsChildren,
    addRightIcon: false,
    addLeftIcon: false,
    handleClick : ()=>{ alert("Click on not Active" )},
    size:'md'
  },
};

export const Active: Story = {
  args: {
    variant: ChipsTypes.active,
    children:chipsChildren.chipsChildren,
    addRightIcon: false,
    addLeftIcon: false,
    handleClick : ()=>{alert("Click on Active" )}
  },
};