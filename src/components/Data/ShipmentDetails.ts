import product1 from "../../images/shipment_product.png";
import product2 from "../../images/detailsimage.png";
import { ISizes,IShipmentDates,IDeliveryAddress,IshipmentStatusColors,ITimeDuration,IShipmentOrderInfo, } from "../types";


// Define the sizes object
export const Sizes: ISizes = {
  XS: "XS",
  S: "S",
  M: "M",
  L: "L",
  XL: "XL",
  XXL: "XXL",
};

// Define the shipment dates object
export const ShipmentDates: IShipmentDates = {
  shippedDate: "24-03-2024",
  dispatchedDate: "28-03-2024",
  returnAvailable: "1 May",
  location: "San Franisco, CA",
};

// Define the delivery address object
export const DeliveryAddress: IDeliveryAddress = {
  customerName: "Tessa Rain",
  phone: "1234567898",
  address: "19f Abhinay Theatre Complex, bvk Iyengar Street",
  pincode: 560009,
};

// Define the shipment status object
export const ShipmentStatus = {
  pending: "Pending",
  processing: "Processing",
  confirmed: "Confirmed",
  outOfDelivery: "OutOfDelivery",
  shipped: "Shipped",
  cancelled: "Cancelled",
  returned: "Returned",
  failed: "Failed",
} as const;

// Define the shipment status colors object
export const shipmentStatusColors: IshipmentStatusColors = {
  Pending: "#FFA500",
  Processing: "#0000FF",
  Confirmed: "#059669",
  OutOfDelivery: "#FFD700",
  Shipped: "#008000",
  Cancelled: "#FF0000",
  Returned: "#800080",
  Failed: "#8B0000",
};

// Define the time duration object
export const TimeDuration: ITimeDuration = {
  year: "year",
  month: "month",
  day: "day",
  hour: "hour",
  minute: "minute",
  second: "second",
  justNow: "just now",
};

// Define the shipment order info object
export const ShipmentOrderInfo: IShipmentOrderInfo = {
  imageURL: product1,
  logisticsCompany: "United Parcel Service",
  takingId: "2X8888210546700",
  orderId: "2241-83KG",
  currentShipmentStatus: ShipmentStatus.shipped,
  shipmentCountry: "India",
  shipmentFrom: "Delhi",
  shipmentTo: "Bangalore",
  currentLocation: "bvk Iyengar Street",
  distanceLeft: 200,
  lastStop: 4,
  timeDuration: TimeDuration.hour,
};

// Define the shipment details object
export const ShipmentDetails = {
  ShipmentDates: ShipmentDates,
  DeliveryAddress: DeliveryAddress,
  ShipmentOrderInfo: ShipmentOrderInfo,
};

// Define the order list details array
export const OrderListDetails: IShipmentOrderInfo[] = [
  {
    imageURL: product1,
    productName: "Mango",
    productDescription: "Woman Expire dress",
    price: 1000,
    quantity: 1,
    orderId: "2241-84KG",
    currentShipmentStatus: ShipmentStatus.confirmed,
    estimatedDeliveryDate: "18 Aug, 2024",
  },
  {
    imageURL: product2,
    productName: "Apple",
    productDescription: "Woman Expire dress",
    price: 2000,
    quantity: 2,
    orderId: "2241-85KG",
    currentShipmentStatus: ShipmentStatus.pending,
    estimatedDeliveryDate: "18 Aug, 2025",
  },
];
