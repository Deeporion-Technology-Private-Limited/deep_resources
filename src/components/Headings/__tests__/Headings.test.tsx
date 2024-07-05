// src/components/Headings/__tests__/Headings.test.tsx

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Headings } from '../index.tsx';

describe('Headings Component', () => {
  it('renders Heading component with custom props', () => {
  

    render(<Headings 
        text= 'Default Heading'
      FontSize= 'text-3xl'
      fontWeight= 'font-normal'/>);

    const headingElement = screen.getByText('Default Heading') as HTMLElement;

    // // Assert that the heading element is rendered with the correct props applied
    expect(headingElement).toBeInTheDocument();
    
  });
  it('renders with default props', () => {
    const { getByText } = render(<Headings text="Hello World" fontWeight={''} />);
    expect(getByText('Hello World')).toBeInTheDocument();
  });
  it('applies the correct font size and weight', () => {
    render(<Headings text="Styled Heading" FontSize="text-lg" fontWeight="font-bold" />);
    const headingElement = screen.getByText('Styled Heading')  as HTMLElement;
    expect(headingElement).toHaveClass('text-lg font-bold');
  });
});
