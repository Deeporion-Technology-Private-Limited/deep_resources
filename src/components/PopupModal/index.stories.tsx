import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from ".";
import { Checkbox, Headings, Input, Text } from "..";
import { InputType } from "@/components/Input/type";
import {InputType as Checkboxinput} from "@/components/Checkbox/CheckboxTypes"
import ReviewCard from "../Cards/ReviewCard/ReviewCard";
import { LoginForm } from "../../examples/LoginForm/LoginForm";

const meta = {
  title: "Components/PopupModal/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    // contentSize: {
    //   control:'select', "options" :["text-xl","text-2xl","text-3xl","text-4xl","text-5xl"],
    // },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    SaveChanges: () => console.log("saved"),

    onClose: () => (isOpen: boolean) => {
      return !isOpen;
    },
    title: "Sample Modal",
    contents: "Contents in the modals ",
    button02: true,
    button01: true,
    buttontext1: "Text 1",
    buttontext2: "Text 2",
    children: (
      <div>
        <Headings
          FontSize={"text-base"}
          fontWeight="font-normal"
          text={"Contents in the modals"}
        ></Headings>
      </div>
    ),
  },
};

export const ModalInputs: Story = {
  args: {
    SaveChanges: () => console.log("saved"),

    onClose: () => (isOpen: boolean) => {
      return !isOpen;
    },
    title: "Sample Modal",
    contents: "Contents in the modals ",
    button02: true,
    button01: true,
    buttontext1: "button01",
    buttontext2: "button02",
    children: (
      <>
        <Headings
          className="font-normal "
          FontSize={"text-base"}
          fontWeight="font-normal"
          text={"Please fill the Form"}
        ></Headings>

        <div className="flex flex-col mb-4">
          <label
            htmlFor="input1"
            className="mb-2 text-lg font-normal text-slate-500 "
          >
            Name :
          </label>
          <Input id="input1" placeholder="Input 1" type={InputType.Text} />
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="input2"
            className="mb-2 text-lg font-normal text-slate-500"
          >
            Email :
          </label>
          <Input id="input1" placeholder="Input 1" type={InputType.Text} />
        </div>
      </>
    ),
  },
};

export const ReviewModal: Story = {
  args: {
    SaveChanges: () => console.log("saved"),

    onClose: () => (isOpen: boolean) => {
      return !isOpen;
    },
    title: "Sample Modal",
    contents: "Contents in the modals ",
    button02: true,
    button01: true,
    buttontext1: "button01",
    buttontext2: "button02",
    children: (
      <>
        <Headings
          className="font-normal "
          FontSize={"text-base"}
          fontWeight="font-normal"
          text={"Rate your experience"}
        ></Headings>

        <ReviewCard
          style={{ boxShadow: "none" }}
          imageSrc={""}
          rating={4}
          className="shadow-none"
          StarRating
        />
      </>
    ),
  },
};

export const PivacyPolicy: Story = {
  args: {
    SaveChanges: () => console.log("saved"),

    onClose: () => (isOpen: boolean) => {
      return !isOpen;
    },
    title: "Terms and Conditions",
    contents: " ",
    button02: true,
    button01: true,
    buttontext1: "button01",
    buttontext2: "button02",
    children: (
      <>
        <Text className="mb-4">"Contents in the Terms and conditions"</Text>

        <Checkbox label="Accept the Terms and Conditions" type={Checkboxinput.Checkbox} />
        
      </>
    ),
  },
};
export const LoginForms: Story = {
  args: {
    SaveChanges: () => console.log("saved"),

    onClose: () => (isOpen: boolean) => {
      return !isOpen;
    },
    title: "Login Forms",
    contents: "Contents in the modals ",
    button02: false,
    button01: false,
    buttontext1: "button01",
    buttontext2: "button02",
    children: <LoginForm />,
  },
};
