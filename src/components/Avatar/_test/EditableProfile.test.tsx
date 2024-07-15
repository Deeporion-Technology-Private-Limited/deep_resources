import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Translations } from "@/components/translations";
import { ButtonSize } from "@/components/types";
import { Profile } from "../Editable";

describe("Profile", () => {
  test("should render editable Profile component", () => {
    render(<Profile />);

    // checking for "Edit Picture" text
    const editTestElement = screen.getByText("Edit Picture");
    expect(editTestElement).toBeInTheDocument();

    // checking for avatar profile image element
    const avatarProfileElement = screen.getByAltText("Profile Avatar");
    expect(avatarProfileElement).toBeInTheDocument();

    // checking for camera icon
    const cameraIconElement = screen.getByTestId("icon");
    expect(cameraIconElement).toBeInTheDocument();
  });

  test("should render Profile component with profile picture", () => {
    render(<Profile src={Translations.TestImageUrl} />);

    const profileAvatarImageElement = screen.getByAltText("Profile Avatar");
    expect(profileAvatarImageElement).toHaveAttribute(
      "src",
      Translations.TestImageUrl
    );
  });

  test("should render Profile component with different props", () => {
    render(
      <Profile
        src={Translations.TestImageUrl}
        size={ButtonSize.Large}
        textStyle="text-[#FF0000]"
        iconStyle="size-20"
      />
    );

    // Check for size variant
    const profileBox = screen.getByTestId("profile-box");
    expect(profileBox).toHaveClass("h-[12rem] w-[12rem] text-[6rem]");

    // Check for custom text style
    const editPictureText = screen.getByText("Edit Picture");
    expect(editPictureText).toHaveClass("text-[#FF0000]");

    // Check for custom icon style
    const camIcon = screen.getByTestId("icon");
    expect(camIcon).toHaveClass("size-20");
  });
});
