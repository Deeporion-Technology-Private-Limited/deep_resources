import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormInput from '../index';
import {
    InputType,
    InputVariant,
  } from "@/components/types";
describe('FormInput Component', () => {
  test('renders the input field', () => {
    const { getByPlaceholderText } = render(
      <FormInput type={InputType.Name} name="testName" placeholder="Test Placeholder" variant={InputVariant.Standard} />
    );

    expect(getByPlaceholderText('Test Placeholder')).toBeInTheDocument();
  });

  test('renders the label and asterisk', () => {
    const { getByText } = render(
      <FormInput
        type={InputType.Text}
        name="testName"
        label="Test Label"
        labelAsterisk="*"
        variant={InputVariant.Standard}
      />
    );

    expect(getByText('Test Label')).toBeInTheDocument();
    expect(getByText('*')).toBeInTheDocument();
  });

  test('changes value on user input', () => {
    const { getByPlaceholderText } = render(
      <FormInput variant={InputVariant.Standard} type={InputType.Text} name="testName" placeholder="Test Placeholder" />
    );

    const input = getByPlaceholderText('Test Placeholder');
    fireEvent.change(input, { target: { value: 'New Value' } });
    expect(input).toHaveValue('New Value');
  });

  test('handles additional props', () => {
    const handleBlur = jest.fn();
    const { getByPlaceholderText } = render(
      <FormInput
        type={InputType.Text}
        name="testName"
        placeholder="Test Placeholder"
        onBlur={handleBlur}
        variant={InputVariant.Standard}
      />
    );

    const input = getByPlaceholderText('Test Placeholder');
    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalled();
  });

  test('handles readOnly state', () => {
    const { getByPlaceholderText } = render(
      <FormInput
        type={InputType.Text}
        name="testName"
        placeholder="Test Placeholder"
        readOnly
        variant={InputVariant.Standard}
      />
    );

    const input = getByPlaceholderText('Test Placeholder');
    expect(input).toHaveAttribute('readOnly');
  });

  test('handles disabled state', () => {
    const { getByPlaceholderText } = render(
      <FormInput
        type={InputType.Text}
        name="testName"
        placeholder="Test Placeholder"
        disabled
        variant={InputVariant.Standard}
      />
    );

    const input = getByPlaceholderText('Test Placeholder');
    expect(input).toBeDisabled();
  });

  test('handles required state', () => {
    const { getByPlaceholderText } = render(
      <FormInput
        type={InputType.Text}
        name="testName"
        placeholder="Test Placeholder"
        required
        variant={InputVariant.Standard}
      />
    );

    const input = getByPlaceholderText('Test Placeholder');
    expect(input).toBeRequired();
  });
  test('handles Password', () => {
    const { getByPlaceholderText,getByTestId } = render(
      <FormInput
        type={InputType.Password}
        name="testName"
        placeholder="Test Placeholder"
        required
        variant={InputVariant.Standard}
      />
    );

    const input = getByPlaceholderText('Test Placeholder');
    expect(input).toBeRequired();
    const password =getByTestId("Passwordtest")
    fireEvent.click(password)

  });
  test('toggles password visibility', () => {
    const {  getByTestId } = render(
      <FormInput  variant={InputVariant.Standard} type={InputType.Password} name="testPassword" placeholder="Enter Password" />
    );

  
   const toggleButton = getByTestId("PasswordToggleIcon");
   fireEvent.click(toggleButton);
   

  });
});
