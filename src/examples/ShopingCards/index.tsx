import { Box, FaverateCard } from "@/components";
import { array, IValue, Items } from "./data";
import { forwardRef } from "react";

const Cards = forwardRef<HTMLDivElement, Items>(({ item }, ref) => {
  function handleChange(value: IValue) {
    const exists = array.some((item: any) => item.id === value.id);
    if (exists) {
      const index = array.findIndex((item: any) => item.id === value.id);
      array.splice(index, 1);
    } else {
      array.push(value);
    }
  }

  return (
    <Box
      className="grid xl:grid-cols-4 gap-5 w-full lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1  shadow-xl p-5"
      ref={ref}
    >
      {item?.map((value: IValue) => (
        <Box>
          <FaverateCard
            key={value.id}
            imageSrc={value.imagesSrc}
            price={value.price}
            brand={value.title}
            favorite
            starRating
            rating={value.rating}
            reviews={value.reviews}
            description={value.des}
            isChange={() => {
              handleChange(value);
            }}
          />
        </Box>
      ))}
    </Box>
  );
});
export default Cards;
