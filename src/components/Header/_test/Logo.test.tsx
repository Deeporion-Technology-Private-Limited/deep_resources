import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Logo } from "../Logo";
import { Translations } from "@/components/translations";
import { createRef } from "react";

describe("Logo", () => {
  test("should render children correctly", () => {
    render(<Logo>{Translations.TestText1}</Logo>);
    const logoElement = screen.getByTestId("logo");

    expect(logoElement).toBeInTheDocument();
  });

  test("should apply logoStyles to the Box component", () => {
    render(<Logo />);
    const logoElement = screen.getByTestId("logo");
    expect(logoElement).toHaveClass("w-fit text-[24px] font-bold");
  });

  it("should forward ref correctly", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Logo ref={ref} />);
    expect(ref.current).toBeInTheDocument();
  });

  it("should pass className through prop", () => {
    render(<Logo className={Translations.TestClassName}>Logo Text</Logo>);
    const logoElement = screen.getByTestId("logo");
    expect(logoElement).toHaveClass(Translations.TestClassName);
  });
});
