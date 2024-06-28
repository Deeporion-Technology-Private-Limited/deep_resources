import { Checkbox } from "@/components";
import { ButtonSize } from "@/components/Button/type";
import { Table } from "@/components/Table/Table";
import vector from "./Vector (3).svg";
import Chips from "@/components/Chips";
import { ChipsTypes } from "@/components/Chips/chipsTypes";

export const tabData = [
  {
    label: "All Warehouses",
    content: (
      <Table
        data={[
          {
            warehouseID: "A0AAAAAA000A",
            ManagerName: "Joe Arron ",
            Address: "Chandigarh",
            Email: "joearron@gmaiil.com ",
            Phone: 985674839,
            ActiveStatus: (
              <Checkbox
                labelPosition="before"
                onChange={() => {}}
                size={ButtonSize.Medium}
                type="toggle"
                variant="Basic"
                checked
                value={"check"}
              />
            ),
            Action: (
              <img
                src={vector}
                onClick={() => {
                  alert("handle Action");
                }}
                className="cursor-pointer"
              />
            ),
          },
          {
            warehouseID: "A0AAAAAA000A",
            ManagerName: "Joe Arron ",
            Address: "Chandigarh",
            Email: "joearron@gmaiil.com ",
            Phone: 985674839,
            ActiveStatus: (
              <Checkbox
                labelPosition="before"
                onChange={() => {}}
                size={ButtonSize.Medium}
                type="toggle"
                variant="Basic"
                value={"check"}
                checked
              />
            ),
            Action: (
              <img
                src={vector}
                onClick={() => {
                  alert("handle Action");
                }}
                className="cursor-pointer"
              />
            ),
          },
          {
            warehouseID: "A0AAAAAA000A",
            ManagerName: "Joe Arron ",
            Address: "Chandigarh",
            Email: "joearron@gmaiil.com ",
            Phone: 985674839,
            ActiveStatus: (
              <Checkbox
                labelPosition="before"
                onChange={() => {}}
                size={ButtonSize.Medium}
                type="toggle"
                variant="Basic"
                checked
                value={"check"}
              />
            ),
            Action: (
              <img
                src={vector}
                onClick={() => {
                  alert("handle Action");
                }}
                className="cursor-pointer"
              />
            ),
          },
          {
            warehouseID: "A0AAAAAA000A",
            ManagerName: "Joe Arron ",
            Address: "Chandigarh",
            Email: "joearron@gmaiil.com ",
            Phone: 985674839,
            ActiveStatus: (
              <Checkbox
                labelPosition="before"
                onChange={() => {}}
                size={ButtonSize.Medium}
                type="toggle"
                checked
                variant="Basic"
                value={"check"}
              />
            ),
            Action: (
              <img
                src={vector}
                onClick={() => {
                  alert("handle Action");
                }}
                className="cursor-pointer"
              />
            ),
          },
          {
            warehouseID: "A0AAAAAA000A",
            ManagerName: "Joe Arron ",
            Address: "Chandigarh",
            Email: "joearron@gmaiil.com ",
            Phone: 985674839,
            ActiveStatus: (
              <Checkbox
                labelPosition="before"
                onChange={() => {}}
                size={ButtonSize.Medium}
                type="toggle"
                checked
                variant="Basic"
                value={"check"}
              />
            ),
            Action: (
              <img
                src={vector}
                onClick={() => {
                  alert("handle Action");
                }}
                className="cursor-pointer"
              />
            ),
          },
          {
            warehouseID: "A0AAAAAA000A",
            ManagerName: "Joe Arron ",
            Address: "Chandigarh",
            Email: "joearron@gmaiil.com ",
            Phone: 985674839,
            ActiveStatus: (
              <Checkbox
                labelPosition="before"
                onChange={() => {}}
                size={ButtonSize.Medium}
                type="toggle"
                variant="Basic"
                checked
                value={"check"}
              />
            ),
            Action: (
              <img
                src={vector}
                onClick={() => {
                  alert("handle Action");
                }}
                className="cursor-pointer"
              />
            ),
          },
        ]}
        variant="solid"
      />
    ),
  },
  {
    label: "Received from seller",
    content: (
      <Table
        data={[
          {
            warehouseID: "A0AAAAAA000A",
            ManagerName: "Joe Arron ",
            Address: "Chandigarh",
            Email: "joearron@gmaiil.com ",
            Phone: 985674839,
            status: (
              <Chips
                handleClick={() => {}}
                variant={ChipsTypes.default}
                className="bg-yellow-400 text-yellow-700 rounded-xl pl-5 pr-5 "
              >
                Recived
              </Chips>
            ),
          },
          {
            warehouseID: "A0AAAAAA000A",
            ManagerName: "Joe Arron ",
            Address: "Chandigarh",
            Email: "joearron@gmaiil.com ",
            Phone: 985674839,
            status: (
              <Chips
                handleClick={() => {}}
                variant={ChipsTypes.default}
                className="bg-green-400 text-green-900 rounded-xl pl-5 pr-5 "
              >
                Shipped
              </Chips>
            ),
          },
          {
            warehouseID: "A0AAAAAA000A",
            ManagerName: "Joe Arron ",
            Address: "Chandigarh",
            Email: "joearron@gmaiil.com ",
            Phone: 985674839,
            status: (
              <Chips
                handleClick={() => {}}
                variant={ChipsTypes.default}
                className="bg-yellow-400 text-yellow-700 rounded-xl pl-5 pr-5 "
              >
                Recived
              </Chips>
            ),
          },
          {
            warehouseID: "A0AAAAAA000A",
            ManagerName: "Joe Arron ",
            Address: "Chandigarh",
            Email: "joearron@gmaiil.com ",
            Phone: 985674839,
            status: (
              <Chips
                handleClick={() => {}}
                variant={ChipsTypes.default}
                className="bg-green-400 text-green-900 rounded-xl pl-5 pr-5 "
              >
                Shipped
              </Chips>
            ),
          },
          {
            warehouseID: "A0AAAAAA000A",
            ManagerName: "Joe Arron ",
            Address: "Chandigarh",
            Email: "joearron@gmaiil.com ",
            Phone: 985674839,
            status: (
              <Chips
                handleClick={() => {}}
                variant={ChipsTypes.default}
                className="bg-red-200 text-red-700 rounded-xl pl-5 pr-5 "
              >
                Not Received
              </Chips>
            ),
          },
          {
            warehouseID: "A0AAAAAA000A",
            ManagerName: "Joe Arron ",
            Address: "Chandigarh",
            Email: "joearron@gmaiil.com ",
            Phone: 985674839,
            status: (
              <Chips
                handleClick={() => {}}
                variant={ChipsTypes.default}
                className="bg-red-200 text-red-700 rounded-xl pl-5 pr-5 "
              >
                Not Received
              </Chips>
            ),
          },
        ]}
        variant="solid"
      />
    ),
  },
  {
    label: "Deliver to User",
    content: (
      <Table
        data={[
          {
            warehouseID: "A0AAAAAA000A",
            ManagerName: "Joe Arron ",
            Address: "Chandigarh",
            Email: "joearron@gmaiil.com ",
            Phone: 985674839,
            status: (
              <Chips
                handleClick={() => {}}
                variant={ChipsTypes.default}
                className="bg-green-400 text-green-900 rounded-xl pl-5 pr-5 "
              >
                Delivered
              </Chips>
            ),
          },
          {
            warehouseID: "A0AAAAAA000A",
            ManagerName: "Joe Arron ",
            Address: "Chandigarh",
            Email: "joearron@gmaiil.com ",
            Phone: 985674839,
            status: (
              <Chips
                handleClick={() => {}}
                variant={ChipsTypes.default}
                className="bg-yellow-400 text-yellow-700 rounded-xl pl-5 pr-5 "
              >
                Out for delivery
              </Chips>
            ),
          },
          {
            warehouseID: "A0AAAAAA000A",
            ManagerName: "Joe Arron ",
            Address: "Chandigarh",
            Email: "joearron@gmaiil.com ",
            Phone: 985674839,
            status: (
              <Chips
                handleClick={() => {}}
                variant={ChipsTypes.default}
                className="bg-green-400 text-green-900 rounded-xl pl-5 pr-5 "
              >
                Delivered
              </Chips>
            ),
          },
          {
            warehouseID: "A0AAAAAA000A",
            ManagerName: "Joe Arron ",
            Address: "Chandigarh",
            Email: "joearron@gmaiil.com ",
            Phone: 985674839,
            status: (
              <Chips
                handleClick={() => {}}
                variant={ChipsTypes.default}
                className="bg-red-200 text-red-700 rounded-xl pl-5 pr-5 "
              >
                In warehouse
              </Chips>
            ),
          },
          {
            warehouseID: "A0AAAAAA000A",
            ManagerName: "Joe Arron ",
            Address: "Chandigarh",
            Email: "joearron@gmaiil.com ",
            Phone: 985674839,
            status: (
              <Chips
                handleClick={() => {}}
                variant={ChipsTypes.default}
                className="bg-yellow-300 text-yellow-700 rounded-xl pl-5 pr-5 "
              >
                Out for delivery
              </Chips>
            ),
          },
          {
            warehouseID: "A0AAAAAA000A",
            ManagerName: "Joe Arron ",
            Address: "Chandigarh",
            Email: "joearron@gmaiil.com ",
            Phone: 985674839,
            status: (
              <Chips
                handleClick={() => {}}
                variant={ChipsTypes.default}
                className="bg-red-200 text-red-700 rounded-xl pl-5 pr-5 "
              >
                In warehouse
              </Chips>
            ),
          },
        ]}
        variant="solid"
      />
    ),
  },
];
