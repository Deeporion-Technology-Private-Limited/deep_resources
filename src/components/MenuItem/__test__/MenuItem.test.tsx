import { render, screen, fireEvent } from '@testing-library/react';
import { MenuItem } from '../index';
import '@testing-library/jest-dom';

describe('MenuItem component', () => {
  it('renders without crashing', () => {
    render(<MenuItem label="Menu Item Label" />);
    const menuItemElement = screen.getByText('Menu Item Label');
    expect(menuItemElement).toBeInTheDocument();
  });

  it('renders left icon and label correctly', () => {
    render(<MenuItem label="Menu Item Label" leftIcon={<span>Left Icon</span>} />);
    const menuItemElement = screen.getByText('Menu Item Label');
    const leftIconElement = screen.getByText('Left Icon');
    expect(menuItemElement).toBeInTheDocument();
    expect(leftIconElement).toBeInTheDocument();
  });

  it('renders right icon and label correctly', () => {
    render(<MenuItem label="Menu Item Label" rightIcon={<span>Right Icon</span>} />);
    const menuItemElement = screen.getByText('Menu Item Label');
    const rightIconElement = screen.getByText('Right Icon');
    expect(menuItemElement).toBeInTheDocument();
    expect(rightIconElement).toBeInTheDocument();
  });

  it('renders both left and right icons correctly', () => {
    render(<MenuItem label="Menu Item Label" leftIcon={<span>Left Icon</span>} rightIcon={<span>Right Icon</span>} />);
    const menuItemElement = screen.getByText('Menu Item Label');
    const leftIconElement = screen.getByText('Left Icon');
    const rightIconElement = screen.getByText('Right Icon');
    expect(menuItemElement).toBeInTheDocument();
    expect(leftIconElement).toBeInTheDocument();
    expect(rightIconElement).toBeInTheDocument();
  });

  it('handles click events correctly', () => {
    const handleClick = jest.fn();
    render(<MenuItem label="Menu Item Label" onClick={handleClick} />);
    const menuItemElement = screen.getByText('Menu Item Label');
    fireEvent.click(menuItemElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('toggles submenu visibility correctly', () => {
    render(
      <MenuItem label="Menu Item Label" isSubmenu>
        <div>Submenu Item</div>
      </MenuItem>
    );
    const menuItemElement = screen.getByText('Menu Item Label');
    fireEvent.click(menuItemElement);
    expect(screen.getByText('Submenu Item')).toBeInTheDocument();

    fireEvent.click(menuItemElement);
    expect(screen.queryByText('Submenu Item')).not.toBeInTheDocument();
  });

  it('changes right icon on click when wannaChangRightIcon is true', () => {
    render(
      <MenuItem label="Menu Item Label" rightIcon={<span>Right Icon</span>} wannaChangRightIcon>
        <div>Submenu Item</div>
      </MenuItem>
    );
    const menuItemElement = screen.getByText('Menu Item Label');
    fireEvent.click(menuItemElement);
   
  });
});
