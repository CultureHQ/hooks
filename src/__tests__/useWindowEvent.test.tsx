import * as React from "react";
import { act, render } from "@testing-library/react";

import useWindowEvent from "../useWindowEvent";

const App = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  useWindowEvent(
    "resize",
    React.useCallback(() => setWidth(window.innerWidth), [setWidth])
  );

  return <p>{width}</p>;
};

const setInnerWidth = (value: number) => Object.defineProperty(window, "innerWidth", { value });

test("useWindowEvent", () => {
  setInnerWidth(1000);
  const { queryByText } = render(<App />);

  expect(queryByText("1000")).toBeTruthy();

  act(() => {
    setInnerWidth(500);
    window.dispatchEvent(new Event("resize"));
  });

  expect(queryByText("500")).toBeTruthy();
});
