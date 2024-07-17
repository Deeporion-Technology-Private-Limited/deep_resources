import type { Meta, StoryObj } from "@storybook/react";
import { SystemMessage } from ".";
import { messageText, systemMessageTypes } from "../types";

const meta: Meta<typeof SystemMessage> = {
  title: "Components/systemMessage/systemMessage",
  component: SystemMessage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: systemMessageTypes.error,
    children: messageText.children,
    addRightIcon : false,
    handleClose:()=>{ alert("clicked on error message")},
    },
};

export const Warning: Story = {
  args: {
    variant: systemMessageTypes.warning,
    children: messageText.children,
    addRightIcon : false,
    handleClose:()=>{ alert("clicked on error warning")}
  },
};

export const Information: Story = {
  args: {
    variant: systemMessageTypes.information,
    children: messageText.children,
    addRightIcon : false,
    handleClose:()=>{  alert("clicked on error information")}
  },
};