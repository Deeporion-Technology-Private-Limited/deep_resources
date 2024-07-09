import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import SplashScreen from '../SplashScreen';

jest.mock('../type', () => ({
  Login: {
    Logo: 'Test Logo',
    Elevate: 'Elevate Your Experience',
    Enheance: 'Enhance your shopping journey with our app.',
    NewShopping: 'Discover New Shopping Trends',
  },
}));
jest.mock('../../../images/backimage.png', () => 'backimage.png');

describe('SplashScreen Component', () => {
  test('renders the component with the correct text', () => {
    render(<SplashScreen />);
    expect(screen.getByText('Test Logo')).toBeInTheDocument();
    expect(screen.getByText('Elevate Your Experience')).toBeInTheDocument();
    expect(screen.getByText('Enhance your shopping journey with our app.')).toBeInTheDocument();
    expect(screen.getByText('Discover New Shopping Trends')).toBeInTheDocument();
  });


  test('applies the correct styles to text elements', () => {
    render(<SplashScreen />);

    const elevateText = screen.getByText('Elevate Your Experience');
    expect(elevateText).toHaveClass('w-80');
    const newShoppingText = screen.getByText('Discover New Shopping Trends');
    expect(newShoppingText).toHaveClass('absolute bottom-28 left-56 w-96 text-center text-white text-3xl');
  });
});
