import { CoreCustomerProps, listItem } from "@/components/types";

const listitem1: listItem[] = [
  {
    name: "Kurtas & Suits",
    href: "",
  },
  {
    name: "Kurtis, Tunics & Tops",
    href: "",
  },
  {
    name: "Sarees",
    href: "",
  },
  {
    name: "Leggings & Salwars",
    href: "",
  },
  {
    name: "Skirts & Palazzos",
    href: "",
  },
  {
    name: "Dress Materials",
    href: "",
  },
  {
    name: "Dupattas & Shawls",
    href: "",
  },
];

const listitem2: listItem[] = [
  {
    name: "Dresses",
    href: "",
  },
  {
    name: "Tops & Tshirts",
    href: "",
  },
  {
    name: "Jeans",
    href: "",
  },
  {
    name: "Trousers & Capris",
    href: "",
  },
  {
    name: "Co-ords",
    href: "",
  },
  {
    name: "Jackets & Coats",
    href: "",
  },
  {
    name: "Sweaters & Sweatshirts",
    href: "",
  },
];

const listitem3: listItem[] = [
  {
    name: "Flats",
    href: "",
  },
  {
    name: "Casual Shoes",
    href: "",
  },
  {
    name: "Heels",
    href: "",
  },
  {
    name: "Boots",
    href: "",
  },
  {
    name: "Sports Shoes & Floaters",
    href: "",
  },
];

const listitem4: listItem[] = [
  {
    name: "Night suits",
    href: "",
  },
  {
    name: "Swimwear",
    href: "",
  },
  {
    name: "Thermals",
    href: "",
  },
];

export const TopItem: CoreCustomerProps[] = [
  {
    className: "pl-[0px]",
    heading: {
      title: "Indian & Fusion wears",
      titleColor: "#3F271E",
      titleStyle: "text-[12px]",
    },
    list: listitem1,
    innerLiClass: "mb-[5px]",
  },
  {
    className: "pl-[0px]",
    heading: {
      title: "Western wears",
      titleColor: "#3F271E",
      titleStyle: "text-[12px]",
    },
    list: listitem2,
    innerLiClass: "mb-[5px]",
  },
  {
    className: "pl-[0px]",
    heading: {
      title: "Footwears",
      titleColor: "#3F271E",
      titleStyle: "text-[12px]",
    },
    list: listitem3,
    innerLiClass: "mb-[5px]",
  },
  {
    className: "pl-[0px]",
    heading: {
      title: "Sleepwear & Loungewear",
      titleColor: "#3F271E",
      titleStyle: "text-[12px]",
    },
    list: listitem4,
    innerLiClass: "mb-[5px]",
  },
];

const genderList1: listItem[]  = [
  {
    name: "All Boys",
    href: "",
  },
  {
    name: "Shirts",
    href: "",
  },
  {
    name: "Kurtas",
    href: "",
  },
  {
    name: "Pants & Shorts",
    href: "",
  },
  {
    name: "Indian Wear",
    href: "",
  },
  {
    name: "Resort Wear",
    href: "",
  },
];

const genderList3: listItem[]  = [
    {
      name: "All Baby",
      href: "",
    },
    {
      name: "Daily Wear",
      href: "",
    },
    {
      name: "Indian Wear",
      href: "",
    },
    {
      name: "Winter Wear",
      href: "",
    },
    {
      name: "Vacation Wear",
      href: "",
    },
  ];

  const genderList2: listItem[] = [
    {
      name: "All Girls",
      href: "",
    },
    {
      name: "Dresses",
      href: "",
    },
    {
      name: "Indian Wear",
      href: "",
    },
    {
      name: "Pajama Sets",
      href: "",
    },
    {
      name: "Resort wear",
      href: "",
    },
    {
      name: "Pyjama sets",
      href: "",
    },
  ];

export const GenderItem: CoreCustomerProps[] = [
  {
    className: "pl-[0px] min-w-[135px]",
    heading: {
      title: "Girs",
      titleColor: "#3F271E",
    },
    list: genderList1,
    innerLiClass: "mb-[5px] text-[14px]",
  },
  {
    className: "pl-[0px] min-w-[135px]",
    heading: {
      title: "Boys",
      titleColor: "#3F271E",
    },
    list: genderList2,
    innerLiClass: "mb-[5px] text-[14px]",
  },
  {
    className: "pl-[0px] min-w-[135px]",
    heading: {
      title: "Baby",
      titleColor: "#3F271E",
    },
    list: genderList3,
    innerLiClass: "mb-[5px] text-[14px]",
  },
];

