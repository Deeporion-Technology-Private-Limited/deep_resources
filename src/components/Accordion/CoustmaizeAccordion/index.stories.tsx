import type { Meta, StoryObj } from "@storybook/react";
import { AccordionTypes, contentData, contentName } from "../AccordionTypes";
import { UpArrow } from "../Icon/Icon";
import CoustomizeAccordion from ".";

const meta: Meta<typeof CoustomizeAccordion> = {
  title: "Components/Accordion/CoustomizeAccordion",
  component: CoustomizeAccordion,
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
    Icon:<UpArrow/>,
  },
};
