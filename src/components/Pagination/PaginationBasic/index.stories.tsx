import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Pagination, { PaginationProps } from "./index";
import { Color, Shape, Variants } from "../type";
import { ButtonSize } from "@/components/Button/type";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination/PaginationBasic",
  component: Pagination,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};
export default meta;

const PaginationTemplate = (args: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage || 1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Pagination
      {...args}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  );
};

export const Default: StoryObj<PaginationProps> = (args: PaginationProps) => (
  <PaginationTemplate {...args} />
);
Default.args = {
  currentPage: 1,
  size: ButtonSize.Medium,
  shape: Shape.Rounded,
  variant: Variants.Text,
  activeColor: Color.Secondary,
  totalPages: 5,
};

export const OutlinedVariant: StoryObj<PaginationProps> = (
  args: PaginationProps
) => <PaginationTemplate {...args} />;

OutlinedVariant.args = {
  currentPage: 1,
  size: ButtonSize.Medium,
  shape: Shape.Rounded,
  activeColor: Color.Success,
  variant: Variants.Outlined,
  totalPages: 25,
};

export const ContainedVariant: StoryObj<PaginationProps> = (
  args: PaginationProps
) => <PaginationTemplate {...args} />;
ContainedVariant.args = {
  currentPage: 1,
  activeColor: Color.Danger,
  shape: Shape.Rounded,
  variant: Variants.Contained,
  totalPages: 20,
};

export const SquareShape: StoryObj<PaginationProps> = (
  args: PaginationProps
) => <PaginationTemplate {...args} />;
SquareShape.args = {
  currentPage: 1,
  shape: Shape.Square,
  variant: Variants.Outlined,
  activeColor: Color.Primary,
  iconStyle: "size-8",
  totalPages: 10,
};
