import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import { Minus, PlusIcon, UpArrow, UpCursor } from "../Icon/Icon";

describe("Icon", () => {
  test("should call UpArrow function", () => {
    render(<UpArrow />);
    const upArrowElement = screen.getByTestId("uparrow");
    fireEvent.click(upArrowElement);
  });

  test("should call UpCursor function", () => {
    render(<UpCursor />);
    const upCursorElement = screen.getByTestId("upcursor");
    fireEvent.click(upCursorElement);
  });

  test("should call PlusIcon function", () => {
    render(<PlusIcon />);
    const plusIconElement = screen.getByTestId("plusicon");
    fireEvent.click(plusIconElement);
  });

  test("should call Minus function", () => {
    render(<Minus />);
    const minusIconElement = screen.getByTestId("minusicon");
    fireEvent.click(minusIconElement);
  });
});
