import type { Meta, StoryObj } from "@storybook/react";
import PhoneVerify from "./PhoneVerify";
import SplashScreen from "./SplashScreen";

const meta: Meta<typeof SplashScreen> = {
  title: "Examples/Form",
  component: SplashScreen,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Splash_Screen: Story = {};
