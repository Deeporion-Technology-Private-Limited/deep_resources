import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import CoustomizeAccordion from "../CoustmaizeAccordion";
import { AccordionTypes } from "../../types";
import { Translations } from "@/components/translations";

describe("CoustmaizeAccordion", () => {
  test("renders CoustomizeAccordion component", () => {
    render(
      <CoustomizeAccordion
        Icon={<div>Icon</div>}
        children={Translations.TestText1}
      />
    );
    const accordionTitle = screen.getByText(Translations.TestText1);
    expect(accordionTitle).toBeInTheDocument();
  });

  test("should toggle content visibility on icon click", () => {
    const contentData = ["Content 1", "Content 2"];

    const { getByTestId, queryByText } = render(
      <CoustomizeAccordion
        Icon={<div>Icon</div>}
        children={Translations.TestText1}
        content={contentData}
      />
    );

    // Initially, content should not be visible
    expect(queryByText("Content 1")).toBeNull();
    expect(queryByText("Content 2")).toBeNull();

    // Click on the accordion icon to toggle content
    const icon = getByTestId("icon");
    fireEvent.click(icon);

    // After click, content should be visible
    expect(queryByText("Content 1")).toBeInTheDocument();
    expect(queryByText("Content 2")).toBeInTheDocument();
  });

  test("should render CoustomizeAccordion with correct variant class", () => {
    render(
      <CoustomizeAccordion
        Icon={<div>Icon</div>}
        children="Accordion Title"
        variant={AccordionTypes.Arrow}
        className="variant-arrow"
      />
    );

    const variantDivElement = screen.getByTestId("custom-variant");
    expect(variantDivElement).toHaveClass("variant-arrow");
  });
});
