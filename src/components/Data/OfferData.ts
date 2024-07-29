
import { NewOfferData,Category } from "../types";
export const newOfferData: NewOfferData = {
    codeName: "Promo  Code Name",
    promoCode: "Promo Code",
    startDate: "Start Date",
    endDate: "End Date",
    client: "Max uses per client",
    promo: "Max uses per promo",
    promoType: "Promo Type",
    amountOff: "Amount Off",
  };
  
  export const categories: Category[] = [
    {
      name: "Women",
      items: [],
      checked: false,
      count: 0,
    },
    {
      name: "Clothing",
      items: [
        { name: "Dresses", checked: true },
        { name: "Kaftans", checked: false },
      ],
      checked: true,
      count: 12,
    },
    {
      name: "Men",
      items: [],
      checked: false,
      count: 0,
    },
    {
      name: "Kids",
      items: [],
      checked: false,
      count: 34,
    },
    {
      name: "House",
      items: [],
      checked: false,
      count: 56,
    },
  ];
  