import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AccordionBody } from "../AccordionBody";

describe("AccordionBody", () => {
  test("should render Accordion body(children)", () => {
    render(<AccordionBody />);
    const accordionElement = screen.getByText("Accordion");
    expect(accordionElement).toBeInTheDocument();
  });
});
