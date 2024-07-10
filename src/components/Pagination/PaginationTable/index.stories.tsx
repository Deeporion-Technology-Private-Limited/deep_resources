import  { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Paginations,{PaginationPropsTable} from '.'; 
import { ButtonSize } from '@/components/Button/type';
import { Shape, Variants } from '../type';

export default {
  title: 'Components/Pagination/PaginationTable',
  component: Paginations,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta;

const Template = (args:PaginationPropsTable) => {
  const [currentPage, setCurrentPage] = useState(args.currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Paginations
      {...args}
      currentPage={currentPage}
      onPageChange={handlePageChange}
    />
  );
};

export const Default: StoryObj<PaginationPropsTable> = (args:PaginationPropsTable) => <Template {...args} />;
Default.args = {
  totalItems: 20,
  itemsPerPage: 5,
  currentPage: 1,
  size: ButtonSize.Medium,
  variant: Variants.Text,
  shape: Shape.Rounded,
};

export const Outlined: StoryObj<PaginationPropsTable> = (args:PaginationPropsTable) => <Template {...args} />;

Outlined.args = {
  totalItems: 50,
  itemsPerPage: 10,
  currentPage: 1,
  customButtonSize:"3rem",
  size: ButtonSize.Medium,
  variant: Variants.Outlined,
  shape: Shape.Rounded,
};
export const Contained: StoryObj<PaginationPropsTable> = (args:PaginationPropsTable) => <Template {...args} />;

Contained.args = {
  totalItems: 100,
  itemsPerPage: 20,
  currentPage: 1,
  size:ButtonSize.Medium,
  customButtonSize:"3rem",
  variant: Variants.Contained,
  shape: Shape.Rounded,
};
export const LargeSquare: StoryObj<PaginationPropsTable> = (args:PaginationPropsTable) => <Template {...args} />;

LargeSquare.args = {
  totalItems: 10,
  itemsPerPage: 2,
  currentPage: 1,
  iconStyle:"size-10",
  size: ButtonSize.Large,
  variant: Variants.Outlined,
  shape: Shape.Square,
};
