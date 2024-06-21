import { Button } from "@/components/Button/DefaultButton/index";
import { ProductOrderList } from "./type";
import {
  IShipmentOrderInfo,
  OrderListDetails,
  shipmentStatusColors,
} from "@/components/Data/ShipmentDetails";
import { ButtonSize, ButtonVariant } from "@/components/Button/type";

const ProductOrders: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 bg-white rounded-lg w-full">
      {OrderListDetails.map((order: IShipmentOrderInfo) => (
        <div
          key={order.orderId}
          className="flex flex-col gap-4 shadow-lg w-full"
          style={{ padding: "15px" }}
        >
          <div className="flex items-center">
            <span
              className="text-sm font-bold text-brown-primary"
              style={{
                fontFamily: "Poppins",
                fontSize: "14px",
              }}
            >
              {ProductOrderList.estimatedDeliveryBy} :{" "}
              {order.estimatedDeliveryDate}
            </span>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex flex-wrap items-center gap-8 w-full">
              <div className="flex flex-1 min-w-[150px]">
                <div>
                  <div className="text-base font-semibold leading-6 text-gray-800">
                    {ProductOrderList.status}
                  </div>

                  <div
                    className="text-base font-semibold leading-6"
                    style={{
                      color: shipmentStatusColors[order.currentShipmentStatus],
                    }}
                  >
                    {order.currentShipmentStatus}
                  </div>
                </div>
              </div>
              <div className="flex flex-1 min-w-[150px]">
                <div>
                  <div className="text-base font-semibold leading-6 text-gray-800">
                    {ProductOrderList.orderId}
                  </div>
                  <div className="text-base font-normal leading-6 text-gray-500">
                    {order.orderId}
                  </div>
                </div>
              </div>
              <div className="flex flex-1 min-w-[150px]">
                <div>
                  <div className="text-base font-semibold leading-6 text-gray-800">
                    {ProductOrderList.quantity}
                  </div>
                  <div className="text-base font-normal leading-6 text-gray-500">
                    {Number(order.quantity)}
                  </div>
                </div>
              </div>
              <div className="flex flex-1 min-w-[150px]">
                <div>
                  <div className="text-base  font-semibold leading-6 text-gray-800">
                    {ProductOrderList.total}
                  </div>
                  <div className="text-base font-normal leading-6 text-gray-500">
                    ₹ {Number(order.quantity) * Number(order.price)}
                  </div>
                </div>
              </div>
              <div className="flex flex-1 min-w-[150px]">
                <div>
                  <div className="text-base font-normal leading-6 text-gray-800">
                    <Button
                      hover
                      size={ButtonSize.Medium}
                      variant={ButtonVariant.DefaultPrimary}
                    >
                      view details
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col gap-1">
              <div className="flex gap-4">
                <div>
                  <img
                    src={order.imageURL}
                    alt="user"
                    className="w-[70px] h-[90px] rounded-[8px]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center">
                    <span
                      className="text-sm font-semibold"
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: 600,
                        fontSize: "14px",
                        color: "#26282B",
                      }}
                    >
                      {order.productName}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span
                      className="text-base"
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: "16px",
                        color: "#26282B",
                      }}
                    >
                      ₹ {order.price}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span
                      className="text-sm"
                      style={{
                        fontFamily: "Poppins",
                        fontWeight: 400,
                        fontSize: "14px",
                        color: "#72787F",
                      }}
                    >
                      {order.productDescription}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductOrders;
