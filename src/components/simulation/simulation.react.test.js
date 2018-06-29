jest.mock("./transform-candlesticks-for-chart");
jest.mock("../tables/trades-table");
jest.mock("../charts/candle-stick-chart");
jest.mock("../../services/api");

import React from "react";
import Simulation from "../simulation/simulation";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";
import moment from "moment";

// USE MOCK INSTEAD
const dataWithCandleSticks = {
  candleSticks: [
    { date: "2013-01-01", close: "19.20" },
    { date: "2013-01-02", close: "21.40" }
  ],
  roi: 23.45
};

test("original state", () => {
  const wrapper = mount(<Simulation />);
  expect(wrapper.state()).toEqual({
    mounted: false,
    error: null
  });
});

test("original snapshot", () => {
  const component = renderer.create(<Simulation />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

// GUIDE TO ASYNC TESTING
// https://gist.github.com/alfonsomunozpomer/de992a9710724eb248be3842029801c8
test("successful api call", async () => {
  const wrapper = mount(<Simulation />);

  expect.assertions(1);

  await wrapper.instance().fetchSimulation({ strategy: "MACD" });

  expect(wrapper.state()).toEqual({
    candleSticks: [
      { close: "19.20", date: "2013-01-01" },
      { close: "21.40", date: "2013-01-02" }
    ],
    mounted: true,
    error: null,
    roi: 23.45,
    transformedCandleSticks: dataWithCandleSticks.candleSticks
  });
});

// PRODUCING UNHELPFUL ERROR THAT NEEDS JEST jest@23.0.0-alpha.7
// https://github.com/facebook/jest/issues/3839
test("unsuccessful api call", () => {
  const wrapper = mount(<Simulation />);

  return wrapper
    .instance()
    .fetchSimulation({ strategy: "SOME INVALID STRATEGY" })
    .then(data => {
      {
        expect(wrapper.state()).toEqual({
          mounted: false,
          error: { error: "Fetch failed. Something wen't wrong" }
        });
      }
    });
});
