import React from "react";
import InfoBox from "../home/info-box";
import renderer from "react-test-renderer";

test("InfoBox gets rendered", () => {
  let infoBoxProps = {
    header: "Run trade simulations",
    text:
      "With CornucopiaTrader you simulate trading based on technical \n \
            indicators on historical exchange data from Binance.",
    buttonLink: "/simulate",
    buttonStyle: "primary",
    buttonText: "Simulate now"
  };

  const component = renderer.create(<InfoBox {...infoBoxProps} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
