import { Box, Button, Headings, Modal } from "@/components";
import chart from "./Icons/chart.svg";
import frmaeMeasurement from "../../images/frameMeasurement.png";
import hearticon from "./Icons/hearticon.svg";
import { Table } from "@/components/Table/Table";
import { Product } from "./types";
import { useState } from "react";
import ProductCard from "@/components/Cards/ProductCards";
import { womanSizeFormatted } from "@/components/Data/SizeDataForWomen";

export const Sizechartmodel = () => {
  const [isInchesSelected, setIsInchesSelected] = useState(true);
  const [selectedTab, setSelectedTab] = useState("sizeChart");

  return (
    <Box className="border border-pink-800">
      <Modal
        button01={false}
        button02={false}
        modalbutton={true}
        onClose={() => {}}
        openModal={false}
        crossIcon={true}
        header={
          <Box className="flex border-[rgba(255, 255, 255, 1)]">
            <Box>
              <ProductCard
                style={{ width: "56px", height: "56px" }}
                imageClass="w-full h-full rounded-lg"
                imageSrc="https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg"
                title={""}
                price={""}
                sizes={[]}
              />
            </Box>
            <Box className="p-2 ">
              <Headings
                FontSize="text-base"
                fontWeight="font-normal"
                text={Product.ModelDescription}
              />{" "}
              <Headings
                fontWeight={"font-bold"}
                FontSize="text-base"
                text={Product.ModelTitle}
              />{" "}
            </Box>
          </Box>
        }
      >
        <Box className="flex justify-center mb-3">
          <button
            className={`w-3/6 border-b pb-2 pt-2 hover:border-b-[#3F271E] hover:font-bold ${
              selectedTab === "sizeChart" ? "border-b-[#3F271E] font-bold" : ""
            }`}
            onClick={() => setSelectedTab("sizeChart")}
          >
            {Product.SizeChart}
          </button>
          <button
            className={`w-3/6 border-b pb-2 pt-2 hover:border-b-[#3F271E] hover:font-bold ${
              selectedTab === "howToMeasure"
                ? "border-b-[#3F271E] font-bold"
                : ""
            }`}
            onClick={() => setSelectedTab("howToMeasure")}
          >
            {Product.HowToMeasure}
          </button>
        </Box>

        {selectedTab === "sizeChart" ? (
          <Box className="flex justify-end">
            <Box className="flex items-center border border-[#E8EBED] rounded-[50px] p-[6px] w-[91px] h-[40px]">
              <button
                className={`${
                  isInchesSelected
                    ? "bg-[#BFA59A] text-white w-[38px] h-[28px]"
                    : "bg-white text-black w-[48px] h-[28px]"
                } rounded-[50px] `}
                onClick={() => setIsInchesSelected(true)}
              >
                in
              </button>
              <button
                className={`${
                  !isInchesSelected
                    ? "bg-[#BFA59A] text-white w-[48px] h-[28px]"
                    : "bg-white text-black w-[38px] h-[28px]"
                } rounded-[50px] `}
                onClick={() => setIsInchesSelected(false)}
              >
                cm
              </button>
            </Box>
          </Box>
        ) : (
          <>
            <span className="font-poppins font-normal text-[14px] leading-[21px] text-center text-[#26282B]">
              {Product.MeasureDescription}
            </span>
            <Box className="flex justify-center">
              <img
                src={frmaeMeasurement}
                className="w-auto h-auto"
                alt="Measurement"
              />
            </Box>
          </>
        )}

        <Table data={womanSizeFormatted} />

        <Box className="flex w-full py-4 justify-center items-center gap-2 mb-4">
          <Button
            className="flex-1 py-3 rounded-lg mr-2 flex justify-center items-center gap-2"
            style={{
              background: "linear-gradient(to right, #BFA59A, #3F271E)",
            }}
          >
            <img src={chart} alt="Bag" className="h-6 w-6 inline-block" />
            <p className="text-white text-base font-semibold inline-block ml-2">
              {Product.AddToCart}
            </p>
          </Button>

          <Button className="flex-1 bg-gray-200 py-3 rounded-lg text-gray-700 font-semibold text-base font-poppins flex justify-center items-center gap-2">
            <img src={hearticon} alt="Like" className="h-6 w-6 inline-block" />
            <p className="text-[#72787F] text-base font-semibold inline-block ml-2">
              {Product.Wishlist}
            </p>
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};
