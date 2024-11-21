export const SmallCursor = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#9EA4AA"
    >
      <path
        d="M8.70623 11.4137L11.2962 14.0037C11.6862 14.3937 12.3162 14.3937 12.7062 14.0037L15.2962 11.4137C15.9262 10.7837 15.4762 9.70374 14.5862 9.70374H9.40623C8.51623 9.70374 8.07623 10.7837 8.70623 11.4137Z"
        fill="#9EA4AA"
      />
    </svg>
  );
};

export const staticData = [
  {
    Icon: <SmallCursor />,
    children: "By Categories",
    content: ["Travel Essentials", "Kaftans", "Dressses", "Tops & Shirts"],
    childClassName:
      "bg-[#EBE3E0] text-black shadow rounded-md h-[10rem] overflow-x-hidden",
  },

  {
    Icon: <SmallCursor />,
    children: "By Size",
    content: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    childClassName:
      "bg-[#EBE3E0] text-black shadow rounded-md h-[10rem] overflow-x-hidden",
  },

  {
    Icon: <SmallCursor />,
    children: "By Brands",
    content: ["Athena", "Mango", "Zara", "Gucci"],
    more: "+56",
    isMore: true,
    childClassName: "bg-[#EBE3E0] text-black shadow rounded-md",
  },

  {
    Icon: <SmallCursor />,
    children: "By Color",
    content: ["Black", "Blue", "Green", "Pink", "Red", "White"],
    childClassName:
      "bg-[#EBE3E0] text-black shadow rounded-md h-[10rem] overflow-x-hidden",
  },

  {
    Icon: <SmallCursor />,
    children: "By Price",
    content: [
      "₹ 200 to ₹ 500",
      "₹ 400 to ₹ 900",
      "₹ 500 to ₹ 900",
      "₹ 600 to ₹ 1500",
      "₹ 1000 to ₹ 2000",
    ],
    childClassName:
      "bg-[#EBE3E0] text-black shadow rounded-md h-[10rem] overflow-x-hidden ",
  },
];
