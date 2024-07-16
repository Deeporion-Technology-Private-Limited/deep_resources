import type { Meta, StoryObj } from "@storybook/react";
import { Elevation } from ".";
import { ElevationShadow } from "../types";

const meta: Meta<typeof Elevation> = {
  title: "Components/Elevation/Elevation",
  component: Elevation,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ElevationLevels: Story = {
  args: {
    shadow: ElevationShadow.Medium,
    text: "Elevation"
  },
};