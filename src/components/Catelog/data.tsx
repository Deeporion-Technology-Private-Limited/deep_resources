export interface subcomponent {
  id?: number;
  type?: string;
}
export interface category {
  id?: number;
  type?: string;
  subcomponent?: subcomponent[];
}
export interface user {
  id?: number;
  type?: string;
  category?: category[];
}
export interface Items {
  data: user[] | undefined | any ;
  handleClick?: (user: Object) => void;
  userType?: string;
}
export const arr: user[] = [
  {
    id: 1,
    type: "man",
    category: [
      {
        id: 1,
        type: "Clothing",
        subcomponent: [
          { id: 1, type: "t-shirt" },
          { id: 2, type: "jeans" },
        ],
      },
      {
        id: 2,
        type: "footewear",
        subcomponent: [{ id: 1, type: "shoes" }],
      },
    ],
  },
  {
    id: 2,
    type: "Woman",
    category: [
      {
        id: 1,
        type: "Home & Living",
        subcomponent: [
          { id: 1, type: "Tops & Shirts" },
          { id: 2, type: "Kaftan" },
        ],
      },
      {
        id: 2,
        type: "Jewelry",
        subcomponent: [{ id: 1, type: "shoes" }],
      },
    ],
  },
];