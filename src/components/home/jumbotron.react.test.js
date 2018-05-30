import React from "react";
import Jumbotron from "../home/jumbotron";
import renderer from "react-test-renderer";

test("InfoBox gets rendered", () => {
  let jumbotronProps = {
    header: "Welcome to CornucopiaTrader!",
    text:
      "A trading service for simulation trading strategies based on \n \
            technical indicators using historical trade data.",
    buttonLink: "/",
    buttonStyle: "primary",
    buttonText: "Learn more"
  };

  const component = renderer.create(<Jumbotron {...jumbotronProps} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
