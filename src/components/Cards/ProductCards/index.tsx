import { Box } from "@/components";
import { cn } from "@/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps, forwardRef, useState } from "react";

const productCardStyles = cva(
  [
    "max-w-sm",
    "bg-white",
    "shadow-md",
    "overflow-hidden",
    "rounded-lg",
    "transition-transform",
  ],
  {
    variants: {
      size: {
        small: "w-64",
        medium: "w-86",
        large: "w-96",
      },
      hoverEffect: {
        true: "hover:shadow-xl",
        false: "",
      },
    },
    defaultVariants: {
      size: "medium",
      hoverEffect: true,
    },
  }
);

type ProductCardProps = ComponentProps<typeof Box> &
  VariantProps<typeof productCardStyles> & {
    imageSrc: string;
    title?: string;
    price?: string;
    sizes?: string[];
    additionalImages?: string[];
    isBestseller?: string;
    deliveryInfo?: string;
    imageClass?: string;
    desMenu?: boolean;
    favorite?:boolean;
  };

const ProductCard = forwardRef<HTMLDivElement, ProductCardProps>(
  (
    {
      imageSrc,
      title,
      price,
      sizes,
      additionalImages = [],
      isBestseller,
      desMenu,
      deliveryInfo,
      size,
      hoverEffect,
      className,
      imageClass,
      favorite,
      ...props
    },
    ref
  ) => {
    const [mainImageSrc, setMainImageSrc] = useState(imageSrc);
    const [show, setShow] = useState(false);

    return (
      <div
        ref={ref}
        className={cn(productCardStyles({ size, hoverEffect }), className)}
        {...props}
      >
        <Box className="relative">
          <img className={imageClass} src={mainImageSrc} alt={title} />
          {isBestseller && (
            <span className="absolute top-2 right-2 bg-[#eb428d] text-white text-xs px-2 py-1 rounded">
              {isBestseller}
            </span>
          )}
          {deliveryInfo && (
            <span className="absolute top-10 right-2 bg-teal-600 text-white text-xs px-2 py-1 rounded">
              {deliveryInfo}
            </span>
          )}
          {favorite && (
            <button
              className={`absolute bottom-2 right-2 ${show ? " text-red-500" : "text-gray-500"}`}
              onClick={() => {
                setShow(!show);
              }}
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </button>
          )
          }
        </Box>
        {desMenu && (
          <>
            <div className="p-4">
              <h2 className="text-lg font-semibold capitalize">{title}</h2>
              <p className="text-gray-600 capitalize">{price}</p>
              <div className="flex">
                <div className="flex mt-2">
                  {sizes?.map((size) => (
                    <span
                      key={size}
                      className="text-sm font-medium text-gray-600 bg-gray-200 rounded-full px-3 py-1 mr-2"
                    >
                      {size}
                    </span>
                  ))}
                </div>
                <button className=" text-black rounded-lg  hover:text-pink-600 text-sm Ca">
                  + More
                </button>
              </div>
            </div>
            <div className="flex p-4 gap-4">
              {additionalImages.map((img, index) => (
                <img
                  key={index}
                  className="w-10 h-10 object-cover rounded-full border-2 border-white shadow-lg -ml-2 first:ml-0 cursor-pointer"
                  src={img}
                  alt={`${title} ${index + 1}`}
                  onClick={() => setMainImageSrc(img)}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  }
);

export default ProductCard;
