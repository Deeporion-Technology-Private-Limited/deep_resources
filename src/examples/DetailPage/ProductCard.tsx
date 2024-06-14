import { Button, IconButton } from "@/components";
import React from "react";
import bag from "../../images/bag.png";
import like from "../../images/like.png";
import checked from "../../images/checked.jpg";
import { Product } from "./type";

interface ProductData {
  brand: string;
  name: string;
  rating: number;
  price: number;
  discount: string;
  isTaxInclusive: boolean;
  sizes: string[];
  selectedSize: string;
  image: string;
  description: string;
}

const ProductCard: React.FC<{ data: ProductData }> = ({ data }) => {
  return (
    <div className="flex flex-col gap-5">
      <div
        className="border rounded-lg p-5 w-80 font-sans flex flex-col gap-5"
        style={{ width: "614px", height: "431px" }}
      >
        <h2 className="text-2xl font-bold">{data.brand}</h2>
        <div className="flex items-center">
          <p className="text-[#26282B] w-[360px] h-auto max-h-[30px] overflow-hidden">
            {data.name}
          </p>
          <span className="text-lg text-gray-600 w-[21px] h-auto">
            {data.rating}
          </span>
          <div className="ml-2 text-yellow-500">
            <span>⭐️⭐️⭐️⭐️☆</span>
          </div>
        </div>
        <div className="flex items-center text-xl">
          <span className="font-poppins text-[#3F271E] text-base font-semibold">
            ₹ {data.price}
          </span>
          <span className="text-[#3F271E] ml-3 inline-block text-right font-medium text-xs leading-normal font-poppins">
            {data.discount}
          </span>
        </div>
        {data.isTaxInclusive && (
          <p className="text-gray-500 text-xs font-poppins mt-5 mb-0">
            {Product.Taxes}
          </p>
        )}
        <div className="border-t border-dotted border-gray-600"></div>
        <div>
          <span className="block mb-2 w-74 h-21 text-gray-600">
            {Product.Size}
          </span>
          <div className="flex flex-wrap p-1">
            {data.sizes.map((size) => (
              <Button
                key={size}
                className={`flex justify-center items-center gap-2 flex-[1_0_0%] self-stretch border rounded-lg px-3 py-4 m-1 ${
                  size === data.selectedSize
                    ? "bg-gray-200 border-gray-400"
                    : "bg-white border-gray-300"
                } hover:bg-gray-100 text-gray-700`}
              >
                {size}
              </Button>
            ))}
          </div>
        </div>
        <div className="flex w-full h-14 p-4 justify-center items-center gap-2 flex-grow">
          <Button
            className="flex-1 py-2 rounded-lg mr-2 flex justify-center items-center gap-2"
            style={{
              background: "linear-gradient(to right, #BFA59A, #3F271E)",
            }}
          >
            <img src={bag} alt="Bag" className="h-6 w-6 inline-block" />
            <p className="text-white text-base font-semibold inline-block ml-2">
              {Product.AddToBag}
            </p>
          </Button>

          <Button className="flex-1 bg-gray-200 py-2 rounded-lg text-gray-700 font-semibold text-base font-poppins flex justify-center items-center gap-2">
            <img src={like} alt="Like" className="h-6 w-6 inline-block" />
            <p className="text-[#72787F] text-base font-semibold inline-block ml-2">
              {Product.Wishlist}
            </p>
          </Button>
        </div>
      </div>
      <div
        className="border rounded-lg p-5 w-80 font-sans flex items-center justify-between"
        style={{ width: "614px", height: "56px" }}
      >
        <p className="text-gray-800 font-medium">
          <IconButton iconUrl={checked}></IconButton>
        </p>
        <p className="text-[#111827] font-medium">{data.description}</p>
        <p className="text-[#3F271E] font-medium">
          <IconButton>{Product.Change}</IconButton>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
