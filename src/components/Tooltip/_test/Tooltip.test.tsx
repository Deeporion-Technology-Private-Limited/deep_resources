import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tooltip from "../index";
import { Translations } from "../../translations";

describe("Tooltip Component", () => {
  test("should render button", () => {
    const { getByRole } = render(
      <Tooltip content={Translations.HiThere} trigger={Translations.Click}>
        <button>click me</button>
      </Tooltip>
    );
    expect(getByRole("button", { name: "click me" })).toBeInTheDocument();
  });
  test("should render content when clicked", async () => {
    const { getByRole, getByText, queryByText } = render(
      <Tooltip content={Translations.HiThere} trigger={Translations.Click}>
        <button>click me</button>
      </Tooltip>
    );
    fireEvent.click(getByRole("button", { name: "click me" }));
    expect(getByText("hi there")).toBeInTheDocument();

    fireEvent.click(getByRole("button", { name: "click me" }));
    expect(queryByText("hi there")).not.toBeInTheDocument();
  });

  test("should render content when hovered", async () => {
    const { getByText, queryByText } = render(
      <Tooltip content={Translations.HiThere} trigger={Translations.Hover}>
        Hover over me
      </Tooltip>
    );
    fireEvent.mouseEnter(getByText(/Hover over me/i));
    await waitFor(() => expect(getByText("hi there")).toBeInTheDocument());
    fireEvent.mouseLeave(getByText(/Hover over me/i));
    await waitFor(() =>
      expect(queryByText("hi there")).not.toBeInTheDocument()
    );
  });

  test("Should render when content,trigger and placement are passed", async () => {
    const { getByText, queryByTestId } = render(
      <Tooltip
        content={Translations.HiThere}
        trigger={Translations.Hover}
        placement={Translations.Top}
      >
        Hover me
      </Tooltip>
    );

    fireEvent.mouseEnter(getByText("Hover me"));
    let contentText;
    await waitFor(() => {
      contentText = getByText("hi there");
      return expect(contentText).toBeInTheDocument();
    });
    expect(contentText).toHaveClass(
      "transform -translate-x-1/2 left-1/2 bottom-full mb-2 translate-y-0"
    );
    fireEvent.mouseLeave(getByText("Hover me"));
    await waitFor(() => {
      contentText = queryByTestId("tooltip");
      return expect(contentText).not.toBeInTheDocument();
    });
  });

  test("Should render when content,trigger,arrow and placement are passed", async () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <Tooltip
        content={Translations.HiThere}
        trigger={Translations.Hover}
        placement={Translations.Top}
        arrow
      >
        Hover me
      </Tooltip>
    );
    const hover = getByText("Hover me");
    fireEvent.mouseEnter(hover);
    let contentText;
    await waitFor(() => {
      contentText = getByTestId("arrow");
      return expect(contentText).toBeInTheDocument();
    });
    expect(contentText).toHaveClass(
      "absolute w-0 h-0 border-8 border-t-slate-300 border-transparent border-b-0 bottom-[-8px] left-1/2 transform -translate-x-1/2"
    );
    fireEvent.mouseLeave(hover);
    await waitFor(() => {
      contentText = queryByTestId("arrow");
      return expect(contentText).not.toBeInTheDocument();
    });
  });

  test("positions tooltip correctly based on placement", async () => {
    const { getByText } = render(
      <Tooltip
        content={Translations.HiThere}
        trigger={Translations.Click}
        placement={Translations.Top}
      >
        click me
      </Tooltip>
    );
    const click = getByText("click me");
    fireEvent.click(click);
    const contentText = getByText("hi there");
    expect(contentText).toHaveClass(
      "transform -translate-x-1/2 left-1/2 bottom-full mb-2 translate-y-0"
    );
    fireEvent.click(click);
    expect(contentText).not.toBeInTheDocument();
  });

  test("positions tooltip correctly based on placement", async () => {
    const { getByText } = render(
      <Tooltip
        content={Translations.HiThere}
        trigger={Translations.Click}
        placement={Translations.Bottom}
      >
        click me
      </Tooltip>
    );
    const click = getByText("click me");
    fireEvent.click(click);
    const contentText = getByText("hi there");
    expect(contentText).toHaveClass(
      "transform -translate-x-1/2 left-1/2 top-full mt-2 translate-y-0"
    );
    fireEvent.click(click);
    expect(contentText).not.toBeInTheDocument();
  });

  //
  test("positions tooltip correctly based on placement", async () => {
    const { getByText } = render(
      <Tooltip
        content={Translations.HiThere}
        trigger={Translations.Click}
        placement={Translations.Left}
      >
        click me
      </Tooltip>
    );
    const click = getByText("click me");
    fireEvent.click(click);
    const contentText = getByText("hi there");
    expect(contentText).toHaveClass(
      "transform -translate-y-1/2 top-1/2 right-full mr-2 translate-x-0"
    );
    fireEvent.click(click);
    expect(contentText).not.toBeInTheDocument();
  });

  test("positions tooltip correctly based on placement", async () => {
    const { getByText } = render(
      <Tooltip
        content={Translations.HiThere}
        trigger={Translations.Click}
        placement={Translations.Right}
      >
        click me
      </Tooltip>
    );
    const click = getByText("click me");
    fireEvent.click(click);
    const contentText = getByText("hi there");
    expect(contentText).toHaveClass(
      " transform -translate-y-1/2 top-1/2 left-full ml-2 translate-x-0"
    );
    fireEvent.click(click);
    expect(contentText).not.toBeInTheDocument();
  });
  //

  test("positions tooltip correctly based on placement", async () => {
    const { getByText } = render(
      <Tooltip content={Translations.HiThere} trigger={Translations.Click}>
        click me
      </Tooltip>
    );
    const click = getByText("click me");
    fireEvent.click(click);
    const contentText = getByText("hi there");
    expect(contentText).toHaveClass(
      " transform -translate-x-1/2 left-1/2 top-full mt-2 translate-y-0"
    );
    fireEvent.click(click);
    expect(contentText).not.toBeInTheDocument();
  });

  test("Should render when content,trigger,arrow and placement are passed", async () => {
    const { getByText, getByTestId } = render(
      <Tooltip
        content={Translations.HiThere}
        trigger={Translations.Click}
        placement={Translations.Top}
        arrow
      >
        Hover me
      </Tooltip>
    );
    const hover = getByText("Hover me");
    fireEvent.click(hover);
    const contentText = getByTestId("arrow");
    expect(contentText).toHaveClass(
      "absolute w-0 h-0 border-8 border-t-slate-300 border-transparent border-b-0 bottom-[-8px] left-1/2 transform -translate-x-1/2"
    );
    fireEvent.click(hover);
    expect(contentText).not.toBeInTheDocument();
  });
  test("Should render when content,trigger,arrow and placement are passed", async () => {
    const { getByText, getByTestId } = render(
      <Tooltip
        content={Translations.HiThere}
        trigger={Translations.Click}
        placement={Translations.Bottom}
        arrow
      >
        Hover me
      </Tooltip>
    );
    const hover = getByText("Hover me");
    fireEvent.click(hover);
    const contentText = getByTestId("arrow");
    expect(contentText).toHaveClass(
      "absolute w-0 h-0 border-8 border-b-slate-300 border-transparent border-t-0 top-[-8px] left-1/2 transform -translate-x-1/2"
    );
    fireEvent.click(hover);
    expect(contentText).not.toBeInTheDocument();
  });

  test("Should render when content,trigger,arrow and placement are passed", async () => {
    const { getByText, getByTestId } = render(
      <Tooltip
        content={Translations.HiThere}
        trigger={Translations.Click}
        placement={Translations.Left}
        arrow
      >
        Hover me
      </Tooltip>
    );
    const hover = getByText("Hover me");
    fireEvent.click(hover);
    const contentText = getByTestId("arrow");
    expect(contentText).toHaveClass(
      "absolute w-0 h-0 border-8 border-l-slate-300 border-transparent border-r-0 right-[-8px] top-1/2 transform -translate-y-1/2"
    );
    fireEvent.click(hover);
    expect(contentText).not.toBeInTheDocument();
  });

  test("Should render when content,trigger,arrow and placement are passed", async () => {
    const { getByText, getByTestId } = render(
      <Tooltip
        content={Translations.HiThere}
        trigger={Translations.Click}
        placement={Translations.Right}
        arrow
      >
        Hover me
      </Tooltip>
    );
    const hover = getByText("Hover me");
    fireEvent.click(hover);
    const contentText = getByTestId("arrow");
    expect(contentText).toHaveClass(
      "absolute w-0 h-0 border-8 border-r-slate-300 border-transparent border-l-0 left-[-8px] top-1/2 transform -translate-y-1/2"
    );
    fireEvent.click(hover);
    expect(contentText).not.toBeInTheDocument();
  });

  test("Should render when content,trigger,arrow and placement are passed", async () => {
    const { getByText, getByTestId } = render(
      <Tooltip
        content={Translations.HiThere}
        trigger={Translations.Click}
        arrow
      >
        Hover me
      </Tooltip>
    );

    fireEvent.click(getByText("Hover me"));
    const contentText = getByTestId("arrow");
    expect(contentText).toHaveClass(
      "absolute w-0 h-0 border-8 border-b-slate-300 border-transparent border-t-0 top-[-8px] left-1/2 transform -translate-x-1/2"
    );
    fireEvent.click(getByText("Hover me"));
    expect(contentText).not.toBeInTheDocument();
  });
});
