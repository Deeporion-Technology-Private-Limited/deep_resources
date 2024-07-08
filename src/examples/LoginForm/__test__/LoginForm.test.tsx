import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { LoginForm } from '../LoginForm';

describe('LoginForm Component', () => {
  it('renders without crashing', () => {
    render(<LoginForm />);
    expect(screen.getByTestId('LoginButton')).toBeInTheDocument();
  });

  it('updates the username and password fields correctly', () => {
    render(<LoginForm />);

    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    expect(usernameInput).toHaveValue('testuser');
    expect(passwordInput).toHaveValue('password');
  });

  it('displays an error message if username is empty on login', () => {
    render(<LoginForm />);

    const loginButton = screen.getByTestId('LoginButton');
    fireEvent.click(loginButton);

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });

  it('displays an error message if password is empty on login', () => {
    render(<LoginForm />);

    const usernameInput = screen.getByPlaceholderText('Username');
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });

    const loginButton = screen.getByTestId('LoginButton');
    fireEvent.click(loginButton);

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });

  it('displays success message on successful login', () => {
    render(<LoginForm />);

    const usernameInput = screen.getByPlaceholderText('Username');
    const passwordInput = screen.getByPlaceholderText('Password');

    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });

    const loginButton = screen.getByTestId('LoginButton');
    fireEvent.click(loginButton);

    expect(screen.getByText('Login Successfully')).toBeInTheDocument();
  });

  it('shows error styles for empty username field', () => {
    render(<LoginForm />);

    const loginButton = screen.getByTestId('LoginButton');
    fireEvent.click(loginButton);

    const usernameInput = screen.getByPlaceholderText('Username');
    expect(usernameInput).toHaveStyle('border-color: red');
  });

  it('shows error styles for empty password field', () => {
    render(<LoginForm />);

    const usernameInput = screen.getByPlaceholderText('Username');
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });

    const loginButton = screen.getByTestId('LoginButton');
    fireEvent.click(loginButton);

    const passwordInput = screen.getByPlaceholderText('Password');
    expect(passwordInput).toHaveStyle('border-color: red');
  });

  it('toggles password visibility', () => {
    render(<LoginForm />);

    const passwordInput = screen.getByPlaceholderText('Password');
    const toggleButton = screen.getByTestId('OpenEyeClick');

    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute('type', 'password');

    // fireEvent.click(toggleButton);
    // expect(passwordInput).toHaveAttribute('type', 'pas');
  });
});
