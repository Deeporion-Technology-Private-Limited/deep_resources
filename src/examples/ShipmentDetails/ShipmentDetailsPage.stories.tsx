import type { Meta, StoryObj } from "@storybook/react";
import { ShipmentDetails } from "./ShipmentDetailsPage";

const meta: Meta<typeof ShipmentDetails> = {
  title: "Examples/ShipmentDetails",
  component: ShipmentDetails,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {};
