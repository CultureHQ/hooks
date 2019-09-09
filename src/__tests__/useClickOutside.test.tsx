import * as React from "react";
import { fireEvent, render } from "@testing-library/react";

import useClickOutside from "../useClickOutside";

const Clickable = ({ onClickOutside }: { onClickOutside: () => void }) => {
  const containerRef = useClickOutside<HTMLButtonElement>(onClickOutside);

  return <button type="button" ref={containerRef}>Inside</button>;
};

const ClickContainer = ({ onClickOutside }) => (
  <div>
    <button type="button">Outside</button>
    <Clickable onClickOutside={onClickOutside} />
  </div>
);

test("calls up when the click comes from outside the element", () => {
  const onClickOutside = jest.fn();
  const { getByText } = render(<ClickContainer onClickOutside={onClickOutside} />);

  fireEvent.click(getByText("Inside"));
  expect(onClickOutside).not.toHaveBeenCalled();

  fireEvent.click(getByText("Outside"));
  expect(onClickOutside).toHaveBeenCalledTimes(1);
});
