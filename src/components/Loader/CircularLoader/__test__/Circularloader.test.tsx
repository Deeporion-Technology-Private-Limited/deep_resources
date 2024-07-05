import { render, screen } from '@testing-library/react';
import { CircularLoader } from '../index';
import '@testing-library/jest-dom';

describe('CircularLoader component', () => {
  it('renders without crashing', () => {
    render(<CircularLoader />);
    const loader = screen.getByTestId('circularLoader');
    expect(loader).toBeInTheDocument();
  });

  it('applies default styles correctly', () => {
    render(<CircularLoader />);
    const loader = screen.getByTestId('circularLoader');
    expect(loader.firstChild).toHaveStyle({
      border: '8px solid #f3f3f3',
      borderTop: '8px solid blue',
      borderRadius: '50%',
      width: '60px',
      height: '60px',
      animation: 'spin 2s linear infinite',
    });
  });

  it('applies custom styles correctly', () => {
    render(
      <CircularLoader
        border="10px solid red"
        borderTop="10px solid green"
        borderRadius="20%"
        width="80px"
        height="80px"
        animation="spin 3s linear infinite"
      />
    );
    const loader = screen.getByTestId('circularLoader');
    expect(loader.firstChild).toHaveStyle({
      border: '10px solid red',
      borderTop: '10px solid green',
      borderRadius: '20%',
      width: '80px',
      height: '80px',
      animation: 'spin 3s linear infinite',
    });
  });

  it('renders children correctly', () => {
    render(<CircularLoader>Loading...</CircularLoader>);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
