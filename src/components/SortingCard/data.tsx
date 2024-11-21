export interface IData {
  id: number;
  imgSrc: string;
  label: string;
  products?: IProductItems[];
}

export interface IBreadCrumbsType {
  text: string | undefined;
  iconUrl?: string;
  separatorIconUrl?: string;
  href?: string;
}

export const breadCrumbsData: IBreadCrumbsType[] = [
  { text: "Home" },
  { text: "Women" },
];

export const optionsArray: string[] = [
  "Recommended",
  "Popularity",
  "Price: Low-to-High",
  "Price: High-to-Low",
  "What's New",
  "Customer Rating",
  "Better Discount",
];

export const chipsArray: string[] = [
  "Summers",
  "Winters",
  "Autumn",
  "Monsooon",
];

interface IProductItems {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export const Data: IData[] = [
  {
    id: 1,
    imgSrc:
      "https://www.pinklay.com/cdn/shop/files/OceanModalMaxiDress_1_800x.jpg?v=1714392157",
    label: "New Arrivals",
    
  },
  {
    id: 2,
    imgSrc: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
    label: "Best Sellers",
    
  },
  {
    id: 3,
    imgSrc:
      "https://www.pinklay.com/cdn/shop/files/RumiIndigoModalMaxiDress_4_1800x1800.jpg?v=1706680309",
    label: "Kaftans",
    
  },
  {
    id: 4,
    imgSrc:
      "https://www.pinklay.com/cdn/shop/files/BonjourMaxiDress-Pinklay_1_1800x1800.jpg?v=1684936858",
    label: "Co-ords",
    
  },
  {
    id: 5,
    imgSrc:
      "https://www.pinklay.com/cdn/shop/files/LoverBlackPolkaMaxiDress_1_1800x1800.jpg?v=1701687120",
    label: "Kurtas",
    
  },
  {
    id: 6,
    imgSrc:
      "https://www.pinklay.com/cdn/shop/files/GaiaModalMaxiDress_4_800x.jpg?v=1712066219",
    label: "Robes",
    
  },
  {
    id: 7,
    imgSrc: "https://images.loox.io/uploads/2024/6/3/T92rV66DH.jpg",
    label: "Pajama sets",
   
  },
];
