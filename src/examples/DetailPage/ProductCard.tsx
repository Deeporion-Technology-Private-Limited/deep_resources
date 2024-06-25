import { Button, IconButton, Input } from "@/components";
import React from "react";
import bag from "../../images/bag.png";
import like from "../../images/like.png";
import checked from "../../images/checked.jpg";
import delivery from "../../images/delivery.png";
import returnimage from "../../images/returnimage.png";
import payment from "../../images/payment.png";
import { buttons, product, ratingDetails } from "./ProductDetailsData";
import { InputType, InputVariant } from "@/components/Input/type";
import Accordion from "@/components/Accordion";
import { UpCursor } from "@/components/Accordion/Icon/Icon";
import { AccordionTypes } from "@/components/Accordion/AccordionTypes";
import ReviewList from "./ReviewList";
import Ratingcard from "./RatingCard";

const ProductCard: React.FC<{ data: ProductData }> = ({ data }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="border rounded-lg p-5 font-sans flex flex-col gap-5 w-full">
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
            {product.Taxes}
          </p>
        )}
        <div className="border-t border-dotted border-gray-600"></div>
        <div>
          <span className="block mb-2 w-74 h-21 text-gray-600">
            {product.Size}
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
              {product.AddToBag}
            </p>
          </Button>
          <Button className="flex-1 bg-gray-200 py-2 rounded-lg text-gray-700 font-semibold text-base font-poppins flex justify-center items-center gap-2">
            <img src={like} alt="Like" className="h-6 w-6 inline-block" />
            <p className="text-[#72787F] text-base font-semibold inline-block ml-2">
              {product.Wishlist}
            </p>
          </Button>
        </div>
      </div>
      <div className="border rounded-lg p-5 w-full font-sans flex items-center justify-between">
        <p className="text-gray-800 font-medium">
          <IconButton iconUrl={checked}></IconButton>
        </p>
        <p className="text-[#111827] font-medium">{data.description}</p>
        <p className="text-[#3F271E] font-medium">
          <IconButton>{product.Change}</IconButton>
        </p>
      </div>
      <div className="border rounded-lg p-5 w-full font-sans flex flex-col items-center justify-between">
        <div className="flex items-center justify-between w-full">
          <p className="text-gray-800 font-medium">
            <img src={delivery} alt="Bag" className="h-6 w-6 inline-block" />
          </p>
          <p className="text-[#111827] font-normal ml-2 w-full max-w-[550px] h-auto">
            {data.arrival}
          </p>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="text-gray-800 font-medium">
            <img src={payment} alt="Bag" className="h-6 w-6 inline-block" />
          </p>
          <p className="text-[#111827] font-normal ml-2 w-full max-w-[550px] h-auto">
            {data.paymentMethod}
          </p>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="text-gray-800 font-medium">
            <img src={returnimage} alt="Bag" className="h-6 w-6 inline-block" />
          </p>
          <p className="text-[#111827] font-normal ml-2 w-full max-w-[550px] h-auto">
            {data.returnPolicy}
          </p>
        </div>
      </div>
      <div className="border rounded-lg p-5 w-full font-sans flex flex-col items-center justify-between">
        <div className="flex items-center justify-between w-full mb-4">
          <p className="text-[#26282B] font-medium flex-shrink-0">
            {product.ProductCode}
          </p>
          <p className="text-[#111827] font-normal ml-2 w-full max-w-[550px] h-auto">
            {data.productCode}
          </p>
        </div>
        <div className="flex flex-col items-start w-full mb-4">
          <p className="text-gray-800 font-medium mb-2">
            {product.ProductDetails}
          </p>
          <p className="text-[#111827] font-normal w-full max-w-[550px]">
            {data.productDetails}
          </p>
        </div>
        <div className="flex flex-col items-start w-full mb-4">
          <p className="text-gray-800 font-medium mb-2">{product.SizeFit}</p>
          <p className="text-[#111827] font-normal w-full max-w-[550px]">
            {data.sizeFit}
          </p>
        </div>
        <div className="flex flex-col items-start w-full mb-4">
          <p className="text-gray-800 font-medium mb-2">{product.Material}</p>
          <p className="text-[#111827] font-normal w-full max-w-[550px]">
            {data.materialCare}
          </p>
        </div>
        <div className="flex items-center justify-between w-full mb-4">
          <p className="text-gray-800 font-medium flex-shrink-0">
            {product.ProductSpec}
          </p>
        </div>
        <div className="flex items-center justify-between w-full mb-4">
          <p className="text-[#111827] font-normal ml-2 w-full max-w-[550px] h-auto">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <label className="block text-[#72787F]">Fabric</label>
                <Input
                  placeholder="Insert text here"
                  type={InputType.Text}
                  variant={InputVariant.Standard}
                  value=""
                />
              </div>
              <div className="col-span-1">
                <label className="block text-[#72787F]">Fabric type</label>
                <Input
                  placeholder="Insert text here"
                  type={InputType.Text}
                  variant={InputVariant.Standard}
                  value=""
                />
              </div>
              <div className="col-span-1">
                <label className="block text-[#72787F]">Hemline</label>
                <Input
                  placeholder="Insert text here"
                  type={InputType.Text}
                  variant={InputVariant.Standard}
                  value=""
                />
              </div>
              <div className="col-span-1">
                <label className="block text-[#72787F]">Knit or Woven</label>
                <Input
                  placeholder="Insert text here"
                  type={InputType.Text}
                  variant={InputVariant.Standard}
                  value=""
                />
              </div>
              <div className="col-span-1">
                <label className="block text-[#72787F]">Length</label>
                <Input
                  placeholder="Insert text here"
                  type={InputType.Text}
                  variant={InputVariant.Standard}
                  value=""
                />
              </div>
              <div className="col-span-1">
                <label className="block text-[#72787F]">Main Trend</label>
                <Input
                  placeholder="Insert text here"
                  type={InputType.Text}
                  variant={InputVariant.Standard}
                  value=""
                />
              </div>
              <div className="col-span-1">
                <label className="block text-[#72787F]">Neck</label>
                <Input
                  placeholder="Insert text here"
                  type={InputType.Text}
                  variant={InputVariant.Standard}
                  value=""
                />
              </div>
              <div className="col-span-1">
                <label className="block text-[#72787F]">Occasion</label>
                <Input
                  placeholder="Insert text here"
                  type={InputType.Text}
                  variant={InputVariant.Standard}
                  value=""
                />
              </div>
            </div>
          </p>
        </div>
        <div className="flex items-center justify-between w-full mb-4 border-none">
          <p className="text-[#7D5D4F] font-medium flex items-center gap-2 border-none">
            <Accordion
              Icon={<UpCursor />}
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
              variant={AccordionTypes.Cursor}
            >
              {buttons.viewMore}
            </Accordion>
          </p>
        </div>
      </div>
      <div className="border rounded-lg p-5 w-full font-sans flex flex-col items-center justify-between">
        <div className="flex items-center justify-between w-full">
          <p className="text-[#26282B] font-semibold text-base ml-2 w-full max-w-[550px] h-auto">
            {data.reviews}
          </p>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="text-[#26282B] font-semibold text-base ml-2 w-full max-w-[550px] h-auto">
            <Ratingcard ratingDetails={ratingDetails} />
          </p>
        </div>
        <div className="flex items-center justify-between w-full">
          <p className="text-[#26282B] font-semibold text-base ml-2 w-full max-w-[550px] h-auto">
            <ReviewList />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
