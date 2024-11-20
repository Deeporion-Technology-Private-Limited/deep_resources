import type { Meta, StoryObj } from "@storybook/react";
import NoItemPageExample from ".";


const meta: Meta<typeof NoItemPageExample> = {
  title: "Examples/NoItemPage",
  component: NoItemPageExample,
  parameters: {
    layout: "centered",
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
};
