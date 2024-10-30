import {
  Box,
  Checkbox,
  Headings,
  Input,
  ReviewCard,
  Text,
} from "@/components/index";
import { CheckboxType, InputType, InputVariant } from "@/components/types";
import type { Meta, StoryObj } from "@storybook/react";
import { SkeletonLoginForm } from "../Skeleton";
import { PopupModal } from "./PopupModal";

const meta: Meta<typeof PopupModal> = {
  title: "Components/PopupModal/Modals",
  component: PopupModal,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClose: () => (isOpen: boolean) => {
      return !isOpen;
    },
    button02: true,
    button01: true,
    modalbutton: true,
    openModal: true,
    crossIcon: true,
    header: (
      <Box className="mb-3 flex justify-between  border-[rgba(255, 255, 255, 1)]">
        <Headings
          FontSize="text-xl"
          fontWeight="font-bold"
          text={"Model Heading"}
        />{" "}
      </Box>
    ),
    children: (
      <Box>
        <Headings
          FontSize={"text-base"}
          fontWeight="font-normal"
          text={"Contents in the modals"}
        ></Headings>
      </Box>
    ),
  },
};

export const ModalInputs: Story = {
  args: {
    onClose: () => (isOpen: boolean) => {
      return !isOpen;
    },
    button02: true,
    button01: true,
    modalbutton: true,
    openModal: true,
    crossIcon: true,
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
          <Input
            id="input1"
            placeholder="Input 1"
            type={InputType.Text}
            variant={InputVariant.Standard}
            value={""}
          />
        </div>
        <div className="flex flex-col mb-4">
          <label
            htmlFor="input2"
            className="mb-2 text-lg font-normal text-slate-500"
          >
            Email :
          </label>
          <Input
            id="input1"
            placeholder="Input 1"
            variant={InputVariant.Standard}
            type={InputType.Text}
            value={""}
          />
        </div>
      </>
    ),
    header: (
      <>
        <Box className="mb-3 flex justify-between  border-[rgba(255, 255, 255, 1)]">
          <Headings
            FontSize="text-xl"
            fontWeight="font-bold"
            text={"Modal Heading"}
          />{" "}
        </Box>
      </>
    ),
  },
};

export const ReviewModal: Story = {
  args: {
    onClose: () => (isOpen: boolean) => {
      return !isOpen;
    },
    button02: true,
    button01: true,
    modalbutton: true,
    openModal: true,
    crossIcon: true,
    header: (
      <>
        <Box className="mb-3 flex justify-between  border-[rgba(255, 255, 255, 1)]">
          <Headings
            FontSize="text-xl"
            fontWeight="font-bold"
            text={"Modal Heading"}
          />{" "}
        </Box>
      </>
    ),
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
          reviewerName={""}
        />
      </>
    ),
  },
};

export const PrivacyPolicy: Story = {
  args: {
    onClose: () => (isOpen: boolean) => {
      return !isOpen;
    },
    button02: true,
    button01: true,
    modalbutton: true,
    openModal: true,
    crossIcon: true,
    header: (
      <>
        <Box className="mb-3 flex justify-between  border-[rgba(255, 255, 255, 1)]">
          <Headings
            FontSize="text-xl"
            fontWeight="font-bold"
            text={"Modal Heading"}
          />{" "}
        </Box>
      </>
    ),
    children: (
      <>
        <Text className="mb-4">"Contents in the Terms and conditions"</Text>

        <Checkbox
          label="Accept the Terms and Conditions"
          type={CheckboxType.Checkbox}
          value={" "}
          checked={false}
        />
      </>
    ),
  },
};
export const LoginForms: Story = {
  args: {
    onClose: () => (isOpen: boolean) => {
      return !isOpen;
    },
    modalbutton: true,
    button02: false,
    button01: false,
    openModal: true,
    crossIcon: false,
    children: <SkeletonLoginForm />,
    header: <></>,
  },
};
