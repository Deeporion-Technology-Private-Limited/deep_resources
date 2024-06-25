import type { Meta, StoryObj } from "@storybook/react";
import AddressPage from "./Address";

const meta: Meta<typeof AddressPage> = {
  title: "Examples/AddressPage",
  component: AddressPage,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {};
