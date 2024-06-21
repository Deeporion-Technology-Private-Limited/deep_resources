import {
  DeliveryAddress,
  ShipmentOrderInfo,
  TimeDuration,
} from "@/components/Data/ShipmentDetails";
import compare_arrow from "../../images/compare_arrows.svg";
import refresh from "../../images/refresh.svg";
import { ProductShipmentDetails } from "./type";

function ShipmentAddressCard() {
  return (
    <div className="h-auto  rounded-lg space-y-5 bg-white">
      <div className="h-auto p-5 rounded-lg shadow-lg bg-white space-y-5">
        <div className="text-base font-bold leading-6 text-gray-800">
          {ProductShipmentDetails.deliveryaddress}
        </div>
        <div className="space-y-1">
          <div className=" text-base font-[400] leading-6 text-gray-800">
            {DeliveryAddress.customerName} : {DeliveryAddress.phone}
          </div>
          <div className="text-base  font-[500] leading-6 text-gray-800">
            {DeliveryAddress.address} - {DeliveryAddress.pincode}
          </div>
        </div>
      </div>

      <div className=" h-auto p-5 rounded-lg shadow-lg bg-white space-y-5">
        <div className="text-base font-bold leading-6 text-gray-800">
          {ProductShipmentDetails.shipmentMethod}
        </div>
        <div className="space-y-1">
          <div className="text-base font-normal leading-6 text-[#26282B]">
            {ProductShipmentDetails.logisticsCompany}:
            <span className="text-[#72787F]">
              {ShipmentOrderInfo.logisticsCompany}{" "}
            </span>
          </div>
          <div className="text-base font-normal leading-6 text-[#26282B]">
            {ProductShipmentDetails.takingId}:
            <span className="text-[#72787F]">
              {" "}
              {ShipmentOrderInfo.takingId}{" "}
            </span>
          </div>
        </div>
      </div>
      <div className="h-auto p-5 rounded-lg shadow-lg bg-white space-y-5">
        <div className="flex items-center mb-6">
          <div className="w-auto h-auto text-base font-bold leading-6 text-gray-800">
            {ProductShipmentDetails.orderId}
            {""} {ShipmentOrderInfo.orderId}
          </div>
          <div className="bg-[#EBE3E0] rounded-[26px] flex items-center justify-center mx-[10px] px-[12px] py-[6px]">
            <span className="text-sm font-semibold leading-[21px] text-right text-[#3F271E]">
              {ShipmentOrderInfo.currentShipmentStatus}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-[50px]">
          <div className="space-y-4">
            <div className="text-base font-normal leading-6 text-gray-500">
              {ProductShipmentDetails.from}
            </div>
            <div className="text-base font-semibold leading-6 text-gray-800">
              {ShipmentOrderInfo.shipmentFrom},{" "}
              {ShipmentOrderInfo.shipmentCountry}
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-base font-normal leading-6 text-gray-500">
              {ProductShipmentDetails.to}
            </div>
            <div className="text-base font-semibold leading-6 text-gray-800">
              {ShipmentOrderInfo.shipmentTo},{" "}
              {ShipmentOrderInfo.shipmentCountry}
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-base font-normal leading-6 text-gray-500">
              {ProductShipmentDetails.currentLocation}
            </div>
            <div className="text-base font-semibold leading-6 text-gray-800">
              {ShipmentOrderInfo.currentLocation}
            </div>
          </div>
          <div className=" space-y-4">
            <div className=" text-base font-normal leading-6 text-gray-500">
              {ProductShipmentDetails.kmsLeft}
            </div>
            <div className="text-base font-semibold leading-6 text-gray-800">
              {ShipmentOrderInfo.distanceLeft}
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-base font-normal leading-6 text-gray-500">
              {ProductShipmentDetails.lastStop}
            </div>
            <div className="text-base font-semibold leading-6 text-gray-800">
              {ShipmentOrderInfo.lastStop} {TimeDuration.hour}
              {(ShipmentOrderInfo.lastStop ?? 0) > 1 ? "s" : ""}
            </div>
          </div>
        </div>
      </div>

      <div className=" h-[65px] p-5 rounded-lg bg-white flex justify-between items-center space-x-16">
        <button
          className="w-[230px]  rounded-lg bg-[#EBE3E0] text-[#3F271E] text-base font-semibold flex items-center justify-center gap-[8px] px-[16px] py-[10px] hover:bg-gray-200"
          onClick={() => (window.location.href = "#")}
        >
          <img src={compare_arrow} alt="compare arrow" className="w-4 h-4" />
          <span>{ProductShipmentDetails.exchange} </span>
        </button>

        <button
          className="w-[230px] rounded-lg bg-[#EBE3E0] text-[#3F271E] text-base font-semibold flex items-center justify-center gap-[8px] px-[16px] py-[10px] hover:bg-gray-200"
          onClick={() => (window.location.href = "#")}
        >
          <img src={refresh} alt="refresh" className="w-4 h-4" />
          <span>{ProductShipmentDetails.return}</span>
        </button>

        <button
          className="w-[230px] rounded-lg bg-[#EBE3E0] text-[#3F271E] text-base font-semibold flex items-center justify-center gap-[8px] px-[16px] py-[10px] hover:bg-gray-200"
          onClick={() => (window.location.href = "#")}
        >
          <span>{ProductShipmentDetails.cancel} </span>
        </button>
      </div>
    </div>
  );
}

export default ShipmentAddressCard;
