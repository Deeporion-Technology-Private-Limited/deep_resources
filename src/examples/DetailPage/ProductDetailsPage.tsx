import detailsimage from "../../images/detailsimage.png";
import ProductCard from "../DetailPage/ProductCard";
import { FooterCart } from "../FooterCart";
import Cards from "../ShopingCards";

const ProductDetails = () => {
  const productData = {
    brand: "Mango",
    name: "Women Empire Dress",
    rating: 4.1,
    price: 3950,
    discount: "25% off",
    isTaxInclusive: true,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    selectedSize: "L",
    image: "path/to/image.jpg",
    description: "302014 (Tessa Rain )",
    icon: "path/to/icon.png",
    arrival: "Get it by Thu, 6 June",
    paymentMethod: "Cash on Delivery Available",
    returnPolicy: "Easy 14 days return and exchange available",
    productCode: "00123456",
    productDetails:
      "Navy Blue printed woven empire %S, has a V-neck, three-quarter sleeves, and flared hem",
    sizeFit: "Semi-Fit\nThe model (height 5'8\") is wearing a size S",
    materialCare: "Cotton Machine-wash",
    specification: "",
    reviews: "Reviews",
    ratingsDistribution: {
      5: 20,
      4: 10,
      3: 0,
      2: 1,
      1: 0,
    },
    averageRating: 4.5,
    totalReviews: 23,
  };

  return (
    <div>
      <div className="flex justify-center">
        <div className="flex space-x-12">
          <img
            src={detailsimage}
            alt="Product"
            className="h-auto w-1/2 max-h-[812px]"
          />
          <ProductCard data={productData} />
        </div>
      </div>
      <div>
        <Cards
          item={[
            {
              des: "Black Sleevless Crepe Dress",
              id: 1,
              imagesSrc:
                "/src/examples/ShopingCards/images/Web-_Product%20listing/3897062800_1_1_1%201-1.png",
              price: 900,
              rating: 4,
              title: "Mango",
            },
            {
              des: "Black Sleevless Crepe Dress",
              id: 2,
              imagesSrc:
                "/src/examples/ShopingCards/images/Web-_Product%20listing/3897062800_1_1_1%201.png",
              price: 900,
              rating: 3,
              reviews: 176,
              title: "Mango",
            },
            {
              des: "Black Sleevless Crepe Dress",
              id: 3,
              imagesSrc:
                "/src/examples/ShopingCards/images/Web-_Product%20listing/Frame%201-1.png",
              price: 900,
              rating: 2,
              reviews: 274,
              title: "Mango",
            },
          ]}
        />
      </div>
      <div>
        <FooterCart
          footerCopyRights={{
            copyright: "© 2024 All rights reserved",
            copyrightBgStyle: "bg-[#3F271E]",
            copyrightTextStyle: "text-[#fff]",
          }}
        />
      </div>
    </div>
  );
};

export default ProductDetails