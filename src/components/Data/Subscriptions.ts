export default interface ISubscription {
  planType: string;
  price: number;
  transactionPercent: number;
  planFor: string;
  status: string;
}

interface ISubscriptionTabledata {
  header: string[];
  data: string[][];
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

export const SubscriptionTableData = [
  {
    amount: "$1,080.00",
    typeOfPlan: "Professional Plan",
    paymentDate: "Apr 14, 2022",
    cardUsed: "**** 8239",
    details: "See Details",
  },
  {
    amount: "$1,080.00",
    typeOfPlan: "Professional Plan",
    paymentDate: "Apr 14, 2022",
    cardUsed: "**** 8239",
    details: "See Details",
  },
  {
    amount: "$1,080.00",
    typeOfPlan: "Professional Plan",
    paymentDate: "Apr 14, 2022",
    cardUsed: "**** 8239",
    details: "See Details",
  },
  {
    amount: "$1,080.00",
    typeOfPlan: "Professional Plan",
    paymentDate: "Apr 14, 2022",
    cardUsed: "**** 8239",
    details: "See Details",
  },
];
