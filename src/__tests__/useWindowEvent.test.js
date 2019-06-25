import React, { useCallback, useState } from "react";
import { act, render } from "@testing-library/react";

import useWindowEvent from "../useWindowEvent";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useWindowEvent(
    "resize",
    useCallback(() => setWidth(window.innerWidth), [setWidth])
  );

  return <p>{width}</p>;
};

test("useWindowEvent", () => {
  window.innerWidth = 1000;
  const { queryByText } = render(<App />);

  expect(queryByText("1000")).toBeTruthy();

  act(() => {
    window.innerWidth = 500;
    window.dispatchEvent(new Event("resize"));
  });

  expect(queryByText("500")).toBeTruthy();
});
