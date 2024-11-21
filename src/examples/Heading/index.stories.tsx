import { Meta, StoryObj } from "@storybook/react";
import Heading from ".";
import { Text } from "@/components";
import { FindIconUrl } from "@/utils/Constant";
const meta: Meta<typeof Heading> = {
  title: "Examples/head",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags:['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const View: Story = {
  args: {
    headingItem: <Text className="font-bold text-2xl">Profile</Text>,
    imageSrc: FindIconUrl("profileImage.png"),
    handleNotification: () => {
      alert("handleClick");
    },
  },
};
