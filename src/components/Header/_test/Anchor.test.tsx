import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Anchor } from "../Anchor";
import { Translations } from "@/components/translations";

describe("Anchor", () => {
  test("should render a anchor with a correct style", () => {
    render(<Anchor />);

    // checking wheather anchor element is rendered
    const anchorElement = screen.getByTestId("anchor");
    expect(anchorElement).toBeInTheDocument();

    // checking if the anchor element has the correct class names from anchorStyles
    expect(anchorElement).toHaveClass("text-[12px] font-bold");
  });

  test("should render a custom class name", () => {
    render(<Anchor className={Translations.TestClassName} />);
    const anchorElement = screen.getByTestId("anchor");
    expect(anchorElement).toHaveClass(Translations.TestClassName);
  });
});
