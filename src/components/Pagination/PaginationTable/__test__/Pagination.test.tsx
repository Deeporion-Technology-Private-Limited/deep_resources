import { render, fireEvent } from '@testing-library/react';
import Paginations from '../index';
import '@testing-library/jest-dom';

describe('Pagination component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Paginations totalItems={100} itemsPerPage={10} currentPage={1} onPageChange={() => {}} />
    );
    expect(getByText('1-10 of 100')).toBeInTheDocument();
  });

  it('calls onPageChange when a page is clicked', () => {
    const onPageChange = jest.fn();
    const { getByText,getByTestId } = render(
      <Paginations totalItems={100} itemsPerPage={10} currentPage={1} onPageChange={onPageChange} />
    );
    fireEvent.click(getByText('1-10 of 100'));
    const nextButton = getByTestId('nextPage');
    fireEvent.click(nextButton);
    expect(onPageChange).toHaveBeenCalledTimes(1);
  });

  it('disables previous button when on first page', () => {
    const { getByTestId } = render(
      <Paginations totalItems={100} itemsPerPage={10} currentPage={1} onPageChange={() => {}} />
    );
    const prevButton = getByTestId('previousPage');
    expect(prevButton).toBeDisabled();
  });

  it('calls onPageChange when previous button is clicked', () => {
    const onPageChange = jest.fn();
    const { getByTestId } = render(
      <Paginations totalItems={100} itemsPerPage={10} currentPage={2} onPageChange={onPageChange} />
    );
    const prevButton = getByTestId('previousPage');
    fireEvent.click(prevButton);
    expect(onPageChange).toHaveBeenCalledWith(1);
  });

  it('disables next button when on last page', () => {
    const { getByTestId } = render(
      <Paginations totalItems={100} itemsPerPage={10} currentPage={10} onPageChange={() => {}} />
    );
    const nextButton = getByTestId('nextPage');
    expect(nextButton).toBeDisabled();
  });

  it('calls onPageChange when next button is clicked', () => {
    const onPageChange = jest.fn();
    const { getByTestId } = render(
      <Paginations totalItems={100} itemsPerPage={10} currentPage={9} onPageChange={onPageChange} />
    );
    const nextButton = getByTestId('nextPage');
    fireEvent.click(nextButton);
    expect(onPageChange).toHaveBeenCalledWith(10);
  });

  it('renders custom button size correctly', () => {
    const { getByTestId } = render(
      <Paginations
        totalItems={100}
        itemsPerPage={10}
        currentPage={1}
        onPageChange={() => {}}
        customButtonSize="40px"
      />
    );
    const prevButton = getByTestId('previousPage');
    expect(prevButton).toHaveStyle({ width: '40px', height: '40px' });
  });
});
