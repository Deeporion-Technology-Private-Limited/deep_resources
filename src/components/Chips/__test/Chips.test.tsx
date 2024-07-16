import { fireEvent, render, screen } from "@testing-library/react";
import Chips from "..";
import { ChipsTypes } from "../../types";

describe("Chips Component", () => {
  it(`renders Chips with variant-${ChipsTypes.default}`, () => {
    render(<Chips variant={ChipsTypes.default} />);
  });

  it(`renders Chips with variant-${ChipsTypes.not_active}`, () => {
    render(<Chips variant={ChipsTypes.not_active} />);
  });

  it(`renders Chips with variant-${ChipsTypes.active}`, () => {
    render(<Chips variant={ChipsTypes.active} />);
  });

  it(`renders Chips with variant-${ChipsTypes.default} and addLeftIcon=true`, () => {
    render(<Chips variant={ChipsTypes.default} addLeftIcon={true} />);
  });

  it(`renders Chips with variant-${ChipsTypes.active} and addRightIcon=true`, () => {
    render(
      <Chips variant={ChipsTypes.active} addRightIcon={true}>
        Chips Default
      </Chips>
    );

    let x = screen.getByTestId("CloseWhite");
    fireEvent.click(x);
  });
});
