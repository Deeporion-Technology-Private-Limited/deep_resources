import { IProductReviewDescription,IDescriptionReviewSingleCard } from "../types";

export const DescriptionReview: IProductReviewDescription[] = [
  {
    rating: 1,
    heading: "Description",
    contents: "Contents",
    helpFull: 12,
    notHelpfull: 13,
    days: 3,
  },
  {
    rating: 4,
    heading: "It was great",
    contents:
      "I ordered this custom piece to add a nice final touch to a project I designed, and did by hand that I made for a friend. The shipping takes time, I highly recommend timing yourself accordingly when placing your order. It’s definitely worth it!",
    helpFull: 10,
    notHelpfull: 22,
    days: 5,
  },
  {
    rating: 1.5,
    heading: "Description",
    contents: "Perfect quality! Love it and highly recommend.",
    helpFull: 12,
    notHelpfull: 13,
    days: 7,
  },
];


export const DescriptionReviewSingleCard: IDescriptionReviewSingleCard = {
  objectData: {
    cardHeading: "Mango",
    cardTittle: "Women Desires",
    imageUrl:
      "https://www.shutterstock.com/image-photo/summer-fashion-concept-woman-wearing-600nw-1789129787.jpg",
    totalReview: "40 Reviews",
    totalRating: "5.0",
    count1: 30,
    count2: 1,
    count3: 3,
    count4: 2,
    count5: 4,
  },
};
