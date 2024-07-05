import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { RoundedCorners } from '../index';
import { BorderRadius } from '../type';

describe('RoundedCorners component', () => {
  it('renders correctly with default border radius', () => {
    const { container } = render(<RoundedCorners />);
    expect(container.firstChild).toHaveClass('rounded-none');
  });

  it('renders correctly with small border radius', () => {
    const { container } = render(<RoundedCorners borderRadius={BorderRadius.Small} />);
    expect(container.firstChild).toHaveClass('rounded-sm');
  });



});
