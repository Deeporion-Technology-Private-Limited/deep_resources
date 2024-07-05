import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AutoComplete } from '../index'; 
import CrossIcon  from '../index'
describe('AutoComplete', () => {
  const suggestions = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

  it('renders correctly with default props', () => {
    render(<AutoComplete suggestions={suggestions} />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  it('filters suggestions based on input', () => {
    render(<AutoComplete suggestions={suggestions} />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'a' } });
    const filteredSuggestions = screen.getAllByRole('listitem');
    expect(filteredSuggestions.length).toBe(3); 
  });

  it('selects a suggestion', () => {
    render(<AutoComplete suggestions={suggestions} />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'a' } });
    fireEvent.click(screen.getByText('Apple'));
    expect(inputElement).toHaveValue('Apple');
  });

  it('clears input field', () => {
    render(<AutoComplete suggestions={suggestions} />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'Banana' } });
    fireEvent.click(screen.getByTestId('Crossicon'));    

    
    expect(inputElement).toHaveValue('');
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  it('toggles suggestions dropdown', () => {
    render(<AutoComplete suggestions={suggestions} />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'a' } });
    const toggleButton = screen.getByTestId('DropDownArrowIcon');
    fireEvent.click(toggleButton);
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  it('handles multiple values selection', () => {
    render(<AutoComplete suggestions={suggestions} type="multivalues" />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'Apple' } });
    fireEvent.click(screen.getByText('Apple'));
    render(<CrossIcon suggestions={[]}  />)
    const crossIcon = screen.getByTestId("Crossicon");
    fireEvent.click(crossIcon);
  });

  it('removes a selected item', () => {
    render(<AutoComplete suggestions={suggestions} type="multivalues" />);
    const inputElement = screen.getByRole('textbox');
    fireEvent.change(inputElement, { target: { value: 'a' } });
    fireEvent.click(screen.getByText('Apple'));
  });
});
