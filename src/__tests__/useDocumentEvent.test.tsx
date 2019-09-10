import * as React from "react";
import { fireEvent, render } from "@testing-library/react";

import useDocumentEvent from "../useDocumentEvent";

const App = () => {
  const [paused, setPaused] = React.useState(false);

  const onKeyDown = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.key === " ") {
        setPaused(value => !value);
      }
    },
    [setPaused]
  );

  useDocumentEvent("keydown", onKeyDown as ((event: Event) => void));

  return <p>{paused ? "Paused" : "Playing"}</p>;
};

test("useDocumentEvent", () => {
  const { queryByText } = render(<App />);
  expect(queryByText("Playing")).toBeTruthy();

  fireEvent.keyDown(document, { key: " " });
  expect(queryByText("Paused")).toBeTruthy();
});
