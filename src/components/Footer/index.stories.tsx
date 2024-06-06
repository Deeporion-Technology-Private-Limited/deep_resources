import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from ".";
import { Box, IconsList, Input, Text } from "@/components";
import { PrimaryButton } from "@/components/PrimaryButton";
import { IconButton } from "@/components/Button/SingleIconButton/SingleIconButton";
import instagram from "../Header/navbarIcons/Instagram.svg"
import linkedin from "../Header/navbarIcons/LinkedIn.svg"
import facebook from "../Header/navbarIcons/Facebook.svg"
import google from "../Header/navbarIcons/Google.svg";

const meta: Meta<typeof Footer> = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CustomerServices: Story = {
  args: {
    children: (
      <>
        <Text
          as="p"
          className="text-[14px] mb-[15px] font-[600] text-[#ec048a] tracking-[.8px]"
        >
          CUSTOMER SERVICES
        </Text>
        <Box>
          <Text as="p" className="mb-[20px] text-[13px] tracking-[.8px]">
            <Text as="b" className="text-[13px]">
              Phone:
            </Text>{" "}
            +9090909090
          </Text>
          <Text as="p" className="mb-[20px] text-[13px] tracking-[.8px]">
            <Text as="b" className="text-[13px]">
              Email:
            </Text>{" "}
            deeporion@gmail.com
          </Text>
        </Box>
      </>
    ),
  },
};

export const SingpupForNewsLetter: Story = {
  args: {
    children: (
      <>
        <Text
          as="h1"
          className="text-[14px] mb-[15px] font-[600] text-[#ec048a] tracking-[.8px]"
        >
          SIGN UP FOR OUR NEWSLETTER
        </Text>
        <Text as="p" className="mb-[15px] tracking-[.8px] text-[13px]">
          Be the first to know about our new collections, exclusive offers, and
          other perks!
        </Text>
        <Box className="flex relative mb-[20px]">
          <Input className="rounded-none flex-1 h-[46px]" />
          <PrimaryButton className="absolute right-0 w-fit h-full rounded-none text-[11px]">
            SUBSCRIBE
          </PrimaryButton>
        </Box>
        <IconsList className="justify-start">
          <IconButton iconUrl={instagram} />
          <IconButton iconUrl={facebook} />
          <IconButton iconUrl={google} />
          <IconButton iconUrl={linkedin} />
        </IconsList>
      </>
    ),
  },
};
