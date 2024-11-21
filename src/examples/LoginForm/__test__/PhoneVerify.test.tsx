
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PhoneVerify from '../PhoneVerify';

jest.mock('../type', () => ({
  Login: {
    Logo: 'Test Logo',
    PhoneVerification: 'Phone Verification',
    EnterCode: 'Enter the code sent to your phone',
    DidNotReceive: "Didn't receive the code?",
    Resend: 'Resend',
    Verify: 'Verify',
  },
}));

describe('PhoneVerify Component', () => {
  test('renders the component', () => {
    render(<PhoneVerify />);

    expect(screen.getByText('Test Logo')).toBeInTheDocument();
    expect(screen.getByText('Phone Verification')).toBeInTheDocument();
    expect(screen.getByText('Enter the code sent to your phone')).toBeInTheDocument();
    expect(screen.getByText("Didn't receive the code?")).toBeInTheDocument();
    expect(screen.getByText('Resend')).toBeInTheDocument();
    expect(screen.getByText('Verify')).toBeInTheDocument();
  });

  test('renders six input fields', () => {
    render(<PhoneVerify />);
    
    const inputs = screen.getAllByRole('textbox');
    expect(inputs).toHaveLength(6);
  });

  test('focuses on the next input field when a digit is entered', () => {
    render(<PhoneVerify />);
    
    const inputs = screen.getAllByRole('textbox');
    
    fireEvent.input(inputs[0], { target: { value: '1' } });
    expect(inputs[1]).toHaveFocus();

    fireEvent.input(inputs[1], { target: { value: '2' } });
    expect(inputs[2]).toHaveFocus();
  });

  test('logs the OTP when Verify button is clicked', () => {
    console.log = jest.fn(); // Mock console.log

    render(<PhoneVerify />);

    const inputs = screen.getAllByRole('textbox');
    fireEvent.input(inputs[0], { target: { value: '1' } });
    fireEvent.input(inputs[1], { target: { value: '2' } });
    fireEvent.input(inputs[2], { target: { value: '3' } });
    fireEvent.input(inputs[3], { target: { value: '4' } });
    fireEvent.input(inputs[4], { target: { value: '5' } });
    fireEvent.input(inputs[5], { target: { value: '6' } });

    const verifyButton = screen.getByTestId('VerifyBtn');
    fireEvent.click(verifyButton);

    expect(console.log).toHaveBeenCalledWith('otp:-', '123456');
  });

  test('Verify button is clickable', () => {
    render(<PhoneVerify />);
    
    const verifyButton = screen.getByTestId('VerifyBtn');
    expect(verifyButton).toBeInTheDocument();
    fireEvent.click(verifyButton);
  });
});
