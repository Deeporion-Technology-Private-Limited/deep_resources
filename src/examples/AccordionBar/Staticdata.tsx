import { AccordionTypes } from "@/components/Accordion/AccordionTypes";
import { SmallCursor } from "./Icon/Icon";

export  const staticData = [
    {
      Icon: <SmallCursor />,
      children: "By Brands",
      content: ["INDYA", "DressBerry", "H&M", "HERE&NOW", "Mango"],
      variant: AccordionTypes.Cursor,
      childClassName: "bg-[#EBE3E0] text-black rounded-md"
    },
    {
      Icon: <SmallCursor />,
      children: "Price Range",
      content: ["₹ 200 to ₹ 500", "₹ 400 to ₹ 900", "₹ 500 to ₹ 900", "₹ 600 to ₹ 1500", "₹ 1000 to ₹ 20x00"],
      variant: AccordionTypes.Cursor,
      childClassName: "bg-[#EBE3E0] text-black rounded-md"
    },
    {
      Icon: <SmallCursor />,
      children: "By Brands",
      content: ["INDYA", "DressBerry", "H&M", "HERE&NOW", "Mango"],
      variant: AccordionTypes.Cursor,
      childClassName: "bg-[#EBE3E0] text-black rounded-md"
    }
  ]