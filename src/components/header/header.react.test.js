import React from "react";
import Header from "../header/header";
import renderer from "react-test-renderer";

test("Header gets rendered", () => {
  const component = renderer.create(<Header />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
