
import { Box, Button, Headings, Modal, OrderSummary, ProductCard, QuantityCard, Text } from "@/components";
import { demo,CardObj, CardItem } from "./data";
import { ButtonSize } from "@/components/Button/type";
import { forwardRef, useState } from "react";
import { cardData } from "../Wishlist/Data";

const Cart = forwardRef<HTMLDivElement, CardItem>(({ item,handleCart }, ref)  => {
  const [openModal, setOpenModal] = useState(false);
  const arr = demo || [];

  function handleChange(value: CardObj) {
    const exists = arr.some((item: any) => item.id === value.id);
    if (exists) {
      const index = arr.findIndex((item: any) => item.id === value.id);
      arr.splice(index, 1);
    }
  }
  const [currentItem, setCurrentItem] = useState<any>({});
  const handleData = () => {
    cardData.push(currentItem);
  };

  const openmodeal = () => {
    return (
      <Modal
        key={currentItem?.id}
        button01={false}
        button02={false}
        modalbutton={false}
        onClose={() => {}}
        handleClose={() => {
          setOpenModal(false);
        }}
        openModal={openModal}
        crossIcon={true}
        header={<Box></Box>}
        children={
          <Box className="flex flex-col gap-10 w-full  h-full">
            <Box className="flex w-full  gap-6  border-[rgba(255, 255, 255, 1)]">
              <Box>
                <ProductCard
                  style={{ width: "120px" }}
                  imageClass="w-full h-full rounded-lg"
                  imageSrc={currentItem?.imageSrc ?? ''}
                />
              </Box>
              <Box className="flex w-full flex-col gap-4">
                <Headings
                  FontSize="text-[24px]"
                  fontWeight="font-bold"
                  text="Remove from Cart"
                />{" "}
                <Headings
                  fontWeight={"font-thin"}
                  FontSize="text-base"
                  text={
                    "Are you sure you want to remove " +
                    `"${currentItem.brand}"` +
                    " from wishlist ?"
                  }
                />
              </Box>
            </Box>
            <Box className="flex w-full border-t-2 border-dotted py-4 px-10 justify-center items-center bg-white gap-4 ">
              <Button
                size={ButtonSize.Large}
                className="flex-1 bg-gray-200 py-3 rounded-lg text-gray-700 font-semibold text-base font-poppins flex justify-center items-center gap-2"
                onClick={() => {
                  handleChange(currentItem);
                  setOpenModal(false);
                }}
              >
                <p className="text-[#72787F] text-base font-semibold inline-block ml-2">
                  Remove
                </p>
              </Button>
              <Button
                size={ButtonSize.Large}
                className="flex-1 py-3 rounded-lg mr-2 flex justify-center items-center gap-2"
                style={{
                  background: "linear-gradient(to right, #BFA59A, #3F271E)",
                }}
                onClick={() => {
                  handleData();
                  setOpenModal(false);
                  handleChange(currentItem);
                }}
              >
                <Text
                  as="p"
                  className="text-white text-base font-semibold inline-block ml-2"
                >
                  Move to Wishlist
                </Text>
              </Button>
            </Box>
          </Box>
        }
      />
    );
  };

  return (
    <Box ref={ref}>
      <Box className="flex flex-col lg:flex-row p-5 w-full justify-between gap-10 lg:gap-10">
        <Box className="flex flex-col gap-5 shadow-lg w-full lg:w-[65%]">
          {item?.map((value: CardObj) => (
            <QuantityCard
              imageStyle="w-full lg:w-[15rem] h-full rounded-lg"
              key={value.id}
              price={3900}
              isQuantity={true}
              isReturn={true}
              className="lg:h-[18rem] h-fit w-full p-8"
              quantityOptions={[1, 2, 3, 4]}
              sizeOptions={["S", "M", "L", "Xl", "2Xl", "3Xl", "4Xl", "5Xl"]}
              imageSrc={value.imageSrc}
              returnPolicy="14 days return available"
              deliveryText="Delivery by 7 June 2024"
              brand={value.brand}
              onChange={() => {
                setCurrentItem(value);
              }}
              handleClose={() => {
                setOpenModal(!openModal);
                setCurrentItem(value);
              }}
            />
          ))}
        </Box>
        <Box className="w-full lg:w-[45%] mt-5 lg:mt-0 lg:ml-5 flex flex-col items-center lg:items-start">
          <OrderSummary
            brand="Mango"
            delivery="₹ 4.5"
            description="Black Sleeveless Crepe Dress"
            imageSrc="/src/examples/ShopingCards/images/Web-_Product%20listing/3897062800_1_1_1%201.png"
            subTotal="₹ 187"
            className="w-full "
            taxes="₹ 3.45"
            total="₹ 3950"
            handleClick={handleCart}
          />
        </Box>
      </Box>
      {openModal && openmodeal()}
    </Box>
  );
}
)
export default Cart;
