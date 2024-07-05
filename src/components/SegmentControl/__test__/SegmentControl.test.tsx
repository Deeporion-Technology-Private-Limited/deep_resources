import { render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import SegmentControl from '../index';

describe('SegmentControl component', () => {
  const suggestions = ['Segment1', 'Segment2', 'Segment3'];

  it('renders correctly with default props', () => {
    const { getByText } = render(<SegmentControl suggestions={suggestions} />);
    expect(getByText('Segment1')).toBeInTheDocument();
    expect(getByText('Segment2')).toBeInTheDocument();
    expect(getByText('Segment3')).toBeInTheDocument();
  });

  it('renders correctly with different sizes', () => {
    const { getByText, rerender } = render(
      <SegmentControl suggestions={suggestions} size="small" />
    );
    expect(getByText('Segment1')).toHaveClass('text-sm p-1');

    rerender(<SegmentControl suggestions={suggestions} size="medium" />);
    expect(getByText('Segment1')).toHaveClass('text-base p-2');

    rerender(<SegmentControl suggestions={suggestions} size="large" />);
    expect(getByText('Segment1')).toHaveClass('text-lg p-3');
  });

  it('calls onSegmentChange when a segment is clicked', () => {
    const onSegmentChange = jest.fn();
    const { getByText } = render(
      <SegmentControl
        suggestions={suggestions}
        onSegmentChange={onSegmentChange}
      />
    );

    fireEvent.click(getByText('Segment2'));
    expect(onSegmentChange).toHaveBeenCalledTimes(1);
    expect(onSegmentChange).toHaveBeenCalledWith('Segment2');

    fireEvent.click(getByText('Segment3'));
    expect(onSegmentChange).toHaveBeenCalledTimes(2);
    expect(onSegmentChange).toHaveBeenCalledWith('Segment3');
  });

  it('toggles segment correctly in toggle mode', () => {
    const { getByText } = render(
      <SegmentControl suggestions={suggestions} type="toggle" />
    );

    fireEvent.click(getByText('Segment2'));
    expect(getByText('Segment2')).toHaveClass('bg-primary-500 text-white');
    expect(getByText('Segment1')).not.toHaveClass('bg-primary-500 text-white');
    expect(getByText('Segment3')).not.toHaveClass('bg-primary-500 text-white');
  });

  it('disables the last segment in toggle mode', () => {
    const { getByText } = render(
      <SegmentControl suggestions={suggestions} type="toggle" />
    );

    const lastSegment = getByText('Segment3');
    expect(lastSegment).toHaveClass('cursor-not-allowed opacity-50');
    expect(lastSegment).toBeDisabled();
  });

  it('applies additional class names', () => {
    const { container } = render(
      <SegmentControl type='default' suggestions={suggestions} className="additional-class" />
    );
    expect(container.firstChild).toHaveClass('additional-class');
  });


  
});
