import React from "react";
import shipmentImage from "../../images/shipment_product.png";
import check_circle_outline from "../../images/check_circle_outline.svg";
import progress_indicator_circle from "../../images/progress_indicator_circle.svg";
import location_pin from "../../images/location_pin.svg";
import {
  ShipmentDates,
  ShipmentOrderInfo,
  Sizes,
} from "@/components/Data/ShipmentDetails";
import { ProductShipmentDetails } from "./type";

const ShipmentProductCard: React.FC = () => {
  return (
    <div className="flex flex-col gap-4  bg-white rounded-lg p-6">
      <img src={shipmentImage} alt="Product" className="rounded-[23px] " />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2 w-[490px] h-[82px]">
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
        </div>

        <div className="flex flex-col gap-4">
          <div className="relative flex items-center gap-[16px] w-[136px] h-[52px]">
            <div className="absolute left-[12px] top-0 bottom-0 flex items-center justify-center z-0"></div>
            <img
              src={check_circle_outline}
              alt="circle_outline"
              className="w-[24px] h-[24px] rounded-full z-10"
            />
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-start">
                <div className="rounded-md flex items-center justify-center">
                  <span className="text-sm text-[#475569] font-poppins">
                    {ShipmentDates.shippedDate}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-start">
                <div className="rounded-md flex items-center justify-center">
                  <span className="text-base text-[#26282B] font-poppins font-bold">
                    {ShipmentOrderInfo.currentShipmentStatus}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center gap-[16px] w-[144px] h-[52px]">
            <div className="absolute left-[12px] top-[-56px] bottom-0 flex items-center justify-center z-0">
              <div className="w-px h-[44%] border-l border-dotted border-[#72787F] p-6"></div>
            </div>
            <img
              src={progress_indicator_circle}
              alt="circle_indicator"
              className="w-[24px] h-[24px] rounded-full z-10"
            />
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-start">
                <div className="rounded-md flex items-center justify-center">
                  <span className="text-sm text-[#475569] font-poppins">
                    {ShipmentDates.dispatchedDate}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-start">
                <div className="rounded-md flex items-center justify-center">
                  <span className="text-base text-[#26282B] font-poppins">
                    {ProductShipmentDetails.dispatched}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center gap-[16px] w-[195px] h-[52px]">
            <div className="absolute left-[12px] top-[-56px] bottom-0 flex items-center justify-center z-0">
              <div className="w-px h-[44%] border-l border-dotted border-[#72787F] py-6"></div>
            </div>
            <img
              src={location_pin}
              alt="location_pin"
              className="w-[24px] h-[24px] rounded-full z-10"
            />
            <div className="flex flex-col gap-1">
              <div className="flex items-center justify-start">
                <div className="w-[67px] h-[21px]   rounded-md flex items-center justify-center">
                  <span className="text-sm text-[#475569] font-poppins">
                    {ProductShipmentDetails.yourPlace}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-start">
                <div className="rounded-md flex items-center justify-center">
                  <span className="text-base text-[#26282B] font-poppins">
                    {ShipmentDates.location}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentProductCard;