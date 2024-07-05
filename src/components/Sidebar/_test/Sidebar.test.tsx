import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NavItems } from "../sidebarConst";
import { Sidebar } from "..";
import { Translations } from "@/components/translations";

describe("Sidebar", () => {
  const mockNavItems: NavItems[] = [
    {
      menus: "Dashboard",
      menuLeftIcon: <i className="fa fa-dashboard" />,
      path: "/dashboard",
    },
    {
      menus: "Settings",
      menuLeftIcon: <i className="fa fa-cog" />,
      submenu: [
        { menus: "Profile", path: "/profile" },
        { menus: "Preferences", path: "/preferences" },
      ],
    },
  ];

  const mockProfileItem = {
    profileName: Translations.Name,
    profilePicture: Translations.TestImageUrl,
  };

  const handleClose = jest.fn();
  const handleLogin = jest.fn();

  test("should render Sidebar component correctly", () => {
    const { getByText } = render(
      <Sidebar
        title={Translations.TestText1}
        LogoIcon={Translations.TestImageUrl}
        navItem={mockNavItems}
        profileItem={mockProfileItem}
        handleClose={handleClose}
      />
    );

    expect(getByText("Dashboard")).toBeInTheDocument();
    expect(getByText("Settings")).toBeInTheDocument();
    expect(getByText(Translations.Name)).toBeInTheDocument();
    // expect(getByTestId("close-button")).toBeInTheDocument();
    // expect(getByTestId("login-button")).not.toBeInTheDocument();
  });

  test("should handle click events correctly", () => {
    const { getByText } = render(
      <Sidebar
        title={Translations.TestText1}
        LogoIcon={Translations.TestImageUrl}
        navItem={mockNavItems}
        profileItem={mockProfileItem}
        handleClose={handleClose}
        handleLogin={handleLogin}
      />
    );

    // fireEvent.click(getByTestId("close-button"));
    // expect(handleClose).toHaveBeenCalledTimes(1);

    fireEvent.click(getByText("Dashboard"));
    expect(window.location.href).toBe("/dashboard");

    fireEvent.click(getByText("Profile"));
    expect(window.location.href).toBe("/profile");

    fireEvent.click(getByText("Settings"));
    expect(getByText("Profile")).toBeInTheDocument();
    expect(getByText("Preferences")).toBeInTheDocument();

    // fireEvent.click(getByTestId("login-button"));
    // expect(handleLogin).toHaveBeenCalledTimes(1);
  });

  // it("renders login section when user is not logged in", () => {
  //   const { getByText } = render(
  //     <Sidebar
  //       title="My Sidebar"
  //       LogoIcon="/path/to/logo.png"
  //       navItem={mockNavItems}
  //       profileItem={mockProfileItem}
  //       handleClose={handleClose}
  //       handleLogin={handleLogin}
  //       isLogin={false}
  //       userLogedIn={false}
  //     />
  //   );

  //   expect(getByText("Hey, Let’s Get Started")).toBeInTheDocument();
  //   expect(getByText("Login")).toBeInTheDocument();
  // });

  // it("does not render login section when user is logged in", () => {
  //   const { queryByText } = render(
  //     <Sidebar
  //       title="My Sidebar"
  //       LogoIcon="/path/to/logo.png"
  //       navItem={mockNavItems}
  //       profileItem={mockProfileItem}
  //       handleClose={handleClose}
  //       handleLogin={handleLogin}
  //       isLogin={true}
  //       userLogedIn={true}
  //     />
  //   );

  //   expect(queryByText("Hey, Let’s Get Started")).not.toBeInTheDocument();
  //   expect(queryByText("Login")).not.toBeInTheDocument();
  // });
});
