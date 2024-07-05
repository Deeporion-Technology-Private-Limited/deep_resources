import { render, screen } from "@testing-library/react";
import { GroupIconButton } from "../GroupIconButton";
import "@testing-library/jest-dom";
import { ButtonDirection } from "../type";
import { Translations } from "@/components/translations";

describe("GroupIconButton component", () => {
  test("should render the icon div", () => {
    render(<GroupIconButton />);
    const divElement = screen.getByTestId("groupicon");
    expect(divElement).toBeInTheDocument();
  });

  test("should render children correctly", () => {
    render(
      <GroupIconButton>
        <h1>{Translations.TestText1}</h1>
        <div data-testid="child2">{Translations.TestText2}</div>
      </GroupIconButton>
    );

    const childElement1 = screen.getByRole("heading", {
      name: Translations.TestText1,
    });
    const childElement2 = screen.getByTestId("child2");

    expect(childElement1).toBeInTheDocument();
    expect(childElement2).toBeInTheDocument();
  });

  test("should render proper default classes", () => {
    render(<GroupIconButton />);
    const divElement = screen.getByTestId("groupicon");
    expect(divElement).toHaveClass(
      "flex",
      "items-center",
      "justify-center",
      "bg-transparent"
    );
  });

  test("should render proper classes for direction row", () => {
    render(<GroupIconButton direction={ButtonDirection.Row} />);

    const divElement = screen.getByTestId("groupicon");
    expect(divElement).toHaveClass("flex-row gap-2");
  });

  test("should render proper classes for direction column", () => {
    render(<GroupIconButton direction={ButtonDirection.Column} />);

    const divElement = screen.getByTestId("groupicon");
    expect(divElement).toHaveClass("flex-col gap-2");
  });

  test("should apply a custom class if passed", () => {
    render(<GroupIconButton className="test-class1 test-class2 test-class3" />);

    const divElement = screen.getByTestId("groupicon");
    expect(divElement).toHaveClass("test-class1 test-class2 test-class3");
  });
});
