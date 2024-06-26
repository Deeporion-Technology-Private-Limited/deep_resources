import img1 from "../ShopingCards/images/Web-_Product listing/3897062800_1_1_1 1-1.png";
import img2 from "../ShopingCards/images/Web-_Product listing/3897062800_1_1_1 1.png";
import img3 from "../ShopingCards/images/Web-_Product listing/Frame 1-1.png";

export interface CardObj {
  id?: number;
  imageSrc?: string;
  price?: number;
  brand?: string;
  description?: string;
  rating?: number;
  reviews?: number;
  checked?: boolean;
}
export interface CardItem {
  item: CardObj[];
  handleCart:() =>void;
}

export const demo: CardObj[] = [
  {
    id: 11,
    brand: "Mango",
    description: "Black Sleeveless Crepe Dress",

    imageSrc: img1,

    price: 3950,
    rating: 4.1,
    reviews: 132,
  },
  {
    id: 12,
    brand: "Mango",
    description: "Black Sleeveless Crepe Dress",

    imageSrc: img2,

    price: 3950,
    rating: 4.1,
    reviews: 132,
  },
  {
    id: 13,
    brand: "Mango",
    description: "Black Sleeveless Crepe Dress",
    imageSrc: img3,
    price: 4950,
    rating: 4.1,
    reviews: 132,
  },
];
