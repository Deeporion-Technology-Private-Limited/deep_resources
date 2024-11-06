import { DefaultButton } from "@/components/Button/DefaultButton";
import { Box } from "@/components/Layout";
import { Text } from "@/components/Text";
import { ButtonIconPosition, ButtonVariant } from "@/components/types";
import image from "@/examples/ShopingCards/images/Web-_Product listing/3897062800_1_1_1 1.png";
import { FindIconUrl } from "@/utils/Constant";
import { Meta, StoryObj } from "@storybook/react";
import { FavouriteCard } from ".";

const meta: Meta<typeof FavouriteCard> = {
  title: "Components/Cards/FaverateCard",
  component: FavouriteCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageSrc: image,
    brand: "Mango",
    description: "Black Sleeveless Crepe Dress",
    price: 3950,
    favorite: false,
  },
};

export const WithFavoriteAndStar: Story = {
  args: {
    imageSrc: image,
    brand: "Mango",
    description: "Black Sleeveless Crepe Dress",
    price: 3950,
    favorite: true,
    starRating: true,
    rating: 4.1,
    reviews: 132,
    descriptionStyle: "px-6",
  },
};

export const WithNew: Story = {
  args: {
    imageSrc: image,
    brand: "Mango",
    description: "Black Sleeveless Crepe Dress",
    isnew: "new",
  },
};

export const RowCardWithIcon: Story = {
  args: {
    imageSrc: image,
    brand: "mango",
    description: "Black Sleeveless Crepe Dress",
    className: "flex p-4 items-end",
    iconUrl: FindIconUrl("Copy.svg"),
    favorite: true,
    isDescription: true,
    descriptionStyle: "px-6",
  },
};

export const TopDealsCard: Story = {
  args: {
    imageSrc: image,
    children: (
      <>
        <Box className="p-2 flex flex-col gap-2">
          <Text as="p" className="font-extrabold text-2xl loading-normal">
            Upto ₹150
          </Text>
          <Box className="flex w-max gap-2">
            <Text>Code: TRYRAREFTW10</Text>
            <img src={FindIconUrl("ContentCopy.svg")} />
          </Box>
          <Text as="p">Expiry: 20 May 2024</Text>
          <Box className="flex justify-between w-full">
            <Text className="bg-[#EBE3E0] w-max rounded-3xl p-2"> 5% off</Text>
            <DefaultButton
              variant={ButtonVariant.DefaultDarkBackground}
              className="border-none w-max p-0 text-[#7D5D4F]"
              iconPosition={ButtonIconPosition.Right}
              iconUrl={FindIconUrl("ArrowRightBrown.svg")}
            >
              View Products
            </DefaultButton>
          </Box>
        </Box>
      </>
    ),
    className: "p-5 w-[30rem]",
    imageStyle: "rounded-lg w-full h-[15rem]",
  },
};

export const AddProductCard: Story = {
  args: {
    imageSrc: image,
    children: (
      <>
        <Box className="p-2 flex flex-col gap-2">
          <Text as="p" className="font-extrabold text-2xl loading-normal">
            Upto ₹150
          </Text>
          <Box className="flex w-max gap-2">
            <Text>Code: TRYRAREFTW10</Text>
          </Box>
          <Text as="p">Expiry: 20 May 2024</Text>
          <Box className="flex justify-between w-full">
            <Text className="bg-[#EBE3E0] w-max rounded-3xl p-2"> 5% off</Text>
            <DefaultButton
              variant={ButtonVariant.DefaultDarkBackground}
              className="border-none w-max p-0 h-7 text-[#7D5D4F]"
              iconPosition={ButtonIconPosition.Left}
              iconUrl={FindIconUrl("AddBrown.svg")}
            >
              View Products
            </DefaultButton>
          </Box>
        </Box>
      </>
    ),
    className: "w-[30rem]",
    imageStyle: "rounded-lg w-full h-[15rem]",
    descriptionStyle: "px-2",
  },
};

export const AddProduct: Story = {
  args: {
    children: (
      <>
        <Box className="p-2 flex flex-col gap-5 flex-wrap">
          <Text
            as="p"
            className="font-extrabold text-[2.5rem] loading-normal w-full"
          >
            Active Orders
          </Text>
          <Box className="flex w-max gap-2 ">
            <Text className="font-extrabold text-[4rem]">79</Text>
          </Box>
        </Box>
      </>
    ),
    className: "max-w-none max-w-[35rem] bg-[#3F271E] text-white rounded-2xl",
    descriptionStyle: "px-2",
  },
};
