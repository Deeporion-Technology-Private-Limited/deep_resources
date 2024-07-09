import { render, fireEvent,screen } from '@testing-library/react';
import  Authentication  from '../Authentication';
import '@testing-library/jest-dom';
import {Login} from "../type"

describe('Authentication component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Authentication />);
    expect(getByText(Login.VerifyOTP)).toBeInTheDocument();
  });

  it('renders input fields correctly', () => {
    const { getAllByRole } = render(<Authentication />);
    const inputs = getAllByRole('textbox');
    expect(inputs.length).toBe(4);
  });

  it('calls handleChange when input value changes', () => {
    const { getAllByRole } = render(<Authentication />);
    const inputs = getAllByRole('textbox');
    fireEvent.change(inputs[0], { target: { value: '123' } });
  });

  it('calls handleVerify when verify button is clicked', () => {
    const { getByTestId ,getAllByRole} = render(<Authentication />);
    const verifyButton = getByTestId("VerifyBtn"); 
    fireEvent.click(verifyButton);
    const inputs = getAllByRole('textbox');
    const verifyButtons = screen.getByText(Login.Verify);

    inputs.forEach((input:any, index) => {
      fireEvent.change(input, { target: { value: `${index + 1}` } });
      expect(input.value).toBe(`${index + 1}`);
    });

    fireEvent.click(verifyButtons);
    expect(screen.getByText('Verify Successfully')).toBeInTheDocument();
    
  });

  it('displays error message when inputs are invalid', () => {
    const { getAllByRole } = render(<Authentication />);
    const inputs = getAllByRole('textbox');
    fireEvent.change(inputs[0], { target: { value: 'abc' } });
    fireEvent.change(inputs[1], { target: { value: 'def' } });
  
  });

  it('displays success message when inputs are valid', () => {
    const {  getAllByRole } = render(<Authentication />);
    const inputs = getAllByRole('textbox');
    fireEvent.change(inputs[0], { target: { value: '1234' } });
    fireEvent.change(inputs[1], { target: { value: '5678' } });
    fireEvent.change(inputs[2], { target: { value: '9012' } });
    fireEvent.change(inputs[3], { target: { value: '3456' } });
    
  });
});