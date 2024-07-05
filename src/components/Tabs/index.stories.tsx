import { Meta, StoryObj } from "@storybook/react";
import Tabs from "./index";
import Calendar from "../Calendar/SelectedDateCalendar";
import { Table } from "../Table/Table";
import { Box } from "../Layout";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    tabs: [
      {
        label: "All Warehouses",
        content: <Box>Slide 1</Box>,
      },
      {
        label: "Received from seller",
        content: <Box>Slide 2</Box>,
      },
      {
        label: "Received from seller",
        content: <Box>Slide 3</Box>,
      },
      {
        label: "Deliver to User",
        content: <Box>Slide 4</Box>,
      },
    ],
  },
};

export const RenderComponent = {
  args: {
    tabs: [
      {
        label: "Table Component",
        content: (
          <Table
            data={[
              {
                Amount: "$100",
                Date: "2024-06-01",
                ID: "1",
                Name: "John Doe",
                Order: "Order 1",
                Role: "Admin",
                Status: "Pending",
                "Time created": "12:00 PM",
              },
              {
                Amount: "$100",
                Date: "2024-06-02",
                ID: "2",
                Name: "John Harry",
                Order: "Order 2",
                Role: "Admin",
                Status: "Pending",
                "Time created": "12:00 PM",
              },
              {
                Amount: "$100",
                Date: "2024-06-03",
                ID: "3",
                Name: "John Harry",
                Order: "Order 3",
                Role: "Admin",
                Status: "Pending",
                "Time created": "12:00 PM",
              },
              {
                Amount: "$100",
                Date: "2024-06-04",
                ID: "4",
                Name: "John Harry",
                Order: "Order 4",
                Role: "Admin",
                Status: "Pending",
                "Time created": "12:00 PM",
              },
              {
                Amount: "$100",
                Date: "2024-06-05",
                ID: "5",
                Name: "John Harry",
                Order: "Order 5",
                Role: "Admin",
                Status: "Pending",
                "Time created": "12:00 PM",
              },
              {
                Amount: "$100",
                Date: "2024-06-06",
                ID: "6",
                Name: "John Harry",
                Order: "Order 6",
                Role: "Admin",
                Status: "Pending",
                "Time created": "12:00 PM",
              },
            ]}
            variant="solid"
          />
        ),
      },
      {
        label: "Calender Component",
        content: <Calendar month={6} year={2024} />,
      },
    ],
  },
};
