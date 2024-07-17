import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ButtonSize } from "@/components/types";
import { Translations } from "@/components/translations";
import { ProfileAvatar } from "../Basic";

describe("Basic", () => {
  test("should render Basic avatar component", () => {
    render(<ProfileAvatar name={Translations.Name} />);
    const nameElement = screen.getByText("MN");
    expect(nameElement).toBeInTheDocument();
    expect(nameElement).toHaveTextContent("MN");
  });

  test("should render an image if src link is provided", () => {
    render(
      <ProfileAvatar
        src={Translations.TestImageUrl}
        name={Translations.Name}
      />
    );

    const imageElement = screen.getByAltText("Profile Avatar");
    expect(imageElement).toBeInTheDocument();
  });

  test("should render ProfileAvatar component for small size", () => {
    render(
      <ProfileAvatar
        name="My Name"
        size={ButtonSize.Small}
      />
    );

    const sizeElement = screen.getByTestId("size");
    expect(sizeElement).toHaveClass("h-[4rem] w-[4rem] text-[2rem]");
  });

  test("should render ProfileAvatar component for medium size", () => {
    render(
      <ProfileAvatar
        name="My Name"
        size={ButtonSize.Medium}
      />
    );

    const sizeElement = screen.getByTestId("size");
    expect(sizeElement).toHaveClass("h-[8rem] w-[8rem] text-[4rem]");
  });

  test("should render ProfileAvatar component for large size", () => {
    render(
      <ProfileAvatar
        name="My Name"
        size={ButtonSize.Large}
      />
    );

    const sizeElement = screen.getByTestId("size");
    expect(sizeElement).toHaveClass("h-[10rem] w-[12rem] text-[6rem]");
  });
});
