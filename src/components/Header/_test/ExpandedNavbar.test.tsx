import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TopHoverMenuCard } from "../ExpandedNavbar";
import { Translations } from "@/components/translations";

const mockTopHoverMenuItem = [
  {
    heading: { title: Translations.TestText1 },
    children: Translations.TestText1,
    className: Translations.TestClassName,
  },
  {
    heading: { title: Translations.TestText2 },
    children: Translations.TestText2,
    className: Translations.TestClassName,
  },
];

describe("ExpandedNavber", () => {
  test("renders TopHoverMenuCard with default props", () => {
    render(<TopHoverMenuCard TopHoverMenuItem={mockTopHoverMenuItem} />);

    // checking if title is rendered
    const titleElement = screen.getByText(Translations.TestText1);
    expect(titleElement).toBeInTheDocument();

    // checking if child content is rendered
    const childContentElement = screen.getByText(Translations.TestText2);
    expect(childContentElement).toBeInTheDocument();
  });
});
