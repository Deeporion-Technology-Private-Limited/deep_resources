import detailsimage from "../../images/detailsimage.png";
import ProductCard from "../DetailPage/ProductCard";

export const ProductDetails = () => {
  const productData = {
    brand: 'Mango',
    name: 'Women Empire Dress',
    rating: 4.1,
    price: 3950,
    discount: '25% off',
    isTaxInclusive: true,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    selectedSize: 'L',
    image: 'path/to/image.jpg',
    description: '302014 (Tessa Rain )',
    icon: 'path/to/icon.png',
    arrival: 'Get it by Thu, 6 June',
    paymentMethod: 'Cash on Delivery Available',
    returnPolicy: 'Easy 14 days return and exchange available',
  };  

  return (
    <div className="flex justify-center">
      <div className="flex space-x-12">
        <img src={detailsimage} alt="Product" className="h-auto w-1/2" />
        <ProductCard data={productData} />
      </div>
    </div>
  );
};
