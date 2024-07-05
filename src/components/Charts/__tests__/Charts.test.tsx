import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Chart from '../index';
import { ChartsType } from '../ChartsTypes';

describe('Chart', () => {
  const xAxisValues = [0, 50, 100, 150, 200];
  const yAxisValues = [0, 40, 80, 120, 160];
  const xAxisLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May'];
  const yAxisLabels = ['$0', '$50', '$100', '$150', '$200'];
  const region = ['Region1', 'Region2'];

  it('renders correctly with default props', () => {
    render(
      <Chart
        xAxisValues={xAxisValues}
        yAxisValues={yAxisValues}
        xAxisLabels={xAxisLabels}
        yAxisLabels={yAxisLabels}
        region={region}
      />
    );
    const svgElement = screen.getByTestId('chart-svg');
    expect(svgElement).toBeInTheDocument();
  });

  it('displays correct number of x-axis labels', () => {
    render(
      <Chart
        xAxisValues={xAxisValues}
        yAxisValues={yAxisValues}
        xAxisLabels={xAxisLabels}
        yAxisLabels={yAxisLabels}
        region={region}
      />
    );
    const xAxisLabelElements = screen.getAllByText(/Jan|Feb|Mar|Apr|May/);
    expect(xAxisLabelElements.length).toBe(xAxisLabels.length);
  });

  it('displays correct number of y-axis labels', () => {
    render(
      <Chart
        xAxisValues={xAxisValues}
        yAxisValues={yAxisValues}
        xAxisLabels={xAxisLabels}
        yAxisLabels={yAxisLabels}
        region={region}
      />
    );
    const yAxisLabelElements = screen.getAllByText(/\$0|\$50|\$100|\$150|\$200/);
    expect(yAxisLabelElements.length).toBe(yAxisLabels.length);
  });

  it('displays region legends correctly', () => {
    render(
      <Chart
        xAxisValues={xAxisValues}
        yAxisValues={yAxisValues}
        xAxisLabels={xAxisLabels}
        yAxisLabels={yAxisLabels}
        region={region}
      />
    );
    region.forEach((regionItem) => {
      expect(screen.getByText(regionItem)).toBeInTheDocument();
    });
  });

  it('renders curved paths correctly', () => {
    render(
      <Chart
        xAxisValues={xAxisValues}
        yAxisValues={yAxisValues}
        xAxisLabels={xAxisLabels}
        yAxisLabels={yAxisLabels}
        region={region}
      />
    );
    const svgElement = screen.getByTestId('chart-svg');
    const paths = svgElement.querySelectorAll('path');
    expect(paths.length).toBeGreaterThan(0);
  });

  it('applies correct styles for chart type', () => {
    render(
      <Chart
        xAxisValues={xAxisValues}
        yAxisValues={yAxisValues}
        xAxisLabels={xAxisLabels}
        yAxisLabels={yAxisLabels}
        region={region}
        variant={ChartsType.doubleSplineAreaChart}
      />
    );
    const chartContainer = screen.getByTestId('chart-container');
    expect(chartContainer).toHaveClass('text-[#DC2626]');
  });
  
});
