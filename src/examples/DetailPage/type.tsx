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
  arrival: string;
  returnPolicy: string;
  paymentMethod: string;
  productCode: string;
  productDetails: string;
  sizeFit: any;
  materialCare: string;
  specification: any;
  reviews: string;
  icon: any;
  ratingsDistribution: any;
  averageRating: any;
  totalReviews: number;
}

interface Product {
  Taxes : string;
  Size : string ;
  AddToBag : string;
  Wishlist: string ;
  Change : string ;
  ProductCode: string ;
  ProductDetails : string ;
  SizeFit : string ;
  Material : string ;
  ProductSpec : string ;
}