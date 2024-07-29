import { ISizeDataForWomen } from "../types";

export const womanSize: ISizeDataForWomen[] = [
  {
    size: "XS",
    hipCm: 35.0,
    waistCm: 24.0,
    lengthCm: 13.0,
  },
  {
    size: "S",
    hipCm: 37.0,
    waistCm: 26.0,
    lengthCm: 13.5,
  },
  {
    size: "M",
    hipCm: 39.0,
    waistCm: 28.0,
    lengthCm: 14.0,
  },
  {
    size: "L",
    hipCm: 41.0,
    waistCm: 30.0,
    lengthCm: 14.5,
  },
  {
    size: "XL",
    hipCm: 43.0,
    waistCm: 32.0,
    lengthCm: 15.0,
  },
];

export const womanSizeFormatted = womanSize.map((item) => ({
  size: item.size,
  hipCm: item.hipCm,
  waistCm: item.waistCm,
  lengthCm: item.lengthCm,
}));
