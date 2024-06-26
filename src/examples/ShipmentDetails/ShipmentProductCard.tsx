import React from "react";
import check_circle_outline from "../../images/check_circle_outline.svg";
import progress_indicator_circle from "../../images/progress_indicator_circle.svg";
import location_pin from "../../images/location_pin.svg";
import {
  ShipmentDates,
  ShipmentOrderInfo,
  Sizes,
} from "@/components/Data/ShipmentDetails";
import { ProductShipmentDetails } from "./type";
import { Box } from "@/components/Layout/Box/index";

const ShipmentProductCard: React.FC = () => {
  return (
    <Box className="flex flex-col gap-4  bg-white rounded-lg p-6">
      <img
        src={ShipmentOrderInfo.imageURL}
        alt="Product"
        className="rounded-[23px] "
      />
      <Box className="flex flex-col gap-8">
        <Box className="flex flex-col gap-2 w-[490px] h-[82px]">
          <h2 className="text-base font-bold text-[#26282B] font-poppins leading-6">
            {ShipmentOrderInfo.currentShipmentStatus}
          </h2>
          <p className="text-sm text-[#72787F] font-poppins leading-5">
            {ProductShipmentDetails.womenExpireDress} :{" "}
            {ProductShipmentDetails.size} {Sizes.M}
          </p>
          <p className="text-sm text-[#72787F] font-poppins leading-5">
            {ProductShipmentDetails.exchangeAvailableTill}{" "}
            {ShipmentDates.returnAvailable}
          </p>
        </Box>

        <Box className="flex flex-col gap-4">
          <Box className="relative flex items-center gap-[16px] w-[136px] h-[52px]">
            <Box className="absolute left-[12px] top-0 bottom-0 flex items-center justify-center z-0"></Box>
            <img
              src={check_circle_outline}
              alt="circle_outline"
              className="w-[24px] h-[24px] rounded-full z-10"
            />
            <Box className="flex flex-col gap-1">
              <Box className="flex items-center justify-start">
                <Box className="rounded-md flex items-center justify-center">
                  <span className="text-sm text-[#475569] font-poppins">
                    {ShipmentDates.shippedDate}
                  </span>
                </Box>
              </Box>
              <Box className="flex items-center justify-start">
                <Box className="rounded-md flex items-center justify-center">
                  <span className="text-base text-[#26282B] font-poppins font-bold">
                    {ShipmentOrderInfo.currentShipmentStatus}
                  </span>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className="relative flex items-center gap-[16px] w-[144px] h-[52px]">
            <Box className="absolute left-[12px] top-[-56px] bottom-0 flex items-center justify-center z-0">
              <Box className="w-px h-[44%] border-l border-dotted border-[#72787F] p-6"></Box>
            </Box>
            <img
              src={progress_indicator_circle}
              alt="circle_indicator"
              className="w-[24px] h-[24px] rounded-full z-10"
            />
            <Box className="flex flex-col gap-1">
              <Box className="flex items-center justify-start">
                <Box className="rounded-md flex items-center justify-center">
                  <span className="text-sm text-[#475569] font-poppins">
                    {ShipmentDates.dispatchedDate}
                  </span>
                </Box>
              </Box>
              <Box className="flex items-center justify-start">
                <Box className="rounded-md flex items-center justify-center">
                  <span className="text-base text-[#26282B] font-poppins">
                    {ProductShipmentDetails.dispatched}
                  </span>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className="relative flex items-center gap-[16px] w-[195px] h-[52px]">
            <Box className="absolute left-[12px] top-[-56px] bottom-0 flex items-center justify-center z-0">
              <Box className="w-px h-[44%] border-l border-dotted border-[#72787F] py-6"></Box>
            </Box>
            <img
              src={location_pin}
              alt="location_pin"
              className="w-[24px] h-[24px] rounded-full z-10"
            />
            <Box className="flex flex-col gap-1">
              <Box className="flex items-center justify-start">
                <Box className="w-[67px] h-[21px]   rounded-md flex items-center justify-center">
                  <span className="text-sm text-[#475569] font-poppins">
                    {ProductShipmentDetails.yourPlace}
                  </span>
                </Box>
              </Box>
              <Box className="flex items-center justify-start">
                <Box className="rounded-md flex items-center justify-center">
                  <span className="text-base text-[#26282B] font-poppins">
                    {ShipmentDates.location}
                  </span>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ShipmentProductCard;
