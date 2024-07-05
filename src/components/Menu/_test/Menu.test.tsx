import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Menu } from "../index";
import { Translations } from "@/translations";

describe("Menu component", () => {
  test("renders with default props", () => {
    const { getByText } = render(<Menu label={Translations.label} />);
    expect(getByText("Menu Label")).toBeInTheDocument();
  });

  test("toggles menu open and close on click", () => {
    const { getByText, queryByText } = render(
      <Menu label={Translations.label}>
        <div>Menu Item</div>
      </Menu>
    );

    fireEvent.click(getByText("Menu Label"));
    expect(getByText("Menu Item")).toBeInTheDocument();

    fireEvent.click(getByText("Menu Label"));
    expect(queryByText("Menu Item")).not.toBeInTheDocument();
  });

  test("applies activeColor when menu is active", () => {
    const { getByText } = render(
      <Menu label={Translations.label} activeColor="bg-blue-500">
        <div>Menu Item</div>
      </Menu>
    );

    fireEvent.click(getByText("Menu Label"));

    expect(getByText("Menu Label").parentElement).toHaveClass("bg-blue-500");

    fireEvent.click(getByText("Menu Label"));
    expect(getByText("Menu Label").parentElement).not.toHaveClass(
      "bg-blue-500"
    );
  });

  test("renders children when menu is open", () => {
    const { getByText } = render(
      <Menu label={Translations.label}>
        <div>Menu Item</div>
      </Menu>
    );

    fireEvent.click(getByText("Menu Label"));
    expect(getByText("Menu Item")).toBeInTheDocument();
  });

  test("passes className to the div", () => {
    const { getByText } = render(
      <Menu label={Translations.label} className="custom-class" />
    );
    expect(getByText("Menu Label").parentElement).toHaveClass("custom-class");
  });
});
