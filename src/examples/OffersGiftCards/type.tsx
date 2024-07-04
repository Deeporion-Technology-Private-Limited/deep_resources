interface NewOfferData {
  codeName: string;
  promoCode: string;
  startDate: string;
  endDate: string;
  client: string;
  promo: string;
  promoType: string;
  amountOff: string;
}

interface Category {
  name: string;
  items: { name: string; checked: boolean }[];
  checked: boolean;
  count: number;
}
