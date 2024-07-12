import { Meta, StoryObj } from "@storybook/react";
import { variants, IProgressBar } from "./type";
import { ProgressBar } from ".";

const meta: Meta<typeof ProgressBar> = {
  title: "Components/ProcessBar",
  component: ProgressBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type StoryProps = StoryObj<IProgressBar & { className?: string }>;

export const Linear: StoryProps = {
  args: {
    progress: 12,
    variant: variants.linear,
    bgColor: "red",
    className: "h-4 w-[900px] rounded-full",
    textColor: "blue",
    middleText: false,
  },
};

export const Circular: StoryProps = {
  args: {
    progress: 23,
    variant: variants.circular,
    bgColor: "red",
    textFont: "10px",
    size: 120,
    strokeWidth: 15,
    textColor: "green",
    middleText: false,
  },
};

export const CustomizedLinear: StoryProps = {
  args: {
    progress: 80,
    variant: variants.linear,
    bgColor: "green",
    middleText: true,
    textColor: "red",
  },
};

export const CustomizedCircularWithBackground: StoryProps = {
  args: {
    progress: 80,
    variant: variants.circular,
    size: 120,
    strokeWidth: 15,
    textColor: "blue",
    className: "w-[10rem] h-[10rem] bg-black",
    bgColor: "green",
    middleText: true,
  },
};
