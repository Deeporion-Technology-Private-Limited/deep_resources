import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PhoneLogin from '../PhoneLogin';
import { Login } from '../type';

jest.mock('../../images/backimage.png', () => 'backimage.png');

describe('PhoneLogin Component', () => {
  test('renders the component', () => {
    render(<PhoneLogin />);
    
    expect(screen.getByText(Login.Logo)).toBeInTheDocument();
    expect(screen.getByText(Login.VerificationCode)).toBeInTheDocument();
    expect(screen.getByText(Login.PhoneNum)).toBeInTheDocument();
    expect(screen.getByText(Login.NoAccount)).toBeInTheDocument();
    expect(screen.getByText(Login.Register)).toBeInTheDocument();
    expect(screen.getByText(Login.NewShopping)).toBeInTheDocument();

  });

  test('renders input with prefix', () => {
    render(<PhoneLogin />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('type', 'prefix');
  });

  test('handles Login button click', () => {
    render(<PhoneLogin />);
    
    const loginButton = screen.getByTestId("LoginBtn");
    fireEvent.click(loginButton);
    
  
  });

  test('handles Register link click', () => {
    render(<PhoneLogin />);
    
    const registerLink = screen.getByText(Login.Register);
    fireEvent.click(registerLink);
    
    
  });
});
