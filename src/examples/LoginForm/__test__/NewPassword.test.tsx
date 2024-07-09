
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewPassword from '../NewPassword';
import { Login } from '../type';
import { Placeholder } from '@/components/Input/type';
jest.mock('../../images/backimage.png', () => 'backimage.png');

describe('NewPassword Component', () => {
  test('renders the component', () => {
    render(<NewPassword />);
    
    expect(screen.getByText(Login.Logo)).toBeInTheDocument();
    
    // Use getAllByText to find all elements with "New password" text
    const newPasswordHeaders = screen.getAllByText(Login.NewPassword);
    expect(newPasswordHeaders[0]).toBeInTheDocument();
    expect(screen.getByPlaceholderText(Placeholder.YourNewPassword)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(Placeholder.ConfirmNew)).toBeInTheDocument();
    expect(screen.getByText(Login.MustContain)).toBeInTheDocument();
    expect(screen.getByText(Login.SetNew)).toBeInTheDocument();
    expect(screen.getByText(Login.BackTo)).toBeInTheDocument();
    expect(screen.getByText(Login.Login)).toBeInTheDocument();
  });

  test('shows error when passwords are less than 5 characters long', () => {
    render(<NewPassword />);
    
    const passwordInput = screen.getByPlaceholderText(Placeholder.YourNewPassword);
    const confirmPasswordInput = screen.getByPlaceholderText(Placeholder.ConfirmNew);
    const setNewButton = screen.getByText(Login.SetNew);

    fireEvent.change(passwordInput, { target: { value: '1234' } });
    fireEvent.change(confirmPasswordInput, { target: { value: '1234' } });

    fireEvent.click(setNewButton);
    expect(screen.getByText('Passwords must be at least 5 characters long.')).toBeInTheDocument();
  });

  test('shows error when passwords do not match', () => {
    render(<NewPassword />);
    
    const passwordInput = screen.getByPlaceholderText(Placeholder.YourNewPassword);
    const confirmPasswordInput = screen.getByPlaceholderText(Placeholder.ConfirmNew);
    const setNewButton = screen.getByText(Login.SetNew);

    fireEvent.change(passwordInput, { target: { value: '12345' } });
    fireEvent.change(confirmPasswordInput, { target: { value: '54321' } });

    fireEvent.click(setNewButton);
    expect(screen.getByText('Passwords do not match.')).toBeInTheDocument();
  });

  test('shows success message when passwords are valid and match', () => {
    render(<NewPassword />);
    
    const passwordInput = screen.getByPlaceholderText(Placeholder.YourNewPassword);
    const confirmPasswordInput = screen.getByPlaceholderText(Placeholder.ConfirmNew);
    const setNewButton = screen.getByText(Login.SetNew);

    fireEvent.change(passwordInput, { target: { value: '12345' } });
    fireEvent.change(confirmPasswordInput, { target: { value: '12345' } });

    fireEvent.click(setNewButton);
    expect(screen.getByText('Change Successfully')).toBeInTheDocument();
  });
});
