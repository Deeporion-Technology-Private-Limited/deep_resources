import { Box, Button, Headings, Menu, MenuItem, Modal } from "@/components";
// import ProductCard from "@/components/Cards/ProductCards/Product_card";
// import ProductCard from "../../components/Cards/ProductCards"
import chart from "./Icons/chart.svg";
import frmaeMeasurement from "../../images/frameMeasurement.png";
import hearticon from "./Icons/hearticon.svg";
import { TableHeader } from "@/components/Table/TableHeader";
import { Product } from "./types";
import { useState } from "react";
import ProductCard from "@/components/Cards/ProductCards";

export const Sizechartmodel = () => {
  const [isInchesSelected, setIsInchesSelected] = useState(true);
  const [selectedTab, setSelectedTab] = useState("sizeChart"); 

  return (
    <Box className="border border-pink-800 hhh">
    <Modal
      button01={false}
      button02={false}
      modalbutton={true}
      onClose={() => {}}
      openModal={false}
      
      header={
        <Box className="flex   border-[rgba(255, 255, 255, 1)]">
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
          <Box className="p-2">
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
          className={`w-3/6 border-b pb-2 pt-2 hover:border-b-[#3F271E] hover:font-bold ${selectedTab === "sizeChart" ? "border-b-[#3F271E] font-bold" : ""}`}
          onClick={() => setSelectedTab("sizeChart")}
        >
          {Product.SizeChart}
        </button>
        <button
          className={`w-3/6 border-b pb-2 pt-2 hover:border-b-[#3F271E] hover:font-bold ${selectedTab === "howToMeasure" ? "border-b-[#3F271E] font-bold" : ""}`}
          onClick={() => setSelectedTab("howToMeasure")}
        >
          {Product.HowToMeasure}
        </button>
      </Box>

      {selectedTab === "sizeChart" ? (
        <div className="flex justify-end">
          <div className="flex items-center border border-[#E8EBED] rounded-[50px] p-[6px] w-[91px] h-[40px]">
            <button
              className={`${
                isInchesSelected
                  ? "bg-[#BFA59A] text-white w-[38px] h-[28px]"
                  : "bg-white text-black w-[48px] h-[28px]"
              } rounded-[50px] px-[12px] py-[4px]`}
              onClick={() => setIsInchesSelected(true)}
            >
              in
            </button>
            <button
              className={`${
                !isInchesSelected
                  ? "bg-[#BFA59A] text-white w-[48px] h-[28px]"
                  : "bg-white text-black w-[38px] h-[28px]"
              } rounded-[50px] px-[12px] py-[4px] ml-2`}
              onClick={() => setIsInchesSelected(false)}
            >
              cm
            </button>
          </div>
        </div>
      ) : (
        <>
          <span className="font-poppins font-normal text-[14px] leading-[21px] text-center text-[#26282B]">
            {Product.MeasureDescription}
          </span>
          <div className="flex justify-center">
            <img
              src={frmaeMeasurement}
              className="w-auto h-auto"
              alt="Measurement"
            />
          </div>
        </>
      )}



      <TableHeader
        data={[
          ["XS", "35.0", "24.0", "13.0"],
          ["S", "37.0", "26.0", "13.5"],
          ["M", "39.0", "28.0", "14.0"],
          ["L", "41.0", "30.0", "14.5"],
          ["XL", "43.0", "32.0", "15.0"],
        ]}
        header={[
          "Size",
          "Hips(cm)",
          "To fit waist (cm)",
          "In Seam Length (cm)",
        ]}
        variant="solid"
      />
      <div className="flex w-full  py-4  justify-center items-center gap-2 ">
        <Button
          className="flex-1 py-3 rounded-lg mr-2 flex justify-center items-center gap-2"
          style={{
            background: "linear-gradient(to right, #BFA59A, #3F271E)",
          }}
        >
          <img src={chart} alt="Bag" className="h-6 w-6  inline-block" />
          <p className="text-white text-base font-semibold inline-block ml-2">
            {Product.AddToCart}
          </p>
        </Button>

        <Button className="flex-1 bg-gray-200 py-3 rounded-lg text-gray-700 font-semibold text-base font-poppins flex justify-center items-center gap-2">
          <img src={hearticon} alt="Like" className="h-6 w-6  inline-block" />
          <p className="text-[#72787F] text-base font-semibold inline-block ml-2">
            {Product.Wishlist}
          </p>
        </Button>
      </div>
    </Modal>
    </Box>
  );
};
