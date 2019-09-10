import * as React from "react";
import { render, waitForElement } from "@testing-library/react";

import useLazyImport from "../useLazyImport";

const App = () => {
  const Imported = useLazyImport(() => import("./Imported"));

  return Imported ? <Imported /> : <>Not imported</>;
};

test("useLazyImport", async () => {
  const { getByText, queryByText } = render(<App />);

  expect(queryByText("Not imported")).toBeTruthy();

  await waitForElement(() => getByText("Imported"));
});

test("useLazyImport on unmount", () => {
  const { queryByText, unmount } = render(<App />);

  expect(queryByText("Not imported")).toBeTruthy();

  unmount();
});
