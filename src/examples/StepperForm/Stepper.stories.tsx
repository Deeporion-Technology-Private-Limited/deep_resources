import React from "react";
import Stepper from "../StepperForm/Stepper";
import type { Meta, StoryObj } from "@storybook/react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

type Step = {
  component: React.ReactNode;
  title: string;
};

const meta: Meta = {
  title: "Example/Multi-step",
  component: Stepper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj<{ steps: Step[] }> = (args: any) => (
  <Stepper {...args} />
);
Default.args = {
  steps: [
    {
      component: (
        <Step1
          data={{ name: "" }}
          handleChange={() => {
          }}
        />
      ),
      title: "Personal Information",
    },
    {
      component: (
        <Step2
          data={{ address: "" }}
          handleChange={() => {
          }}
        />
      ),
      title: "Address",
    },
    {
      component: (
        <Step3
          data={{ paymentDetails: "" }}
          handleChange={() => {
          }}
        />
      ),
      title: "Payment Details",
    },
  ],
};
