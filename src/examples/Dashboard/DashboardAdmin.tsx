import React from "react";
import { AdminSidebar } from "../AdminSidebar";
import {
  Barchart,
  Catalogue,
  Gift,
  Orders,
  Seller,
  Setting,
  WareHouse,
} from "../AdminSidebar/adminbarConst";
import Agents from "../Agents";
import { Hamburger } from "../Hemburger";
import Heading from "../Heading";
import { Box, Headings, Text } from "@/components";
import FaverateCard from "@/components/Cards/FaverateCard";

const DashboardAdmin = () => {
  const dataItem = [
    {
      name: "Pending Orders",
      num: "87",
    },
    {
      name: "Active Orders",
      num: "79",
    },
    {
      name: "Delivered orders",
      num: "58",
    },
    {
      name: "Cancelled orders",
      num: "43",
    },
    {
      name: "Suppliers",
      num: "17",
    },
    {
      name: "Categories",
      num: "17",
    },
    {
      name: "Products",
      num: "293",
    },
    {
      name: "Promotions",
      num: "10",
    },
    {
      name: "Active Agents    ",
      num: "9",
    },
  ];
  return (
    <div className="flex gap-8">
      <div>
        <AdminSidebar
          Data={[
            {
              menuLeftIcon: <Barchart />,
              menus: "Dashboard",
            },
            {
              menuLeftIcon: <Catalogue />,
              menus: "Catalogue",
            },
            {
              menuLeftIcon: <Seller />,
              menus: "Seller",
            },
            {
              menuLeftIcon: <WareHouse />,
              menus: "Warehouse",
            },

            {
              menuLeftIcon: <Orders />,
              menus: "Orders",
            },
            {
              menuLeftIcon: <Gift />,
              menus: "Offers & Gift Cards",
            },
            {
              menuLeftIcon: <Setting />,
              menus: "Settings",
            },
          ]}
          logo="/src/examples/AdminSidebar/icon/Logo.svg"
        />
      </div>

      <div>
        <Heading
          className="h-fit"
          handleNotification={() => {}}
          //   headingItem={<Text className="font-bold text-2xl">Profile</Text>}
          imageSrc="/src/components/Header/navbarIcons/image.png"
        />
        <div className="flex">
          {dataItem.map((item, index) => (
            <FaverateCard
              className="max-w-none max-w-[35rem] bg-[#3F271E] text-white rounded-2xl"
              descriptionStyle="px-2"
              key={index}
            >
              <React.Fragment key=".0">
                <Box className="p-2 flex flex-col gap-5 flex-wrap">
                  <Text
                    as="p"
                    className="font-extrabold text-[2.5rem] loading-normal w-full"
                  >
                    {item.name}
                  </Text>
                  <Box className="flex w-max gap-2 ">
                    <Text className="font-extrabold text-[4rem]">
                      {item.num}
                    </Text>
                  </Box>
                </Box>
              </React.Fragment>
            </FaverateCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
