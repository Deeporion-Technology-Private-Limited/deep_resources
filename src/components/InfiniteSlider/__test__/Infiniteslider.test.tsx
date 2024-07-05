import { render, screen } from '@testing-library/react';
import AutoCarousel from '../index';
import '@testing-library/jest-dom';

describe('AutoCarousel component', () => {
  const items = [
    { id: 1, name: 'Item 1', logoUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Item 2', logoUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Item 3', logoUrl: 'https://via.placeholder.com/150' },
  ];

  it('renders without crashing', () => {
    render(<AutoCarousel items={items} />);
   
  });

  it('duplicates items for infinite scrolling', () => {
    render(<AutoCarousel items={items} />);
    
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(items.length * 2);
  });


  it('renders items with and without logos', () => {
    const itemsWithAndWithoutLogos = [
      { id: 1, name: 'Item 1', logoUrl: 'https://via.placeholder.com/150' },
      { id: 2, name: 'Item 2' },
    ];
    render(<AutoCarousel items={itemsWithAndWithoutLogos} />);
   
  });

});
