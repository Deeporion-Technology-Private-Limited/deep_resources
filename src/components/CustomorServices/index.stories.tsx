import type { Meta, StoryObj } from "@storybook/react";
import { CustomerServices } from ".";
import { Box,Text } from "@/components";

const meta: Meta<typeof CustomerServices> = {
  title: "Components/CustomerServices",
  component: CustomerServices,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const CustomerServicesCard: Story = {
    args: {
        children: <>
            <Text as="p" className="text-[14px] mb-[15px] font-[600] text-[#ec048a]">CUSTOMER SERVICES</Text>
            <Box>
                <Text as="p" className="mb-[20px]">
                    <Text as="b">Phone:</Text> +9090909090
                </Text>
                <Text as="p" className="mb-[20px]">
                    <Text as="b">Email:</Text> deeporion@gmail.com
                </Text>
            </Box>
        </>
    }
};
