import { Meta, StoryObj } from "@storybook/react";
import Banner from "./index";
import { FindIconUrl } from "@/utils/Constant";

const meta: Meta<typeof Banner> = {
  title: "Components/Cards/Banner",
  component: Banner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Banner1: Story = {
  args: {
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/1f0c/a368/cef007aff70c3a4b5ff2f7b97f635512?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AvMna1TEn337~8qFDBuSSypkUIapNZORWN41TSqJ7~g-3U8f2ZD4DKWrSDfuOxWZvJfOW8LTBhhz3zuaTVHVojXRo0GI2QKUecPLv3xrKGcS2rRK2Cs9ORwJg-KD3s-8K3Q5K4sywzwOckatDC5Fev3MIiIiV9Wu9bQInLbRlmB5MSBHeIITfH8FJp7ZIl7obqMuxCHZb85saP-nyWN1-36Nwz5zNvtxGEeKQ3fICEHieo-~9ZXEYueno1YRaSIg1~B6j4I9qNynm~5L7DG-RMPwwBBkO6KIsZ-UHRNi7guyfN6CYPXE~NL~Vi-dyHU1F9UJk7EG5fddJQcDrI36-Q__",
    boxStyle: "h-full w-full flex flex-col justify-end text-white gap-5 p-10",
    titleClass: " leading-10 text-2xl w-max flex",
    descriptionClass: "flex justify-center w-max font-semibold text-3xl ",
    buttonClass: "flex justify-center w-max p-4 text-xl capitalize",
    className: "max-w-none",
    buttonText: "Explore more",
    title: "HOME COLLLECTION",
    description: "Living & Decor",
  },
};

export const Banner2: Story = {
  args: {
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/02d3/fe91/99ab07322a4f858130c3c0e9f9b58b21?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G1zpB6FPaVQTBnAMNF0kM2cxsep8BMIgkfnKnx8qgmcoQRzzTggfM0VSsygy~Izzj~qwPKa9yKLgVmR-L~X-wht8KJKRBDirSVlQE7oyH-s~6mVabKddbUJ~IojkAnOJfmcIJV1KwC6aymUWq2~RBZKLCc89u0HPzZkPvETgdru0dBSX0tCxNBJc69nvjwwMUilmENnyd-d-eo-ovtholk2Y~6h5FDAfEonFSnfKLSeHurD8PQ~daQQhDMUtmGkj53WABt1R5aHv3vKNiPXJdOAKZ3JKaUV1EAJ79OH0M5YSYv7mwZkZ63Ki81xzTDp0oVaAabQmMeUUGl0lrC5PLg__",
    boxStyle:
      "h-[50%] p-5 flex w-[80%] flex-col text-white gap-4 justify-center items-center bg-[#3E2E28B2]",
    titleClass: "flex justify-center font-extrabold leading-10 text-3xl",
    descriptionClass: "flex justify-center w-max font-normal text-2xl",
    buttonClass: "flex justify-center w-max text-2xl",
    className: "max-w-none h-[400px] w-[1200px]",
    buttonText: "Explore more",
    title: "Exclusive Kids Wear Collection",
    description: "Sleek, Modern and Classic",
    iconUrl: FindIconUrl("ArrowRightBrown.svg"),
  },
};
