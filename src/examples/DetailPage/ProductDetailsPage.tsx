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
    selectedSize: 'L'
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