import React from "react";
import ResultJumbotron from "../simulation/result-jumbotron";
import renderer from "react-test-renderer";

test("InfoBox gets rendered", () => {
  let roi = 0.2345;

  const component = renderer.create(<ResultJumbotron roi={roi} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
