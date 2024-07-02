import type { Meta, StoryObj } from "@storybook/react";
import { TalkToUsForm } from "./TalkToUs";

const meta: Meta<typeof TalkToUsForm> = {
  title: "Examples/Form",
  component: TalkToUsForm,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const TalkToUs: Story = {};
