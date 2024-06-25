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

export const SubscriptionTableData: ISubscriptionTabledata[] = [
  {
    header: ["Amount", "Type of Plan", "Payment Date", "Card used to pay"],

    data: [
      [
        "$1,080.00",
        "Professional Plan",
        "Apr 14, 2022",
        "**** 8239",
        "See Details",
      ],
      [
        "$1,080.00",
        "Professional Plan",
        "Apr 14, 2022",
        "**** 8239",
        "See Details",
      ],
      [
        "$1,080.00",
        "Professional Plan",
        "Apr 14, 2022",
        "**** 8239",
        "See Details",
      ],
      [
        "$1,080.00",
        "Professional Plan",
        "Apr 14, 2022",
        "**** 8239",
        "See Details ",
      ],
    ],
  },
];
