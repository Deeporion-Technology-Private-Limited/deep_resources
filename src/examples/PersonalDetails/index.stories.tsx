import type { Meta, StoryObj  } from "@storybook/react";
import { StroyAccordion } from "./StoryAccordion";


const meta: Meta<typeof StroyAccordion> = {
  title: "Examples/PersonalDetailsPage",
  component: StroyAccordion,
  parameters: {
    layout: "centered",
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
