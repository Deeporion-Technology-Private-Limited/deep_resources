

import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from ".";
import person from "../../Header/navbarIcons/person.svg"


const meta: Meta<typeof Icon> = {
  title: "Components/IconButton",
  component: Icon,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconUrl: person,
    children:"Login"
  },
};

export const WithoutText: Story = {
  args: {
    iconUrl: person,
  },
};
