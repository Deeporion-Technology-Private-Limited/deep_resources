import { ButtonSize } from "@/components/types";
import { Meta, StoryObj } from "@storybook/react";
import { EditableProfileAvatar, ProfileAvatarInterFace } from ".";

const meta: Meta<typeof EditableProfileAvatar> = {
  title: "Components/Avatar/Edit",
  component: EditableProfileAvatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

type StoryProps = StoryObj<ProfileAvatarInterFace>;

export const WithImage: StoryProps = {
  args: {
    src: "https://images.pexels.com/photos/13172901/pexels-photo-13172901.jpeg",
    className: "rounded-full",
    textStyle: "text-[1rem] text-[#ffffff]",
    iconStyle: "size-8",
    size: ButtonSize.Medium,
  },
};
