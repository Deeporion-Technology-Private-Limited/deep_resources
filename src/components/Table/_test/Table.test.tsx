import { render } from "@testing-library/react";
import { Table } from "../Table";

describe("Table component", () => {
  it("renders table Component with data=[---]", () => {
    render(
      <Table
        data={[
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
        ]}
      />
    );
  });
});
