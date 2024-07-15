import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SystemMessage } from "..";
import { systemMessageTypes } from "../../types";

describe("SystemMessage component", () => {
  it(`renders SystemMessage with no attributes then by default it will have 
      variant:systemMessageTypes.error, 
      size: "sm", 
      colorscheme: "primary"`, () => {
    render(
      <SystemMessage handleClose={function (): void {}}>
        Variant by Default
      </SystemMessage>
    );
  });

  it(`renders SystemMessage with variant:systemMessageTypes.error `, () => {
    render(
      <SystemMessage
        addRightIcon={true}
        variant={systemMessageTypes.error}
        handleClose={function (): void {}}
      >
        Variant error
      </SystemMessage>
    );
    let btn = screen.getByRole("button");
    fireEvent.click(btn);
  });

  it(`renders SystemMessage with variant:systemMessageTypes.warning `, () => {
    render(
      <SystemMessage
        addRightIcon={true}
        variant={systemMessageTypes.warning}
        handleClose={function (): void {}}
      />
    );
  });

  it(`renders SystemMessage with variant:systemMessageTypes.information `, () => {
    render(
      <SystemMessage
        addRightIcon={true}
        variant={systemMessageTypes.information}
        handleClose={function (): void {}}
      />
    );
  });
});
