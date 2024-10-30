import type { Meta, StoryObj } from "@storybook/react";
import { AccordionTypes, contentSize,  contentName } from "../../types";
import CoustomizeAccordion from "./CoustomizeAccordion";
import { AccordionUpArrow } from "../Icon";


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
    content:contentSize,
    Icon:<AccordionUpArrow/>,
  },
};
