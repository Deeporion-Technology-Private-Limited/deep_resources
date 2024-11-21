import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PasswordRecovery from '../PasswordRecovery';
import { Login } from '../type';

// Mock the imported image
jest.mock('../../images/backimage.png', () => 'backimage.png');

describe('PasswordRecovery Component', () => {
  test('renders the component', () => {
    render(<PasswordRecovery />);
    
    expect(screen.getByText(Login.Logo)).toBeInTheDocument();
    expect(screen.getByText(Login.PasswordRecovery)).toBeInTheDocument();
    expect(screen.getByText(Login.CheckMail)).toBeInTheDocument();
    expect(screen.getByText(Login.SentLink)).toBeInTheDocument();
    expect(screen.getByText(Login.ResendEmail)).toBeInTheDocument();
    expect(screen.getByText(Login.BackTo)).toBeInTheDocument();
    expect(screen.getByText(Login.Login)).toBeInTheDocument();
 
  });

  test('handles Resend Email button click', () => {
    render(<PasswordRecovery />);
    
    const resendEmailButton = screen.getByText(Login.ResendEmail);
    fireEvent.click(resendEmailButton);
    
    // Add assertions based on what should happen when Resend Email is clicked
    // This will depend on how the component is expected to behave
  });

  test('handles Back to Login button click', () => {
    render(<PasswordRecovery />);
    
    const backToLoginButton = screen.getByText(Login.BackTo);
    fireEvent.click(backToLoginButton);
    
    // Add assertions based on what should happen when Back to Login is clicked
    // This will depend on how the component is expected to behave
  });
});
