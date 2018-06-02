jest.mock("./transform-candlesticks-for-chart");
jest.mock("../tables/trades-table");
jest.mock("../charts/candle-stick-chart");
jest.mock("../../services/api");

import React from "react";
import Simulation from "../simulation/simulation";
import renderer from "react-test-renderer";
import { shallow, mount } from "enzyme";
import moment from "moment";

// USE MOCK ISNTEAD
const candleSticks = [
  { date: "2013-01-01", close: "19.20" },
  { date: "2013-01-02", close: "21.40" }
];
// Always return the promise from the funciton being called otherwise .then is called on undefined.
// https://stackoverflow.com/questions/24788171/typeerror-cannot-read-property-then-of-undefined

// How to test promises
// https://stackoverflow.com/questions/36400623/test-promise-chain-with-jest
test("handleFetchSimulation calls onComponentsMount and runs simulation", async () => {
  const wrapper = mount(<Simulation />);
  const onComponentsMount = jest.fn(() => {
    return Promise.resolve("value1");
  });

  expect.assertions(1);

  return wrapper
    .instance()
    .handleFetchSimulation({ strategy: "MACD" }, onComponentsMount)
    .then(data => {
      expect(onComponentsMount).toBeCalledWith([
        { close: "19.20", date: "2013-01-01" },
        { close: "21.40", date: "2013-01-02" }
      ]);
    });
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
