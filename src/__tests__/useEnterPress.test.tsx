import * as React from "react";
import { fireEvent, render } from "@testing-library/react";

import useEnterPress from "../useEnterPress";

const App = () => {
  const [pressed, setPressed] = React.useState(false);

  useEnterPress(React.useCallback(() => setPressed(true), []));

  return <p>{pressed ? "Pressed" : "Not pressed"}</p>;
};

test("useEnterPress", () => {
  const { queryByText } = render(<App />);
  expect(queryByText("Not pressed")).toBeTruthy();

  fireEvent.keyDown(document, { key: "Tab" });
  expect(queryByText("Not pressed")).toBeTruthy();

  fireEvent.keyDown(document, { key: "Enter" });
  expect(queryByText("Pressed")).toBeTruthy();
});
