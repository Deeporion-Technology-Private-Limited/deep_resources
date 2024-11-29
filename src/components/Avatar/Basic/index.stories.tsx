import { Meta, StoryObj } from "@storybook/react";
import  { BasicProfileAvatar, ProfileAvatarProps } from ".";

const meta: Meta<typeof BasicProfileAvatar> = {
  title: "Components/Avatar/Basic",
  component: BasicProfileAvatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type StoryProps = StoryObj<ProfileAvatarProps>;

export const Default: StoryProps = {
  args: {
    name: "Hemraj",
  },
};

export const WithImage: StoryProps = {
  args: {
    src: "https://images.pexels.com/photos/13172901/pexels-photo-13172901.jpeg",
    name: "Karan",
    className:"rounded-full"
  },
};

export const CustomColors: StoryProps = {
  args: {
    name: "Vishal",
    bgImgColor: "blue",
    textColor: "yellow",
  },
};
