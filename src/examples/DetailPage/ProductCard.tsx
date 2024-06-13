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
      <p className="text-gray-700">{data.name}</p>
      <div className="flex items-center">
        <span className="text-lg font-semibold">{data.rating}</span>
        <div className="ml-2 text-yellow-500">
          <span>⭐️⭐️⭐️⭐️☆</span>
        </div>
      </div>
      <div className="flex items-center text-xl">
        <span className="font-bold">₹ {data.price}</span>
        <span className="text-#3F271E ml-3">{data.discount}</span>
      </div>
      {data.isTaxInclusive && (
        <p className="text-neutral-gray500-secondarytext text-xs font-poppins">
          Inclusive all Taxes
        </p>
      )}
      <div>
        <span className="block mb-2">Select Size</span>
        <div className="flex flex-wrap">
          {data.sizes.map((size) => (
            <button
              key={size}
              className={`border rounded-lg px-3 py-1 m-1 ${size === data.selectedSize ? "bg-gray-200 border-gray-400" : "bg-white border-gray-300"} hover:bg-gray-100`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <div className="flex w-full">
        <button className="flex-1 bg-black text-white py-2 rounded-lg mr-2">
          Add to Bag
        </button>
        <button className="flex-1 bg-gray-200 py-2 rounded-lg">Wishlist</button>
      </div>
    </div>
  );
};

export default ProductCard;
