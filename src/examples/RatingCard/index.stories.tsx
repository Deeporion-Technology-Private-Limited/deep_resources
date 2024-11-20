import type { Meta, StoryObj } from "@storybook/react";
import { Ratingcard } from ".";
import { CardDetails } from "./ratingStaticData";

const meta: Meta<typeof Ratingcard> = {
  title: "Examples/Ratingcard",
  component: Ratingcard,
  parameters: {
    layout: "centered",
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args:{
        objData : CardDetails
    }
};
