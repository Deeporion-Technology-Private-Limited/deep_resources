import { render,fireEvent } from '@testing-library/react';
import Pagination from '../index';
import '@testing-library/jest-dom';

describe('Pagination component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Pagination currentPage={1} onPageChange={() => {}} totalPages={5} />);
    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('2')).toBeInTheDocument();
    expect(getByText('3')).toBeInTheDocument();
    expect(getByText('4')).toBeInTheDocument();
    expect(getByText('5')).toBeInTheDocument();
  });

  it('calls onPageChange when a page is clicked', () => {
    const onPageChange = jest.fn();
    const { getByText } = render(<Pagination currentPage={1} onPageChange={onPageChange} totalPages={5} />);
    const page2Button = getByText('2');
    fireEvent.click(page2Button);
    expect(onPageChange).toHaveBeenCalledTimes(1);
    expect(onPageChange).toHaveBeenCalledWith(2);
  });

  it('disables previous button when on first page', () => {
    const { getByTestId } = render(<Pagination currentPage={1} onPageChange={() => {}} totalPages={5} />);
    const prevButton = getByTestId('previouspage');
    // fireEvent.click(prevButton);
    expect(prevButton).toBeDisabled();
  });

  
  it('When previous button is clicked', () => {
    const { getByTestId } = render(<Pagination currentPage={2} onPageChange={() => {}} totalPages={5} />);
    const prevButton = getByTestId('previouspage');
    fireEvent.click(prevButton);
    // expect(prevButton).toBeDisabled();
  });

  it('When the current page is less than two of total page', () => {
    const { getByTestId } = render(<Pagination currentPage={9} onPageChange={() => {}} totalPages={10} />);
    const prevButton = getByTestId('previouspage');
    fireEvent.click(prevButton);
    // expect(prevButton).toBeDisabled();
  });

  it('When the total page is greater than five and current page is greater than three', () => {
    const { getByTestId } = render(<Pagination currentPage={5} onPageChange={() => {}} totalPages={10} />);
    const prevButton = getByTestId('previouspage');
    fireEvent.click(prevButton);
    // expect(prevButton).toBeDisabled();
  });

  it('disables next button when on last page', () => {
    const { getByTestId } = render(<Pagination currentPage={5} onPageChange={() => {}} totalPages={5} />);
    const nextButton = getByTestId('nextPage');
    fireEvent.click(nextButton);
    expect(nextButton).toBeDisabled();
  });

  it('When next button is to clicked', () => {
    const { getByTestId } = render(<Pagination currentPage={4} onPageChange={() => {}} totalPages={5} />);
    const nextButton = getByTestId('nextPage');
    fireEvent.click(nextButton);
  });
  it('renders ellipsis when there are more than 5 pages', () => {
    const { getByText } = render(<Pagination currentPage={3} onPageChange={() => {}} totalPages={10} />);
    expect(getByText('...')).toBeInTheDocument();
  });

  it('renders custom button size correctly', () => {
    const { getByText } = render(<Pagination currentPage={1} onPageChange={() => {}} totalPages={5} customButtonSize="40px" />);
    const button = getByText('1');
    expect(button).toHaveStyle({ width: '40px', height: '40px' });
  });

});