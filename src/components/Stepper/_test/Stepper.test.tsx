import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Stepper from "..";

describe("Testing Stepper", () => {
  it("renders the stepper with 3 steps", () => {
    render(
      <Stepper
        steps={[
          {
            component: () => <div>Step 1</div>,
            title: "Step 1",
            completed: false,
          },
          {
            component: () => <div>Step 2</div>,
            title: "Step 2",
            completed: false,
          },
          {
            component: () => <div>Step 3</div>,
            title: "Step 3",
            completed: false,
          },
        ]}
      />
    );

    let btnN = screen.getByRole("button", { name: "Next" });
    fireEvent.click(btnN);
    let btnR = screen.getByRole("button", { name: "Reset" });
    fireEvent.click(btnR);
    fireEvent.click(btnN);
    fireEvent.click(btnN);
    let btnS = screen.getByRole("button", { name: "Submit" });
    fireEvent.click(btnS);
    btnR = screen.getByRole("button", { name: "Reset" });
    fireEvent.click(btnR);
    btnN = screen.getByRole("button", { name: "Next" });
    fireEvent.click(btnN);
    fireEvent.click(btnN);
    let btnP = screen.getByRole("button", { name: "Previous" });
    fireEvent.click(btnP);
    btnR = screen.getByRole("button", { name: "Reset" });
    fireEvent.click(btnR);
  });
});
