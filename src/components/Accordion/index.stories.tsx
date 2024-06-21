import type { Meta, StoryObj } from "@storybook/react";
import { AccordionTypes, contentData, contentName } from "./AccordionTypes";
import Accordion from ".";
import {  UpArrow, UpCursor } from "./Icon/Icon";
const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion/Accordion",
  component: Accordion,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: AccordionTypes.Arrow,
    children:contentName.Accordion1,
    content:contentData.content,
    Icon:<UpArrow />
  },
};

export const Cursor: Story = {
  args: {
    variant:AccordionTypes.Cursor,
    children:contentName.Accordion2,
    content:contentData.content,
    Icon:<UpCursor/>
  },
};

