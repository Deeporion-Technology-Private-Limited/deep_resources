import detailsimage from "../../images/detailsimage.png";
import ShipmentAddressCard from "./ShipmentAddressCard";
import ShipmentProductCard from "./ShipmentProductCard";
import { ProductShipmentDetails } from "./type";

export const ShipmentDetails = () => {
  return (
    <div
      className="flex justify-center"
      style={{
        width: "100%",
        maxWidth: "1320px",
        height: "793px",
        marginTop: "116px",
        marginLeft: "60px",
      }}
    >
      <div className="flex flex-col w-full space-y-3">
        <h2 className="text-xl font-bold">{ProductShipmentDetails.title} </h2>
        <div>
          <div className="flex flex-col lg:flex-row gap-4">
            <div
              className="w-full lg:w-1/2 shadow-lg"
              style={{
                width: "538px",
                height: "737px",
                borderRadius: "8px",
                padding: "24px",
                gap: "16px",
              }}
            >
              <ShipmentProductCard />
            </div>
            <div
              className="w-full lg:w-1/2"
              style={{
                width: "762px",
                gap: "20px",
              }}
            >
              <ShipmentAddressCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
