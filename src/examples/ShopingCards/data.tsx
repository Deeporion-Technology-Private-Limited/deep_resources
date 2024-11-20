import img1 from "./images/Web-_Product listing/3897062800_1_1_1 1-1.png";
import img2 from "./images/Web-_Product listing/3897062800_1_1_1 1.png";
import img3 from "./images/Web-_Product listing/Frame 1-1.png";
import img4 from "./images/Web-_Product listing/Frame 1-2.png";
import img5 from "./images/Web-_Product listing/Frame 1-3.png";
import img6 from "./images/Web-_Product listing/Frame 1-4.png";
import img7 from "./images/Web-_Product listing/Frame 1-5.png";
import img8 from "./images/Web-_Product listing/Frame 1.png";

export interface IValue {
  id?: number;
  imagesSrc?: string;
  price?: number;
  title?: string;
  des?: string;
  rating?: number;
  reviews?: number;
}
export interface Items {
  item: IValue[];
}

export const array: IValue[] = [];
export const demo: IValue[] = [
  {
    id: 1,
    imagesSrc: img1,
    price: 900,
    title: "Mango",
    des: "Black Sleevless Crepe Dress",
    rating: 4,
  },
  {
    id: 2,
    imagesSrc: img2,
    price: 900,
    title: "Mango",
    des: "Black Sleevless Crepe Dress",
    rating: 3,
    reviews: 176,
  },
  {
    id: 3,
    imagesSrc: img3,
    price: 900,
    title: "Mango",
    des: "Black Sleevless Crepe Dress",
    rating: 2,
    reviews: 274,
  },
  {
    id: 4,
    imagesSrc: img4,
    price: 900,
    title: "Mango",
    des: "Black Sleevless Crepe Dress",
    rating: 2.5,
    reviews: 274,
  },
  {
    id: 5,
    imagesSrc: img5,
    price: 900,
    title: "Mango",
    des: "Black Sleevless Crepe Dress",
    rating: 5,
    reviews: 453,
  },
  {
    id: 6,
    imagesSrc: img6,
    price: 900,
    title: "Mango",
    des: "Black Sleevless Crepe Dress",
    rating: 1.5,
    reviews: 543,
  },
  {
    id: 7,
    imagesSrc: img7,
    price: 900,
    title: "Mango",
    des: "Black Sleevless Crepe Dress",
    rating: 2.5,
    reviews: 761,
  },
  {
    id: 8,
    imagesSrc: img8,
    price: 900,
    title: "Mango",
    des: "Black Sleevless Crepe Dress",
    rating: 4.9,
    reviews: 987,
  },
];
