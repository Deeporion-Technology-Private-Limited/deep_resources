import type { Meta, StoryObj } from "@storybook/react";
import { LogoImg } from ".";

const meta: Meta<typeof LogoImg> = {
  title: "Components/LogoImg",
  component: LogoImg,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1717135200&semt=sph",
  },
};
