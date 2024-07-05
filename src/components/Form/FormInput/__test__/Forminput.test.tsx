import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormInput from '../index';

describe('FormInput Component', () => {
  test('renders the input field', () => {
    const { getByPlaceholderText } = render(
      <FormInput type="text" name="testName" placeholder="Test Placeholder" variant={''} />
    );

    expect(getByPlaceholderText('Test Placeholder')).toBeInTheDocument();
  });

  test('renders the label and asterisk', () => {
    const { getByText } = render(
      <FormInput
            type="text"
            name="testName"
            label="Test Label"
            labelAsterisk="*" variant={''}      />
    );

    expect(getByText('Test Label')).toBeInTheDocument();
    expect(getByText('*')).toBeInTheDocument();
  });

  test('changes value on user input', () => {
    const { getByPlaceholderText } = render(
      <FormInput type="text" name="testName" placeholder="Test Placeholder" variant={''} />
    );

    const input = getByPlaceholderText('Test Placeholder');
    fireEvent.change(input, { target: { value: 'New Value' } });
    expect(input).toHaveValue('New Value');
  });

  test('handles additional props', () => {
    const handleBlur = jest.fn();
    const { getByPlaceholderText } = render(
      <FormInput
            type="text"
            name="testName"
            placeholder="Test Placeholder"
            onBlur={handleBlur} variant={''}      />
    );

    const input = getByPlaceholderText('Test Placeholder');
    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalled();
  });


});
