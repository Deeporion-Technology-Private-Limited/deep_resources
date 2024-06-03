import type { Meta, StoryObj } from "@storybook/react";
import { TableHeader } from "./TableHeader";

const meta: Meta<typeof TableHeader> = {
  title: "Components/Table/TableHeader",
  component: TableHeader,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

const tableHeader = ["ID", "Order", "Date", "Amount", "Time created", "Status", "Name", "Role"];
const tableData = [
  ["1", "Order 1", "2024-06-01", "$100", "12:00 PM", "Pending", "John Doe", "Admin"],
  ["2", "Order 2", "2024-06-02", "$100", "12:00 PM", "Pending", "John Harry", "Admin"],
  ["3", "Order 3", "2024-06-03", "$100", "12:00 PM", "Pending", "John Harry", "Admin"],
  ["4", "Order 4", "2024-06-04", "$100", "12:00 PM", "Pending", "John Harry", "Admin"],
  ["5", "Order 5", "2024-06-05", "$100", "12:00 PM", "Pending", "John Harry", "Admin"],
  ["6", "Order 6", "2024-06-06", "$100", "12:00 PM", "Pending", "John Harry", "Admin"],
];



export const Solid: Story = {
  args: {
    variant: "solid",
    header: tableHeader,
    data: tableData, 
  },
};



