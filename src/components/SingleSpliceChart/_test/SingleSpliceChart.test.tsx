import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SingleLineChart } from "../index";

const XAxisVal = [10, 20, 30, 40];
const yAxisLabels = ["0", "10", "20", "30", "40", "50"];
const XAxisLab = ["Jan", "Feb", "Mar", "Apr"];

describe("SingleLineChart component", () => {
  test("renders with default props", () => {
    const { getByTestId } = render(<SingleLineChart />);
    expect(getByTestId("place")).toBeInTheDocument();
  });

  test("updates on props change", () => {
    const { rerender, getByText } = render(
      <SingleLineChart xAxisValues={XAxisVal} xAxisLabels={XAxisLab} />
    );

    rerender(<SingleLineChart xAxisValues={XAxisVal} xAxisLabels={XAxisLab} />);
    expect(getByText("Mar")).toBeInTheDocument();
  });

  test("renders correct SVG path", () => {
    const { getByTestId } = render(
      <SingleLineChart xAxisValues={XAxisVal} xAxisLabels={XAxisLab} />
    );

    expect(getByTestId("place1")).toBeInTheDocument();
  });

  test("renders horizontal grid lines based on yAxisLabels", () => {
    const { getByTestId } = render(
      <SingleLineChart
        yAxisLabels={yAxisLabels}
        xAxisValues={XAxisVal}
        xAxisLabels={XAxisLab}
      />
    );

    expect(getByTestId("place1").querySelector("g")).toBeInTheDocument();
    const lines = getByTestId("place1")
      .querySelector("g")
      ?.querySelectorAll("line");

    expect(lines?.length).toBe(yAxisLabels.length - 2);

    const height = 170;
    lines?.forEach((line, index) => {
      const expectedY =
        height - ((index + 1) / (yAxisLabels.length - 1)) * height;
      expect(line).toHaveAttribute("x1", "0");
      expect(line).toHaveAttribute("x2", "360"); // Assuming width = xAxisLabels.length * 90
      expect(line).toHaveAttribute("y1", expectedY.toString());
      expect(line).toHaveAttribute("y2", expectedY.toString());
    });
  });

  test("renders y-axis labels correctly", () => {
    const { getByText } = render(
      <SingleLineChart
        yAxisLabels={yAxisLabels}
        xAxisValues={XAxisVal}
        xAxisLabels={XAxisLab}
      />
    );

    yAxisLabels.forEach((label) => {
      expect(getByText(label)).toBeInTheDocument();
    });
  });
});
