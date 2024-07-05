import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";
import { TableData } from "../Data/TableData";

const meta: Meta<typeof Table> = {
  title: "Components/Table/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Solid: Story = {
  args: {
    variant: "solid",
    data: TableData,
  },
};
