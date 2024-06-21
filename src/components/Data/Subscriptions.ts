interface ISubscription {
  planType: string;
  price: number;
  transactionPercent: number;
  planFor: string;
  status: string;
}

export const SubscriptionData: ISubscription[] = [
  {
    planType: "Yearly",
    price: 1000,
    transactionPercent: 10,
    planFor: "Premium Plan",
    status: "Active",
  },
  {
    planType: "Quarter",
    price: 100,
    transactionPercent: 5,
    planFor: "Medium Plan",
    status: "notActive",
  },
  {
    planType: "Monthly",
    price: 100,
    transactionPercent: 2,
    planFor: "Basic Plan",
    status: "notActive",
  },
];
