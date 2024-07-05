import React from "react";
import Stepper from "../StepperForm/Stepper";
import type { Meta, StoryObj } from "@storybook/react";
import Step1Card from "./Step1";
import Step2Card from "./Step2";
import Step3Card from "./Step3";

type Step = {
  component: React.ReactNode;
  title: string;
};

const meta: Meta = {
  title: "Examples/Multi-step",
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
  steps : [
  {
    component: <Step1Card data={{
      name: "",
      email: ""
    }} onDataChange={function (_data: { name: string; email: string; }): void {
      throw new Error("Function not implemented.");
    } } />,
    title: "Personal Information",
  },
  {
    component: <Step2Card data={{
      address: "",
      city: ""
    }} onDataChange={function (_data: { address: string; city: string; }): void {
      throw new Error("Function not implemented.");
    } } />,
    title: "Address Information",
  },
  {
    component: <Step3Card data={{
      paymentMethod: ""
    }} onDataChange={function (_data: { paymentMethod: string; }): void {
      throw new Error("Function not implemented.");
    } } />,
    title: "Payment Method",
  },
]
};
