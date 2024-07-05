import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Accordion from "..";
import { Translations } from "@/components/translations";

describe("Accordion", () => {
  const content = Translations.TestText1;
  const children = Translations.TestText2;
  const iconUrl = Translations.TestImageUrl;

  test("should render props correctly", () => {
    render(
      <Accordion
        content={content}
        children={children}
        Icon={iconUrl}
      />
    );

    // checking wheather the children renders
    const childrenElement = screen.getByTestId("children");
    expect(childrenElement).toBeInTheDocument();
    expect(childrenElement).toHaveTextContent(Translations.TestText2);

    // checking wheather the icon button renders correctly
    const iconDivElement = screen.getByTestId("icon");
    expect(iconDivElement).toBeInTheDocument();

    // checking wheather the subchildren renders
    const subChildrenDivElement = screen.getByTestId("subchildren");
    expect(subChildrenDivElement).toBeInTheDocument();

    // checking wheather status renders
    const statusDivElement = screen.getByTestId("status");
    expect(statusDivElement).toBeInTheDocument();
  });

  test("should click the icon button", () => {
    const clickMockFn = jest.fn();

    render(
      <Accordion
        content={content}
        children={children}
        Icon={iconUrl}
        onClick={clickMockFn}
      />
    );
    const iconButtonElement = screen.getByTestId("icon");
    expect(iconButtonElement).toBeInTheDocument();

    fireEvent.click(iconButtonElement);
    expect(clickMockFn).toHaveBeenCalledTimes(1);
  });
});
