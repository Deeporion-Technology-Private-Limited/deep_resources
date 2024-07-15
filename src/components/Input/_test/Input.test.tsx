import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input } from "@/components/Input/index";
import { InputType, InputVariant } from "../../types";
import SearchImage from "@/images/InputIcons/SearchImage";
import CloseEye from "@/images/InputIcons/CloseEye";
import OpenEye from "@/images/InputIcons/OpenEye";

describe("Input component", () => {
  it(`renders textbox type-${InputType.Checkbox}`, () => {
    render(
      <Input
        type={InputType.Checkbox}
        variant={InputVariant.Standard}
        value={"Hello"}
        data-testid={`${InputType.Checkbox}`}
        eye={<CloseEye />}
        eyeOpen={<OpenEye />}
      />
    );

    let x = screen.getByTestId(`${InputType.Checkbox}`) as HTMLInputElement;
    expect(x).toBeInTheDocument();
    expect(x.getAttribute("type")).toBe(`${InputType.Checkbox}`);
  });

  it(`renders textbox type-${InputType.Date}`, () => {
    render(
      <Input
        type={InputType.Date}
        variant={InputVariant.Standard}
        value={"Hello"}
        data-testid={`${InputType.Date}`}
        eye={<CloseEye />}
        eyeOpen={<OpenEye />}
      />
    );

    let x = screen.getByTestId(`${InputType.Date}`) as HTMLInputElement;
    expect(x).toBeInTheDocument();
    expect(x.getAttribute("type")).toBe(`${InputType.Date}`);
  });

  it(`renders textbox type-${InputType.Email}`, () => {
    render(
      <Input
        type={InputType.Email}
        variant={InputVariant.Standard}
        value={"Hello"}
        data-testid={`${InputType.Email}`}
        eye={<CloseEye />}
        eyeOpen={<OpenEye />}
      />
    );

    let x = screen.getByTestId(`${InputType.Email}`) as HTMLInputElement;
    expect(x).toBeInTheDocument();
    expect(x.getAttribute("type")).toBe(`${InputType.Email}`);
  });

  it(`renders textbox type-${InputType.Input}`, () => {
    render(
      <Input
        type={InputType.Input}
        variant={InputVariant.Standard}
        value={"Hello"}
        data-testid={`${InputType.Input}`}
        eye={<CloseEye />}
        eyeOpen={<OpenEye />}
      />
    );

    let x = screen.getByTestId(`${InputType.Input}`) as HTMLInputElement;
    expect(x).toBeInTheDocument();
    expect(x.getAttribute("type")).toBe(`${InputType.Input}`);
  });

  it(`renders textbox type-${InputType.Number}`, () => {
    render(
      <Input
        type={InputType.Number}
        variant={InputVariant.Standard}
        value={"Hello"}
        data-testid={`${InputType.Number}`}
        eye={<CloseEye />}
        eyeOpen={<OpenEye />}
      />
    );

    let x = screen.getByTestId(`${InputType.Number}`) as HTMLInputElement;
    expect(x).toBeInTheDocument();
    expect(x.getAttribute("type")).toBe(`${InputType.Number}`);
  });

  it(`renders textbox type-${InputType.Numbers}`, () => {
    render(
      <Input
        type={InputType.Numbers}
        variant={InputVariant.Standard}
        value={"Hello"}
        data-testid={`${InputType.Numbers}`}
        eye={<CloseEye />}
        eyeOpen={<OpenEye />}
      />
    );

    let x = screen.getByTestId(`${InputType.Numbers}`) as HTMLInputElement;
    expect(x).toBeInTheDocument();

    expect(x.getAttribute("type")).toBe(`${InputType.Numbers}`);
  });

  it(`renders textbox type-${InputType.Otp}`, () => {
    render(
      <Input
        type={InputType.Otp}
        variant={InputVariant.Standard}
        value={"Hello"}
        data-testid={`${InputType.Otp}`}
        eye={<CloseEye />}
        eyeOpen={<OpenEye />}
      />
    );

    let x = screen.getByTestId(`${InputType.Otp}`) as HTMLInputElement;
    expect(x).toBeInTheDocument();

    expect(x.getAttribute("type")).toBe(`${InputType.Otp}`);
  });

  it(`renders textbox type-${InputType.Password}`, () => {
    render(
      <Input
        type={InputType.Password}
        variant={InputVariant.Standard}
        value={"Hello"}
        data-testid={`${InputType.Password}`}
        eye={<CloseEye />}
        eyeOpen={<OpenEye />}
      />
    );

    let x = screen.getByTestId(`${InputType.Password}`) as HTMLInputElement;
    let k = x.nextSibling;
    expect(x).toBeInTheDocument();
    expect(x.getAttribute("type")).toBe(`${InputType.Password}`);
    if (k) {
      fireEvent.click(k);
    }
    expect(x.getAttribute("type")).toBe(`${InputType.Text}`);
    if (k) {
      fireEvent.click(k);
    }
    expect(x.getAttribute("type")).toBe(`${InputType.Password}`);
  });

  it(`renders textbox type-${InputType.Phone}`, () => {
    render(
      <Input
        type={InputType.Phone}
        variant={InputVariant.Standard}
        value={"Hello"}
        data-testid={`${InputType.Phone}`}
        eye={<CloseEye />}
        eyeOpen={<OpenEye />}
      />
    );

    let x = screen.getByTestId(`${InputType.Phone}`) as HTMLInputElement;
    expect(x).toBeInTheDocument();

    expect(x.getAttribute("type")).toBe(`${InputType.Phone}`);
  });

  it(`renders textbox type-${InputType.Text}, variant-${InputVariant.Filled}`, () => {
    render(
      <Input
        type={InputType.Text}
        variant={InputVariant.Filled}
        className={"border"}
        value={""}
        data-testid={InputType.Text}
      />
    );

    let x = screen.getByTestId(`${InputType.Text}`) as HTMLInputElement;
    expect(x).toHaveClass("bg-gray-100 border-b border-gray-300");
  });

  it(`renders textbox type-${InputType.Text}, variant-${InputVariant.Outlined}`, () => {
    render(
      <Input
        type={InputType.Text}
        variant={InputVariant.Outlined}
        value={""}
        data-testid={InputType.Text}
      />
    );

    let x = screen.getByTestId(`${InputType.Text}`) as HTMLInputElement;
    expect(x).toHaveClass("border border-gray-300");
  });

  it(`renders textbox type-${InputType.Text}, variant-${InputVariant.Standard}`, () => {
    render(
      <Input
        type={InputType.Text}
        variant={InputVariant.Standard}
        value={""}
        data-testid={InputType.Text}
      />
    );

    let x = screen.getByTestId(`${InputType.Text}`) as HTMLInputElement;
    expect(x).toHaveClass("border-b border-gray-300");
  });

  it(`renders textbox type-${InputType.Prefix}`, () => {
    render(
      <Input
        type={InputType.Prefix}
        variant={InputVariant.Standard}
        value={"Hello"}
        data-testid={`${InputType.Prefix}`}
        prefix={"@"}
      />
    );

    let x = screen.getByTestId(`${InputType.Prefix}`) as HTMLInputElement;
    expect(x).toBeInTheDocument();

    expect(x.getAttribute("type")).toBe(`${InputType.Prefix}`);
    expect(screen.getByText("@").innerHTML).toBe(`@`);
  });

  it(`renders textbox type-${InputType.Search}`, () => {
    render(
      <Input
        type={InputType.Search}
        variant={InputVariant.Standard}
        value={"Hello"}
        data-testid={`${InputType.Search}`}
        eye={<CloseEye />}
        eyeOpen={<OpenEye />}
      />
    );

    let x = screen.getByTestId(`${InputType.Search}`) as HTMLInputElement;
    expect(x).toBeInTheDocument();

    expect(x.getAttribute("type")).toBe(`${InputType.Search}`);
  });

  it(`renders textbox type-'${InputType.SearchIcon}'`, () => {
    render(
      <Input
        type={InputType.SearchIcon}
        variant={InputVariant.Standard}
        value={""}
        data-testid={`${InputType.SearchIcon}`}
        search={<SearchImage />}
      />
    );

    let x = screen.getByTestId(`${InputType.SearchIcon}`) as HTMLInputElement;
    expect(x.getAttribute("type")).toBe(`${InputType.SearchIcon}`);
  });
});
