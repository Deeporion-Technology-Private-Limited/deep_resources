export interface ISubscription {
    planType: string;
    price: number;
    transactionPercent: number;
    planFor: string;
    status: string;
}
export interface IPaymentHistory {
    amount: string;
    typeOfPlan: string;
    paymentDate: string;
    cardUsed: string;
    details: string;
}
export declare const SubscriptionData: ISubscription[];
export declare const PaymentHistory: IPaymentHistory[];
export declare const PaymentHistoryFormatted: {
    amount: string;
    typeOfPlan: string;
    paymentDate: string;
    cardUsed: string;
    details: string;
}[];
