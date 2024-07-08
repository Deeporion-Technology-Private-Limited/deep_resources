import { render, screen, fireEvent } from "@testing-library/react";
import { IconButton } from "../SingleIconButton/index";
import "@testing-library/jest-dom";
import { Translations } from "@/components/translations";

describe("SingleIconButton", () => {
  test("should render a button", () => {
    render(<IconButton>{Translations.ClickMe}</IconButton>);
    const buttonElement = screen.getByRole("button", {
      name: Translations.ClickMe,
    });
    expect(buttonElement).toBeInTheDocument();
  });

  test("should render an icon image inside button", () => {
    render(<IconButton iconUrl={Translations.TestImageUrl} />);
    const iconImageElement = screen.getByAltText("icon");
    expect(iconImageElement).toBeInTheDocument();
  });

  test("should execute onClick event handler function", () => {
    const onMockFn = jest.fn();
    render(<IconButton onClick={onMockFn}>{Translations.ClickMe}</IconButton>);

    const buttonElement = screen.getByTestId("click-me");
    fireEvent.click(buttonElement);
    expect(onMockFn).toHaveBeenCalledTimes(1);
  });
});
