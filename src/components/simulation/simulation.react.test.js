jest.mock("./transform-candlesticks-for-chart");
jest.mock("../tables/trades-table");
jest.mock("../charts/candle-stick-chart");

import React from "react";
import Simulation from "../simulation/simulation";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";
import moment from "moment";

test("handleFetchSimulation calls onComponentsMount and runs simulation", () => {
  //global.fetch = require("jest-fetch-mock");
  const wrapper = mount(<Simulation />);
  //const simulate = jest.fn();
  const onComponentsMount = jest.fn();

  //fetch.mockResponseOnce(JSON.stringify({ message: "YATTA!" }));
  //wrapper.instance().handleFetchSimulation({ message: "YATTA!" });
  //expect(wrapper.instance().fetchSimulation).toHaveBeenCalled();

  wrapper
    .instance()
    .handleFetchSimulation({ message: "YATTA!" }, onComponentsMount);

  expect(onComponentsMount).toHaveBeenCalled();
});

test("onComponentsMount renders Error component if error is supplied", () => {
  const wrapper = mount(<Simulation />);
  const data = { error: "SOME ERROR" };

  wrapper.instance().onComponentsMount(data);

  expect(wrapper.state()).toEqual({
    chartMounted: false,
    errorMounted: true,
    tradesTableMounted: false,
    resultJumbotron: false,
    error: "SOME ERROR"
  });
});

test("onComponentsMount renders Components and sets correct state", () => {
  const wrapper = mount(<Simulation />);
  const data = {
    candleSticks: ["some candle sticks should be here"],
    roi: 12.5
  };

  wrapper.instance().onComponentsMount(data);

  expect(wrapper.state()).toEqual({
    chartMounted: false,
    errorMounted: true,
    tradesTableMounted: false,
    resultJumbotron: false,
    error: undefined,
    candleSticks: ["some candle sticks should be here"],
    chartMounted: true,
    errorMounted: false,
    resultJumbotron: true,
    roi: 12.5,
    tradesTableMounted: true,
    transformedCandleSticks: undefined
  });
});
//test("Render Error if error occurs", () => {});
