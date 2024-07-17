import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Topnavbar } from "../TopNavbar";
import { Translations } from "@/components/translations";
import { NavbarDirection } from "../../types";

const mockNavItem = [
  { text: "Home", href: "/home" },
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
];

// const mockNavBarIcons = [
//   { icon: Translations.TestImageUrl, onClick: jest.fn() },
//   { icon: Translations.TestImageUrl, onClick: jest.fn() },
// ];

// const mockProfilePicture = Translations.TestImageUrl;

describe("TopNavbar", () => {
  test("should render with default props", () => {
    const { getByTestId } = render(<Topnavbar />);
    expect(getByTestId("logo")).toBeInTheDocument();
  });

  test("should render title when provided", () => {
    const { getByText } = render(<Topnavbar title={Translations.TestText1} />);
    expect(getByText(Translations.TestText1)).toBeInTheDocument();
  });

  test("should render navigation items correctly", () => {
    const { getByText } = render(
      <Topnavbar
        title={Translations.TestText1}
        navItem={mockNavItem}
      />
    );
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
    expect(getByText("Contact")).toBeInTheDocument();
  });

  test("should handle click events on navigation items", () => {
    const { getByText } = render(
      <Topnavbar
        title={Translations.TestText1}
        navItem={mockNavItem}
      />
    );
    fireEvent.click(getByText("Home"));
    fireEvent.click(getByText("About"));
    fireEvent.click(getByText("Contact"));
  });

  test("should render login icon when not logged in", () => {
    const { getByTestId } = render(
      <Topnavbar
        title={Translations.TestText1}
        isLogin={false}
      />
    );
    expect(getByTestId("logo")).toBeInTheDocument();
  });

  test("should render search input when isSearch is true", () => {
    const { getByPlaceholderText } = render(
      <Topnavbar
        title={Translations.TestText1}
        isSearch={true}
      />
    );
    expect(getByPlaceholderText("Search here ...")).toBeInTheDocument();
  });

  // test("should render navBarIcons correctly", () => {
  //   const { getByTestId } = render(
  //     <Topnavbar
  //       title={Translations.TestText1}
  //       navBarIcons={mockNavBarIcons}
  //     />
  //   );
  //   mockNavBarIcons.forEach((item) => {
  //     expect(getByTestId(`icon-${item.icon}`)).toBeInTheDocument();
  //   });
  // });

  // test("handles click events on navBarIcons", () => {
  //   const { getByTestId } = render(
  //     <Topnavbar
  //       title={Translations.TestText1}
  //       navBarIcons={mockNavBarIcons}
  //     />
  //   );
  //   fireEvent.click(getByTestId(`icon-${mockNavBarIcons[0].icon}`));
  //   expect(mockNavBarIcons[0].onClick).toHaveBeenCalled();
  //   fireEvent.click(getByTestId(`icon-${mockNavBarIcons[1].icon}`));
  //   expect(mockNavBarIcons[1].onClick).toHaveBeenCalled();
  // });

  test("should display hover component correctly", () => {
    const { getByText, queryByText } = render(
      <Topnavbar
        title={Translations.TestText1}
        navItem={mockNavItem}
      />
    );
    fireEvent.mouseEnter(getByText("Home"));
    expect(queryByText("Hovered Component Content")).not.toBeInTheDocument(); // Replace with actual content check
    fireEvent.mouseLeave(getByText("Home"));
  });

  test("should render correct styles for column", () => {
    render(
      <Topnavbar
        title={Translations.TestText1}
        navItem={mockNavItem}
        direction={NavbarDirection.Column}
      />
    );

    const navbarDirectionElement = screen.getByTestId("direction");
    expect(navbarDirectionElement).toHaveClass("flex-col");
  });

  test("should handle mouse enter correctly", () => {
    const mockNavItem = [
      { text: "Home", href: "/home", component: "Hovered Content" },
    ];
    const { getByText, getByTestId } = render(
      <Topnavbar navItem={mockNavItem} />
    );

    fireEvent.mouseEnter(getByText("Home"));

    const hoveredComponent = getByTestId("mouseout");
    expect(hoveredComponent).toHaveTextContent("Hovered Content");

    fireEvent.mouseLeave(hoveredComponent);
    expect(hoveredComponent).not.toBeInTheDocument();
  });

  test("should handle mouse out correctly", () => {
    const mockNavItem = [
      { text: "Home", href: "/home", component: "Hovered Content" },
    ];
    const { getByText, getByTestId } = render(
      <Topnavbar navItem={mockNavItem} />
    );

    fireEvent.mouseEnter(getByText("Home"));

    const hoveredComponent = getByTestId("mouseout");
    expect(hoveredComponent).toBeInTheDocument();

    fireEvent.mouseLeave(hoveredComponent);
    expect(hoveredComponent).not.toBeInTheDocument();
  });
});
