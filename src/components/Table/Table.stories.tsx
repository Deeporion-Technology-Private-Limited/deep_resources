import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";

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

const tableData = [
  {
    ID: "1",
    Order: "Order 1",
    Date: "2024-06-01",
    Amount: "$100",
    "Time created": "12:00 PM",
    Status: "Pending",
    Name: "John Doe",
    Role: "Admin",
  },
  {
    ID: "2",
    Order: "Order 2",
    Date: "2024-06-02",
    Amount: "$100",
    "Time created": "12:00 PM",
    Status: "Pending",
    Name: "John Harry",
    Role: "Admin",
  },
  {
    ID: "3",
    Order: "Order 3",
    Date: "2024-06-03",
    Amount: "$100",
    "Time created": "12:00 PM",
    Status: "Pending",
    Name: "John Harry",
    Role: "Admin",
  },
  {
    ID: "4",
    Order: "Order 4",
    Date: "2024-06-04",
    Amount: "$100",
    "Time created": "12:00 PM",
    Status: "Pending",
    Name: "John Harry",
    Role: "Admin",
  },
  {
    ID: "5",
    Order: "Order 5",
    Date: "2024-06-05",
    Amount: "$100",
    "Time created": "12:00 PM",
    Status: "Pending",
    Name: "John Harry",
    Role: "Admin",
  },
  {
    ID: "6",
    Order: "Order 6",
    Date: "2024-06-06",
    Amount: "$100",
    "Time created": "12:00 PM",
    Status: "Pending",
    Name: "John Harry",
    Role: "Admin",
  },
];

export const Solid: Story = {
  args: {
    variant: "solid",
    data: tableData,
  },
};
