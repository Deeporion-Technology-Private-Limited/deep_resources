import type { Meta, StoryObj } from "@storybook/react";
import PersonalInfo from "./PersonalInfoPage";
import { personalInfoData } from "@/components/Data/Information";

const meta: Meta<typeof PersonalInfo> = {
  title: "Examples/PersonalInfo",
  component: PersonalInfo,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Product: Story = {
  args: {
    personalInfoData,
    },
};
