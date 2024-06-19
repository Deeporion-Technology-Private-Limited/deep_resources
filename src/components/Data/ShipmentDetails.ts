// Define an interface for the sizes object
interface ISizes {
  XS: string;
  S: string;
  M: string;
  L: string;
  XL: string;
  XXL: string;
}

//Define the interface for the Shipment dates
interface IShipmentDates {
  shippedDate: string;
  dispatchedDate: string;
  returnAvailable: string;
  location: string;
}

//Define the interface for the delivery addtress
interface IDeliveryAddress {
  customerName: string;
  phone: string;
  address: string;
  pincode: number;
}

//Define the interface for the shipment status
interface IshipmentStatus {
  pending: string;
  processing: string;
  outOfDelivery: string;
  shipped: string;
  cancelled: string;
  returned: string;
  failed: string;
}

//Define the interface for the shipment information
interface IShipmentOrderInfo {
  logisticsCompany: string;
  takingId: string;
  shipmentId: string;
  currentShipmentStatus: string;
  shipmentCountry: string;
  shipmentFrom: string;
  shipmentTo: string;
  currentLocation: string;
  distanceLeft: number;
  lastStop: number;
  timeDuration: string;
}

//Define the interface for the time duration
interface ITimeDuration {
  year: string;
  month: string;
  day: string;
  hour: string;
  minute: string;
  second: string;
}

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

export const ShipmentStatus: IshipmentStatus = {
  pending: "Pending",
  processing: "Processing",
  outOfDelivery: "Out for Delivery",
  shipped: "Shipped",
  cancelled: "Cancelled",
  returned: "Returned",
  failed: "Failed",
};

export const TimeDuration: ITimeDuration = {
  year: "year",
  month: "month",
  day: "day",
  hour: "hour",
  minute: "minute",
  second: "second",
};

export const ShipmentOrderInfo: IShipmentOrderInfo = {
  logisticsCompany: "United Parcel Service",
  takingId: "2X8888210546700",
  shipmentId: "2241-83KG",
  currentShipmentStatus: ShipmentStatus.shipped,
  shipmentCountry: "India",
  shipmentFrom: "Delhi",
  shipmentTo: "Bangalore",
  currentLocation: "bvk Iyengar Street",
  distanceLeft: 200,
  lastStop: 4,
  timeDuration: TimeDuration.hour,
};

export const ShipmentDetails = {
  ShipmentDates: ShipmentDates,
  DeliveryAddress: DeliveryAddress,
  ShipmentOrderInfo: ShipmentOrderInfo,
};
