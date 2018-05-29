// Link.react.test.js
import React from "react";
import Error from "../errors/error";
import renderer from "react-test-renderer";

test("Error message gets rendered", () => {
  const component = renderer.create(<Error message={"Danger! Danger!"} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
