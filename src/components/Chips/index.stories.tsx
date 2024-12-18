import type { Meta, StoryObj } from "@storybook/react";
import { Chips } from "."
import { ChipsTypes, chipsChildren } from "../types";

const meta: Meta<typeof Chips> = {
  title: "Components/Chips/Chips",
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
    handleClick : ()=>{ alert("Click on default" )},
  },
};

export const Not_Active: Story = {
  args: {
    variant: ChipsTypes.not_active,
    children: chipsChildren.chipsChildren,
    addRightIcon: false,
    addLeftIcon: false,
    handleClick : ()=>{ alert("Click on not Active" )},
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