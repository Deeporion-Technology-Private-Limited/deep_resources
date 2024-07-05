import { render, screen, fireEvent } from '@testing-library/react';
import { Menu } from '../index';
import '@testing-library/jest-dom';

describe('Menu component', () => {
  it('renders without crashing', () => {
    render(<Menu label="Menu Label" />);
    const menuElement = screen.getByText('Menu Label');
    expect(menuElement).toBeInTheDocument();
  });

  it('toggles menu open and close on click', () => {
    render(<Menu label="Menu Label"><div>Menu Item 1</div><div>Menu Item 2</div></Menu>);
    const menuElement = screen.getByText('Menu Label');
    fireEvent.click(menuElement);
    expect(screen.getByText('Menu Item 1')).toBeInTheDocument();
    expect(screen.getByText('Menu Item 2')).toBeInTheDocument();

    fireEvent.click(menuElement);
    expect(screen.queryByText('Menu Item 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Menu Item 2')).not.toBeInTheDocument();
  });


  it('renders children correctly', () => {
    render(<Menu label="Menu Label"><div>Menu Item 1</div><div>Menu Item 2</div></Menu>);
    const menuElement = screen.getByText('Menu Label');
    fireEvent.click(menuElement);
    expect(screen.getByText('Menu Item 1')).toBeInTheDocument();
    expect(screen.getByText('Menu Item 2')).toBeInTheDocument();
  });
});
