import { Meta, StoryObj } from "@storybook/react";
import ProfileAvatar, { ProfileAvatarProps } from ".";

const meta: Meta<typeof ProfileAvatar> = {
  title: "Components/Avatar/Basic",
  component: ProfileAvatar,
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
