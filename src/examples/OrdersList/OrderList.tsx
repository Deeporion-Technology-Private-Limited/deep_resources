import ProductOrders from "./ProductOrders";
import { ProductOrderList } from "./type";

export const OrderList = () => {
  return (
    <div
      className="flex justify-center"
      style={{
        width: "100%",
        padding: "24px 0",
      }}
    >
      <div className="flex flex-col w-full ">
        <h2 className="text-xl font-bold ">{ProductOrderList.title} </h2>
        <div>
          <div className="flex flex-col ">
            <div className="w-full ">
              <ProductOrders />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
