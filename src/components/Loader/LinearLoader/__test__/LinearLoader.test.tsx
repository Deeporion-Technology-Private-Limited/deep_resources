import { render, screen } from '@testing-library/react';
import { LinearLoader } from '../index';
import '@testing-library/jest-dom';

describe('LinearLoader component', () => {
  it('renders without crashing', () => {
    render(<LinearLoader value={50} animationDuration="2s" />);
    const loader = screen.getByTestId('LinearLoader');
    expect(loader).toBeInTheDocument();
  });


  it('applies custom styles correctly', () => {
    render(
      <LinearLoader
        value={50}
        color="red"
        backgroundColor="yellow"
        height="20px"
        animationDuration="1s"
      />
    );
    const loader = screen.getByTestId('LinearLoader');
    
    expect(loader).toHaveStyle({
      backgroundColor: 'red',
      height: '20px',
      width: '100px',
      overflow: 'hidden',
      position: 'absolute',
      animationName: 'example',
      animationDuration: '1s',
      animationDelay: '0.5s',
      animationIterationCount: 'infinite',
      animationDirection: 'normal',
    });
  });

  it('renders children correctly', () => {
    render(<LinearLoader value={50} animationDuration="2s">Loading...</LinearLoader>);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});


