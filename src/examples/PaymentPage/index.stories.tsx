import type { Meta, StoryObj  } from "@storybook/react";
import { DemoAddressField } from "./DemoStoryField";


const meta: Meta<typeof DemoAddressField> = {
  title: "Examples/PaymentPage",
  component: DemoAddressField,
  parameters: {
    layout: "centered",
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};
