import { Box, Button, Text } from "@/components";
import { ButtonIconPosition, ButtonVariant } from "@/components/Button/type";
import FaverateCard from "@/components/Cards/FaverateCard";
import React from "react";
import { cardsData, chipsData } from "./data";
import Chips from "@/components/Chips";
import { ChipsTypes } from "@/components/Chips/chipsTypes";

const DiscountPage = () => {
  return (
    <Box className="flex flex-col gap-5 ">
      <Box className="flex flex-col gap-5 pl-5">
        <Text className="font-extrabold text-2xl">Discounts & Offers</Text>
        <Box className="flex gap-5">
          {chipsData?.map((chipsItem) => (
            <Chips
              handleClick={() => {}}
              variant={ChipsTypes.not_active}
              className="bg-[#EBE3E0] font-medium text-[#3F271E]"
            >
              {chipsItem}
            </Chips>
          ))}
        </Box>
      </Box>
      <Box className="flex flex-col gap-3">
        <Text className="font-bold text-xl leading-6 pl-5">Top Deals</Text>
        <Box className="grid xl:grid-cols-4 gap-5 w-full lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1">
          {cardsData?.map((cardItem) => (
            <FaverateCard
              key={cardItem?.id}
              className="p-5"
              imageSrc={cardItem?.imageSrc}
              imageStyle="rounded-lg w-full"
            >
              <React.Fragment key=".0">
                <Box className="p-2 flex flex-col gap-2">
                  <Text
                    as="p"
                    className="font-extrabold text-2xl loading-normal"
                  >
                    {cardItem?.price}
                  </Text>
                  <Box className="flex w-max gap-2">
                    <Text>{cardItem?.coupanCode}</Text>
                    <img src="/src/components/Cards/icons/copy.svg" />
                  </Box>
                  <Text as="p">{cardItem?.expireDate}</Text>
                  <Box className="flex justify-between w-full">
                    <Text className="bg-[#EBE3E0] w-max rounded-3xl p-2">
                      {cardItem?.discount}
                    </Text>
                    <Button
                      className="border-none w-max p-0 text-[#7D5D4F]"
                      iconPosition={ButtonIconPosition.Right}
                      iconUrl="/src/components/Cards/icons/new.svg"
                      variant={ButtonVariant.DefaultDarkBackground}
                    >
                      View Products
                    </Button>
                  </Box>
                </Box>
              </React.Fragment>
            </FaverateCard>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default DiscountPage;
