import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Alert from "../index";
import { AlertType, AlertVariant } from "../type";
import { Translations } from "@/translations";

const line = "renders with success type and ";

describe("Alert Component", () => {
  test(`${line} filled variant`, () => {
    const { getByText } = render(
      <Alert
        type={AlertType.Success}
        variant={AlertVariant.Filled}
        message={Translations.Message}
      />
    );
    expect(getByText(/This is an Filled Success alert/i)).toBeInTheDocument();

    const alertElement = screen
      .getByText(/This is an Filled Success alert/i)
      .closest("div");
    expect(alertElement).toHaveClass("bg-[#2e7d32] text-white");
  });
  test(`${line} outlined variant`, () => {
    const { getByText } = render(
      <Alert
        type={AlertType.Success}
        variant={AlertVariant.Outlined}
        message={Translations.Message}
      />
    );

    expect(getByText(/This is an Outlined Success alert/i)).toBeInTheDocument();

    const alertElement = screen
      .getByText(/This is an Outlined Success alert/i)
      .closest("div");

    expect(alertElement).toHaveClass("border-green-500 text-green-500");
  });
  test(`${line} filled variant with showIcon set to true`, () => {
    const { getByText, getByTestId } = render(
      <Alert
        type={AlertType.Success}
        variant={AlertVariant.Filled}
        showIcon={true}
        message={Translations.Message}
      />
    );
    expect(getByText(/This is an Filled Success alert/i)).toBeInTheDocument();

    const alertElement = screen
      .getByText(/This is an Filled Success alert/i)
      .closest("div");
    expect(alertElement).toHaveClass("bg-[#2e7d32] text-white");

    const iconElement = getByTestId("icon");
    expect(iconElement).toBeInTheDocument();
  });
  test(`${line} filled variant with showIcon set to true`, () => {
    const { getByText, getByTestId } = render(
      <Alert
        type={AlertType.Success}
        variant={AlertVariant.Filled}
        showIcon={true}
        message={Translations.Message}
      />
    );
    expect(getByText(/This is an Filled Success alert/i)).toBeInTheDocument();

    const alertElement = screen
      .getByText(/This is an Filled Success alert/i)
      .closest("div");
    expect(alertElement).toHaveClass("bg-[#2e7d32] text-white");

    const iconElement = getByTestId("icon");
    expect(iconElement).toBeInTheDocument();
  });
  test(`${line} filled variant with showIcon set to false `, () => {
    const { queryByTestId } = render(
      <Alert showIcon={false} message={Translations.Message} />
    );
    expect(queryByTestId("icon")).not.toBeInTheDocument();
  });
});
