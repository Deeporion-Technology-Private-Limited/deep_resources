import { Box, Checkbox, Pagination } from "@/components";
import { ButtonSize } from "@/components/Button/type";
import { Table } from "@/components/Table/Table";
import Chips from "@/components/Chips";
import { ChipsTypes } from "@/components/Chips/chipsTypes";
import { Action } from "./Action";
import { Color, Shape, Variants } from "@/components/Pagination/type";
import { useState } from "react";

export const Components = () => {
  const [page, setPage] = useState(1);
  const change = (page: number) => {
    setPage(page);
  };
  const tabData = [
    {
      label: "All Warehouses",
      content: (
        <Box className=" flex flex-col gap-10">
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
                Action: <Action />,
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
                Action: <Action />,
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
                Action: <Action />,
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
                Action: <Action />,
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
                Action: <Action />,
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
                Action: <Action />,
              },
            ]}
            variant="solid"
          />
          <Box className="flex">
            <Box className="w-full flex justify-center py-5 ">
              <Pagination
                totalPages={7}
                currentPage={page}
                onPageChange={change}
                variant={Variants.Outlined}
                activeColor={Color.Brown}
                className="w-20"
                customButtonSize="2rem"
                iconStyle="size-2  max-w-none"
                shape={Shape.Square}
              />
            </Box>
          </Box>
        </Box>
      ),
    },
    {
      label: "Received from seller",
      content: (
        <Box className=" flex flex-col gap-10">
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

          <Box className="flex">
            <Box className="w-full flex justify-center py-5 ">
              <Pagination
                totalPages={7}
                currentPage={page}
                onPageChange={change}
                variant={Variants.Outlined}
                activeColor={Color.Brown}
                className="w-20"
                customButtonSize="2rem"
                iconStyle="size-2  max-w-none"
                shape={Shape.Square}
              />
            </Box>
          </Box>
        </Box>
      ),
    },
    {
      label: "Deliver to User",
      content: (
        <Box className=" flex flex-col gap-10">
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
          <Box className="flex">
            <Box className="w-full flex justify-center  py-5 ">
              <Pagination
                totalPages={7}
                currentPage={page}
                onPageChange={change}
                variant={Variants.Outlined}
                activeColor={Color.Brown}
                className="w-20"
                customButtonSize="2rem"
                iconStyle="size-2  max-w-none"
                shape={Shape.Square}
              />
            </Box>
          </Box>
        </Box>
      ),
    },
  ];

  return tabData;
};
