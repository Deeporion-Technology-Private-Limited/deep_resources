import { Meta, StoryObj } from "@storybook/react";
import Profile, { ProfileAvatarProps } from ".";
import { ButtonSize } from "@/components/Button/type";

const meta: Meta<typeof Profile> = {
  title: "Components/Avatar/Edit",
  component: Profile,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type StoryProps = StoryObj<ProfileAvatarProps>;

export const WithImage: StoryProps = {
  args: {
    src: "https://images.pexels.com/photos/13172901/pexels-photo-13172901.jpeg",
    className:"rounded-full",
    textStyle:"text-[1rem] text-[#ffffff]",
    iconStyle:"size-8",
    size: ButtonSize.Medium,
  },
};

