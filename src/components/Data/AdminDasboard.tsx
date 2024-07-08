import React, { useState } from "react";
import { BarChart, Box, Input, Text } from "@/components";
import FaverateCard from "@/components/Cards/FaverateCard";
import Heading from "@/examples/Heading";
import image from "./image_luxgo cities-03 3.png"
import { InputType, InputVariant } from "../Input/type";
import { GreenArrow } from "../Icons";
import { Chart } from "../Charts";
import { ChartsType } from "../Charts/ChartsTypes";
import { Table } from "../Table/Table";
import { AdminProps } from "@/examples/AdminDasboard/AdminInterface";
import { graphdata } from "../BarChart/barConst";


const DashboardAdmin: React.FC<AdminProps> = ({ UsersData, TableData, PendingData, DayOption }) => {

    const [showTable, setShowTable] = useState(false)

    const handleClick = (value: string) => {
        if (value === "Pending") {
            setShowTable(true)
        } else {
            setShowTable(false)
        }
    }
    return (
        <div className="w-full p-4">
            <Heading
                headingItem="Dashboard"
                className="font-bold text-2xl pl-0"
                imageSrc={image}
            />
            <div className="flex gap-4 items-center mb-4">
                <h1 className="text-base font-semibold">Highlights</h1>
                <select name="Days" className="w-[68px] p-2 text-sm cursor-pointer outline-none rounded-2xl bg-[#EBE3E0]">
                    <option value="">Days</option>
                    {DayOption.map((item) => (
                        <option key={item} value={item}>{item}</option>
                    ))}handleClick
                </select>
            </div>

            <div className="grid lg:grid-cols-5 pr-10 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 pt-4 pb-10">
                {UsersData.map((item, index) => (
                    <FaverateCard
                        className="w-full h-full bg-[#3F271E] text-white rounded-2xl"
                        descriptionStyle="px-2 py-0"
                        key={index}
                    >
                        <React.Fragment>
                            <Box className="p-2 flex flex-col gap-2">
                                <Text as="p">
                                    {item.name}
                                </Text>
                                <Box >
                                    <Text className="font-bold text-2xl">{item.num}</Text>
                                </Box>
                            </Box>
                        </React.Fragment>
                    </FaverateCard>
                ))}
            </div>
            <div className="pr-8">
                <Input
                    type={InputType.Date}
                    variant={InputVariant.Outlined}
                    value=""
                    className="w-full focus:outline-[#C9CDD2] "
                />
                <div className="grid lg:flex lg:gap-20  pt-8">
                    <div className="w-[95vw] p-6 grid grid-row">
                        <div className="grid ">
                            <h1 className="text-[#72787F] font-bold">Revenue</h1>
                            <h1 className="font-bold text-2xl">₹4,386</h1>
                            <h1 className="font-bold text-[#059669] flex">
                                <div className="bg-[#D1FAE5] rounded-xl mr-1 w-fit h-fit">
                                    <GreenArrow />
                                </div>
                                +11.32%</h1>
                        </div>
                        <div>
                            <Chart
                                variant={ChartsType.doubleSplineAreaChart}
                                xAxisValues={[0, 800, 1100, 500, 1000, 700, 800]}
                                yAxisValues={[500, 700, 1000, 400, 900, 600, 700]}
                                yAxisLabels={["1120", "850", "550", "250", "0"]}
                                xAxisLabels={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
                                region={["Region1", "Region2"]}
                            />
                        </div>
                    </div>
                    <div className="w-full grid grid-row">
                        <div className="grid pt-5">
                            <h1 className="text-[#72787F] font-bold">Revenue</h1>
                            <h1 className="font-bold text-2xl">₹4,386</h1>
                            <h1 className="font-bold text-[#059669] flex"><div className="bg-[#D1FAE5] rounded-xl mr-1 w-fit h-fit"><GreenArrow /></div>  +11.32%</h1>
                        </div>
                        <div>
                            <BarChart
                                data={graphdata}
                                svgW={400}
                                svgH={300}
                                YRangeMax={100}
                            />
                        </div>

                    </div>

                </div>

            </div>
            <div className="pt-10">
                <div className="flex pb-5">
                    <div
                        className="w-full flex items-center justify-center font-bold border hover:border-black py-2 "
                        onClick={() => handleClick("Compeleted")}
                    >
                        Compeleted Order
                    </div>
                    <div
                        className="w-full flex items-center justify-center font-bold border hover:border-black py-2 "
                        onClick={() => handleClick("Pending")}
                    >
                        Pendig Order
                    </div>

                </div>
                {
                    showTable ? (
                        <Table
                            className="text-black w-full py-2"
                            tHeadStyle="w-fit py-0 h-16"
                            tDataStyle=" text-[14px]"
                            data={PendingData}
                        ></Table>
                    ) :
                        (
                            <Table
                                className="text-black w-full py-2"
                                tHeadStyle="w-fit py-0 h-16"
                                tDataStyle=" text-[14px]"
                                data={TableData}
                            ></Table>
                        )
                }
            </div>
        </div>

    );
};

export default DashboardAdmin;

// eslint-disable-next-line react-refresh/only-export-components
export const DataItem = [
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
    }
];
