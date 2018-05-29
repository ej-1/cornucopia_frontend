// Link.react.test.js
import React from "react";
import Footer from "../footer/footer";
import renderer from "react-test-renderer";

test("Footer gets rendered", () => {
  const component = renderer.create(<Footer />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
