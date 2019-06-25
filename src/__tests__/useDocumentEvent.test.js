import React, { useCallback, useState } from "react";
import { act, fireEvent, render } from "@testing-library/react";

import useDocumentEvent from "../useDocumentEvent";

const App = () => {
  const [paused, setPaused] = useState(false);

  useDocumentEvent(
    "keydown",
    useCallback(
      event => {
        if (event.key === " ") {
          setPaused(value => !value);
        }
      },
      [setPaused]
    )
  );

  return <p>{paused ? "Paused" : "Playing"}</p>;
};

test("useDocumentEvent", () => {
  const { queryByText } = render(<App />);

  expect(queryByText("Playing")).toBeTruthy();

  act(() => void fireEvent.keyDown(document, { key: " " }));

  expect(queryByText("Paused")).toBeTruthy();
});
