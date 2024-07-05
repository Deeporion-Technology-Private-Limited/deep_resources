import type { Meta, StoryObj } from "@storybook/react";
import Privacy from ".";

const meta: Meta<typeof Privacy> = {
  title: "Examples/PrivacyPolicy",
  component: Privacy,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {};
