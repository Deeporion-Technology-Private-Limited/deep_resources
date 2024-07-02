import { render, screen } from "@testing-library/react";
import { Button } from "../DefaultButton";
import { ButtonVariant } from "../type";
import "@testing-library/jest-dom";

describe("DefaultButton", () => {
  // should render a button without a children
  test("should render the button", () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  // should render a button with a dummy children text "Hello"
  test("should render the button with a dummy children text", () => {
    render(<Button>Hello</Button>);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveTextContent("Hello");
  });

  // should render correct color classes for background & text
  test("should have a default dark background bg-gradient-to-r from-[#BFA59A] to-[#3F271E] and text color text-[#FFFFFF] classes", () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass(
      "bg-gradient-to-r from-[#BFA59A] to-[#3F271E] text-[#FFFFFF]"
    );
  });

  test("should have a secondary background bg-[#EBE3E0] and text color text-[#3F271E] classes", () => {
    render(<Button variant={ButtonVariant.DefaultSeconday} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass("bg-[#EBE3E0] text-[#3F271E]");
  });

  test("should have a desabled background bg-[#E8EBED] and text color text-[#72787F] classes", () => {
    render(<Button disabled>Click Me</Button>);
    const buttonElement = screen.getByRole("button", { name: "Click Me" });
    expect(buttonElement).toHaveClass("text-[#72787F] bg-[#E8EBED]");
  });
});
