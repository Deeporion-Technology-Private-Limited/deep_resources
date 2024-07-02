import { render, screen, fireEvent } from "@testing-library/react";
import { IconButton } from "../SingleIconButton/index";
import "@testing-library/jest-dom";

describe("SingleIconButton", () => {
  test("should render a button", () => {
    render(<IconButton>Click Me</IconButton>);
    const buttonElement = screen.getByRole("button", { name: "Click Me" });
    expect(buttonElement).toBeInTheDocument();
  });

  test("should render an icon image inside button", () => {
    render(<IconButton iconUrl="/dummyIcon.png" />);
    const iconImageElement = screen.getByAltText("Icon");
    expect(iconImageElement).toBeInTheDocument();
  });

  test("should execute onClick event handler function", () => {
    const onMockFn = jest.fn();
    render(<IconButton onClick={onMockFn}>Click Me</IconButton>);

    const buttonElement = screen.getByTestId("click-me");
    fireEvent.click(buttonElement);
    expect(onMockFn).toHaveBeenCalledTimes(1);
  });
});
