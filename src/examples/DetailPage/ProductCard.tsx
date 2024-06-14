import React from "react";

interface ProductData {
  brand: string;
  name: string;
  rating: number;
  price: number;
  discount: string;
  isTaxInclusive: boolean;
  sizes: string[];
  selectedSize: string;
}

const ProductCard: React.FC<{ data: ProductData }> = ({ data }) => {
  return (
    <div
      className="border rounded-lg p-5 w-80 font-sans flex flex-col gap-5"
      style={{ width: "614px", height: "431px" }}
    >
      <h2 className="text-2xl font-bold">{data.brand}</h2>
      <div className="flex items-center">
        <p className="text-gray-800 w-[360px] h-auto max-h-[30px] overflow-hidden">
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
          Inclusive all Taxes
        </p>
      )}
      <div className="border-t border-dotted border-gray-600"></div>
      <div>
        <span className="block mb-2 w-74 h-21 text-gray-600">Select Size</span>
        <div className="flex flex-wrap">
          {data.sizes.map((size) => (
            <button
              key={size}
              className={`border rounded-lg px-3 py-1 m-1 ${size === data.selectedSize ? "bg-gray-200 border-gray-400" : "bg-white border-gray-300"} hover:bg-gray-100 text-gray-700`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className="flex w-full">
        <button className="flex-1 bg-[#3F271E] text-white py-2 rounded-lg mr-2">
          Add to Bag
        </button>
        <button className="flex-1 bg-gray-200 py-2 rounded-lg text-gray-700 font-semibold text-base font-poppins">
          Wishlist
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
