interface ISizes {
    XS: string;
    S: string;
    M: string;
    L: string;
    XL: string;
    XXL: string;
}
interface IShipmentDates {
    shippedDate: string;
    dispatchedDate: string;
    returnAvailable: string;
    location: string;
}
interface IDeliveryAddress {
    customerName: string;
    phone: string;
    address: string;
    pincode: number;
}
type ShipmentStatus = 'Pending' | 'Processing' | 'Confirmed' | 'OutOfDelivery' | 'Shipped' | 'Cancelled' | 'Returned' | 'Failed';
export interface IshipmentStatusColors {
    Pending: string;
    Processing: string;
    Confirmed: string;
    OutOfDelivery: string;
    Shipped: string;
    Cancelled: string;
    Returned: string;
    Failed: string;
}
export interface IShipmentOrderInfo {
    imageURL: string;
    logisticsCompany?: string;
    productName?: string;
    productDescription?: string;
    price?: number;
    quantity?: number;
    takingId?: string;
    orderId: string;
    currentShipmentStatus: ShipmentStatus;
    shipmentCountry?: string;
    shipmentFrom?: string;
    shipmentTo?: string;
    currentLocation?: string;
    distanceLeft?: number;
    lastStop?: number;
    timeDuration?: string;
    estimatedDeliveryDate?: string;
}
interface ITimeDuration {
    year: string;
    month: string;
    day: string;
    hour: string;
    minute: string;
    second: string;
    justNow: string;
}
export declare const Sizes: ISizes;
export declare const ShipmentDates: IShipmentDates;
export declare const DeliveryAddress: IDeliveryAddress;
export declare const ShipmentStatus: {
    readonly pending: "Pending";
    readonly processing: "Processing";
    readonly confirmed: "Confirmed";
    readonly outOfDelivery: "OutOfDelivery";
    readonly shipped: "Shipped";
    readonly cancelled: "Cancelled";
    readonly returned: "Returned";
    readonly failed: "Failed";
};
export declare const shipmentStatusColors: IshipmentStatusColors;
export declare const TimeDuration: ITimeDuration;
export declare const ShipmentOrderInfo: IShipmentOrderInfo;
export declare const ShipmentDetails: {
    ShipmentDates: IShipmentDates;
    DeliveryAddress: IDeliveryAddress;
    ShipmentOrderInfo: IShipmentOrderInfo;
};
export declare const OrderListDetails: IShipmentOrderInfo[];
export {};
