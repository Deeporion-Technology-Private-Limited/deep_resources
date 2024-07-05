import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SideNavbar } from "../SideNavbar";
import { Translations } from "@/components/translations";

const mockNavItem = [
  {
    menus: "Home",
    path: "/home",
  },
  {
    menus: "About",
    path: "/about",
  },
  {
    menus: "Services",
    path: "/services",
    submenu: [
      {
        menus: "Service 1",
        path: "/services/service-1",
      },
      {
        menus: "Service 2",
        path: "/services/service-2",
      },
    ],
  },
];

const mockProfileItem = {
  profileName: Translations.Name,
  profilePicture: Translations.TestImageUrl,
};

describe("SideNavbar", () => {
  test("should render with default props", () => {
    render(
      <SideNavbar
        profileItem={mockProfileItem}
        hover={false}
      />
    );
    const logoElement = screen.getByTestId("logo");

    expect(logoElement).toBeInTheDocument();
  });

  it("should render title when provided", () => {
    render(
      <SideNavbar
        profileItem={mockProfileItem}
        title={Translations.TestText1}
        hover={false}
      />
    );
    const titleElement = screen.getByText(Translations.TestText1);

    expect(titleElement).toBeInTheDocument();
  });

  test("should render navigation items correctly", () => {
    const { getByText } = render(
      <SideNavbar
        title={Translations.TestText1}
        navItem={mockNavItem}
        profileItem={mockProfileItem}
        hover={false}
      />
    );
    expect(getByText("Home")).toBeInTheDocument();
    expect(getByText("About")).toBeInTheDocument();
    expect(getByText("Services")).toBeInTheDocument();
  });

  test("should handles click events on navigation items", () => {
    const { getByText } = render(
      <SideNavbar
        title={Translations.TestText1}
        navItem={mockNavItem}
        profileItem={mockProfileItem}
        hover={false}
      />
    );
    fireEvent.click(getByText("Home"));
    fireEvent.click(getByText("About"));
    fireEvent.click(getByText("Services"));
  });

  test("should render profile section correctly when logged in", () => {
    const { getByText, getByTestId } = render(
      <SideNavbar
        title={Translations.TestText1}
        navItem={mockNavItem}
        isLogin={true}
        profileItem={mockProfileItem}
        hover={false}
      />
    );
    expect(getByText(Translations.Name)).toBeInTheDocument();
    expect(getByTestId("profile")).toBeInTheDocument();
  });

  test("should render profile section correctly when not logged in", () => {
    const { getByText } = render(
      <SideNavbar
        title={Translations.TestText1}
        navItem={mockNavItem}
        isLogin={false}
        profileItem={mockProfileItem}
        hover={false}
      />
    );
    expect(getByText("profile")).toBeInTheDocument();
  });

  test("should toggle submenu visibility correctly", () => {
    const { getByText, queryByText } = render(
      <SideNavbar
        title={Translations.TestText1}
        navItem={mockNavItem}
        profileItem={mockProfileItem}
        hover={false}
      />
    );
    fireEvent.click(getByText("Services"));
    expect(getByText("Service 1")).toBeInTheDocument();
    fireEvent.click(getByText("Services"));
    expect(queryByText("Service 1")).not.toBeInTheDocument();
  });

  test("should render large sidebar mode correctly", () => {
    render(
      <SideNavbar
        title={Translations.TestText1}
        navItem={mockNavItem}
        largeSidebar={true}
        profileItem={mockProfileItem}
        hover={false}
      />
    );

    const logoElement = screen.getByTestId("logo");
    expect(logoElement).toBeInTheDocument();
  });
});
