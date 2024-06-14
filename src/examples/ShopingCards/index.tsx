import { Box } from "@/components";
import FaverateCard from "@/components/Cards/FaverateCard";
import img1 from "./images/Web-_Product listing/3897062800_1_1_1 1-1.png";
import img2 from "./images/Web-_Product listing/3897062800_1_1_1 1.png";
import img3 from "./images/Web-_Product listing/Frame 1-1.png";
import img4 from "./images/Web-_Product listing/Frame 1-2.png";
import img5 from "./images/Web-_Product listing/Frame 1-3.png";
import img6 from "./images/Web-_Product listing/Frame 1-4.png";
import img7 from "./images/Web-_Product listing/Frame 1-5.png";
import img8 from "./images/Web-_Product listing/Frame 1.png";

const demo = [
  {
    imagesSrc: img1,
    price: 900,
    title: "Mango",
    des: "Black Sleevless Crepe Dress",
  },
  {
    imagesSrc: img2,
    price: 900,
    title: "Mango",
    des: "Black Sleevless Crepe Dress",
  },
  {
    imagesSrc: img3,
    price: 900,
    title: "Mango",
    des: "Black Sleevless Crepe Dress",
  },
  {
    imagesSrc: img4,
    price: 900,
    title: "Mango",
    des: "Black Sleevless Crepe Dress",
  },
  {
    imagesSrc: img5,
    price: 900,
    title: "Mango",
    des: "Black Sleevless Crepe Dress",
  },
  {
    imagesSrc: img6,
    price: 900,
    title: "Mango",
    des: "Black Sleevless Crepe Dress",
  },
  {
    imagesSrc: img7,
    price: 900,
    title: "Mango",
    des: "Black Sleevless Crepe Dress",
  },
  {
    imagesSrc: img8,
    price: 900,
    title: "Mango",
    des: "Black Sleevless Crepe Dress",
  },
];
const Cards = () => {
  return (
    <Box className="grid lg:grid-cols-4 gap-5 w-full md:grid-cols-2 grid-cols-2 sm:grid-cols-1  shadow-xl p-5">
      {demo?.map((value, index) => (
        <FaverateCard
          key={index}
          imageSrc={value.imagesSrc}
          price={value.price}
          brand={value.title}
          favorite
          starRating
          rating={3}
          reviews={124}
          description={value.des}
        />
      ))}
    </Box>
  );
};
export default Cards;