import { Meta, StoryObj } from "@storybook/react";
import Calendar from "../Calendar/SelectedDateCalendar";
import { Table } from "../Table/Table";
import { Box } from "../Layout";
import { TabData } from "./data";
import { Tabs } from ".";

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
        content: <Table data={TabData} variant="solid" />,
      },
      {
        label: "Calender Component",
        content: <Calendar month={6} year={2024} />,
      },
    ],
  },
};
