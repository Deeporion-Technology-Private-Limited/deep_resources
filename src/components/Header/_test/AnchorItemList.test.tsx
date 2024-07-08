import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { AnchorList } from "../AnchorItemList";
import { Translations } from "@/components/translations";

describe("AnchorList", () => {
  test("renders ul element with default styles", () => {
    render(
      <AnchorList>
        <li>
          <a href="#">Item 1</a>
        </li>
        <li>
          <a href="#">Item 2</a>
        </li>
        <li>
          <a href="#">Item 3</a>
        </li>
      </AnchorList>
    );

    // checking if the ul element is rendered
    const ulElement = screen.getByRole("list");
    expect(ulElement).toBeInTheDocument();

    // checking if the ul element has the default class names
    expect(ulElement).toHaveClass(
      "text-[12px] font-bold flex gap-[13px] flex-row"
    );
  });

  test("renders ul element with column variant", () => {
    render(
      <AnchorList variant="column">
        <li>
          <a href="#">Item 1</a>
        </li>
        <li>
          <a href="#">Item 2</a>
        </li>
        <li>
          <a href="#">Item 3</a>
        </li>
      </AnchorList>
    );

    // checking if the ul element has the class names for column variant
    const ulElement = screen.getByRole("list");
    expect(ulElement).toHaveClass("flex flex-col");
  });

  test("renders ul element with additional className", () => {
    render(
      <AnchorList className={Translations.TestClassName}>
        <li>
          <a href="#">Item 1</a>
        </li>
        <li>
          <a href="#">Item 2</a>
        </li>
        <li>
          <a href="#">Item 3</a>
        </li>
      </AnchorList>
    );

    // checking if the ul element has the custom className
    const ulElement = screen.getByRole("list");
    expect(ulElement).toHaveClass(Translations.TestClassName);
  });
});
