import { render } from "@testing-library/react";
import Header from "./Header";

test("matches the snapshot", () => {
  const header = render(<Header></Header>);
  expect(header).toMatchSnapshot();
});
