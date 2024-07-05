import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Text } from "../index";

describe("Text component", () => {
  test("renders with default props", () => {
    const { container } = render(<Text>Default Text</Text>);
    expect(container.firstChild).toHaveClass("w-full text-base text-left");
    expect(container.firstChild).toHaveTextContent("Default Text");
  });
});
