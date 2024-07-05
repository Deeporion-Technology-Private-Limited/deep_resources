
import { render, screen,fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from '../index';


const services = [{ name : "Phone",value : "1-800-123-4567"}, { name: 'Service 2', value: 'Value 2' }];

test('renders Footer component with heading', () => {
    const heading = { title: 'Test Title', titleStyle: 'test-title-style', titleColor: 'red' };
    render(<Footer heading={heading} />);
    const headingElement = screen.getByText('Test Title');
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveClass('test-title-style');
  });

  test('renders Footer component without heading style', () => {
    const heading = { title: 'Test Title',  titleColor: 'red' };
    render(<Footer heading={heading} />);
    const headingElement = screen.getByText('Test Title');
    expect(headingElement).toBeInTheDocument();
    
  });
  test('renders Footer component with list items', () => {
    const list = [ {
        name : "The Pinklay Story",
        href : "https://www.pinklay.com"
        }];
    render(<Footer list={list} />);
    list.forEach(item => {
      const listItem = screen.getByText(item.name);
      expect(listItem).toBeInTheDocument();
      expect(listItem.closest('a')).toHaveAttribute('href', item.href);
    });
  });
  test('handles input change event', () => {
    const handleInput = jest.fn();
    render(<Footer newsLetter={true} handleInput={handleInput} />);
    const inputElement = screen.getByPlaceholderText('Subscribe the newsletter');
    fireEvent.change(inputElement, { target: { value: 'test' } });
    expect(handleInput).toHaveBeenCalled();
  });


  test('renders Footer component with services', () => {
   
    render(<Footer services={services} />);
  });
  test('handles subscribe button click event', () => {
    const handleSubscribe = jest.fn();
    render(<Footer newsLetter={true} handleSubscribe={handleSubscribe} />);
    const buttonElement = screen.getByText('Subscribe');
    fireEvent.click(buttonElement);
    expect(handleSubscribe).toHaveBeenCalled();
  });

  test('renders Footer component with description', () => {
    const description = 'Test description';
    render(<Footer description={description} />);
   
  });

  test('renders Footer component with links', () => {
    const links = [{ iconUrl: 'icon1.png', onClick: jest.fn() }, { iconUrl: 'icon2.png', onClick: jest.fn() }];
    render(<Footer links={links} />);
    links.forEach((link, index) => {
      const iconButton = screen.getAllByRole('button')[index]; 
      fireEvent.click(iconButton);
      expect(link.onClick).toHaveBeenCalled();
    });
  });