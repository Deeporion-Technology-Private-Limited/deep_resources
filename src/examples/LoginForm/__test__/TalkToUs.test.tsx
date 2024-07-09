import { render, screen,fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import {TalkToUsForm} from '../TalkToUs';
import {Login} from "../type"
import { Placeholder } from '@/components/Input/type';
describe('TalkToUsForm Component', () => {
  it('renders the component', () => {
    render(<TalkToUsForm />);
    const formElement = screen.getByText(Login.TalkToUs);
    expect(formElement).toBeInTheDocument();
  });

  it('handles input changes correctly', () => {
    render(<TalkToUsForm />);
    const nameInput = screen.getByPlaceholderText(Placeholder.Name);
    const emailInput = screen.getByPlaceholderText(Placeholder.Email);
    const phoneInput = screen.getByPlaceholderText(Placeholder.PhoneNumber);
    const subjectInput = screen.getByPlaceholderText(Placeholder.Subject);
    const detailsInput = screen.getByPlaceholderText(Placeholder.Details);

    fireEvent.change(nameInput, {target : {value:'John Doe'}});
    fireEvent.change(emailInput, {target : {value:'johndoe@example.com'}});
    fireEvent.change(phoneInput, {target : {value:'1234567890'}});
    fireEvent.change(subjectInput, {target : {value:'Test Subject'}});
    fireEvent.change(detailsInput, {target : {value:'Test details for form.'}});

    // Check if inputs are correctly updated
    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('johndoe@example.com');
    expect(phoneInput).toHaveValue('1234567890');
    expect(subjectInput).toHaveValue('Test Subject');
    expect(detailsInput).toHaveValue('Test details for form.');
  });

  it('validates form submission correctly', () => {
    render(<TalkToUsForm />);
    const submitButton = screen.getByTestId("SubmitBtn")

    // Click submit button without filling any fields
    fireEvent.click(submitButton);

    // Check error message
    const errorMessage = screen.getByText('Please fill in all fields.');
    expect(errorMessage).toBeInTheDocument();

    // Fill in form fields
    const nameInput = screen.getByPlaceholderText(Placeholder.Name);
    const emailInput = screen.getByPlaceholderText(Placeholder.Email);
    const phoneInput = screen.getByPlaceholderText(Placeholder.PhoneNumber);
    const subjectInput = screen.getByPlaceholderText(Placeholder.Subject);
    const detailsInput = screen.getByPlaceholderText(Placeholder.Details);

    fireEvent.change(nameInput, {target : {value:'John Doe'}});
    fireEvent.change(emailInput, {target : {value:'johndoe@example.com'}});
    fireEvent.change(phoneInput, {target : {value:'1234567890'}});
    fireEvent.change(subjectInput, {target : {value:'Test Subject'}});
    fireEvent.change(detailsInput, {target : {value:'Test details for form.'}});


    // Click submit button again
    fireEvent.click(submitButton);

    // Check success message
    const successMessage = screen.getByText('Form submitted successfully!');
    expect(successMessage).toBeInTheDocument();
  });
});
