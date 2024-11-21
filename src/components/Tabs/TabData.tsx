import { ComponentProps } from "react";
import { Box } from "../Layout";
import { VariantProps, cva } from "class-variance-authority";

export const Tabstyles = cva([
  "w-full",
  "h-full",
  "flex",
  "flex-col",
  "gap-5",
  "pt-5",
]);

export interface ITab {
  label: string;
  content: React.ReactNode;
}

export interface ITabsProps
  extends ComponentProps<typeof Box>,
    VariantProps<typeof Tabstyles> {
  tabs: ITab[];
  className?: string;
}

export const TabData = [
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
];
