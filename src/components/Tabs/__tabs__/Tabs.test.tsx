import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Tabs } from '..';

const mockTabs = [
  { label: 'Tab 1', content: <div>Content 1</div> },
  { label: 'Tab 2', content: <div>Content 2</div> },
  { label: 'Tab 3', content: <div>Content 3</div> },
];

describe('Tabs Component', () => {
  test('renders all tabs correctly', () => {
    const { getByText } = render(<Tabs tabs={mockTabs} />);

    mockTabs.forEach(tab => {
      expect(getByText(tab.label)).toBeInTheDocument();
    });
  });

  test('displays the content of the default active tab', () => {
    const { getByText } = render(<Tabs tabs={mockTabs} />);

    expect(getByText('Content 1')).toBeInTheDocument();
  });

  test('changes active tab on click', () => {
    const { getByText } = render(<Tabs tabs={mockTabs} />);

    const tab2 = getByText('Tab 2');
    fireEvent.click(tab2);

    expect(getByText('Content 2')).toBeInTheDocument();
  });


});
