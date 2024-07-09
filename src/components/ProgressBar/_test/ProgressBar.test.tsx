import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProgressBar from "../index"; // Adjust the path according to your project structure
import { Translations } from "../../translations";
const half = 50;
const StringHalf = "50%";
describe("ProgressBar component", () => {
  test("renders linear progress bar with correct progress", () => {
    const { getByTestId } = render(
      <ProgressBar
        variant={Translations.linear}
        progress={half}
        bgColor={Translations.blue}
      />
    );

    expect(getByTestId("linerProgressTextBox")).toBeInTheDocument();
    expect(getByTestId("linerProgressTextBox")).toHaveStyle({
      width: `${StringHalf}`,
    });
  });

  test("renders circular progress bar with correct progress", () => {
    const { getByTestId } = render(
      <ProgressBar
        variant={Translations.circle}
        progress={half}
        bgColor={Translations.blue}
        middleText
      />
    );
    expect(getByTestId("progressText")).toHaveTextContent(`${StringHalf}`);
  });

  test("renders middle text in linear progress bar", () => {
    const { getByText } = render(
      <ProgressBar
        variant={Translations.linear}
        progress={half}
        bgColor={Translations.blue}
        middleText
      />
    );

    expect(getByText(`${StringHalf}`)).toBeInTheDocument();
  });

  test("renders middle text in circular progress bar", () => {
    const { getByText } = render(
      <ProgressBar
        variant={Translations.circle}
        progress={half}
        bgColor={Translations.blue}
        middleText
      />
    );

    expect(getByText(`${StringHalf}`)).toBeInTheDocument();
  });

  test("applies custom text color", () => {
    const { getByText } = render(
      <ProgressBar
        variant={Translations.linear}
        progress={half}
        bgColor={Translations.blue}
        textColor={Translations.Red}
        middleText
      />
    );

    expect(getByText(`${StringHalf}`)).toHaveStyle({ color: "red" });
  });
});
