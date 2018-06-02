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
const dataWithCandleSticks = {
  candleSticks: [
    { date: "2013-01-01", close: "19.20" },
    { date: "2013-01-02", close: "21.40" }
  ],
  roi: 23.45
};

test("fetchSimulation", () => {
  const wrapper = mount(<Simulation />);

  return wrapper
    .instance()
    .fetchSimulation({ strategy: "MACD" })
    .then(data => {
      {
        expect(wrapper.state()).toEqual({
          candleSticks: [
            { close: "19.20", date: "2013-01-01" },
            { close: "21.40", date: "2013-01-02" }
          ],
          chartMounted: true,
          errorMounted: false,
          resultJumbotron: true,
          roi: 23.45,
          tradesTableMounted: true,
          transformedCandleSticks: dataWithCandleSticks.candleSticks // make this happen
        });
      }
    });
});

// Always return the promise from the funciton being called otherwise .then is called on undefined.
// https://stackoverflow.com/questions/24788171/typeerror-cannot-read-property-then-of-undefined

// How to test promises
// https://stackoverflow.com/questions/36400623/test-promise-chain-with-jest
test("handleFetchSimulation calls onComponentsMount and runs simulation", () => {
  const wrapper = mount(<Simulation />);
  const onComponentsMount = jest.fn(() => {
    return Promise.resolve("value1");
  });

  expect.assertions(1);

  return wrapper
    .instance()
    .handleFetchSimulation({ strategy: "MACD" }, onComponentsMount)
    .then(data => {
      expect(onComponentsMount).toBeCalledWith({
        candleSticks: [
          { date: "2013-01-01", close: "19.20" },
          { date: "2013-01-02", close: "21.40" }
        ],
        roi: 23.45
      });
    });
});

test("onComponentsMount sets state to render Error component if error is supplied", () => {
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

test("onComponentsMount sets state to render Components and sets correct state", () => {
  const wrapper = mount(<Simulation />);

  wrapper.instance().onComponentsMount(dataWithCandleSticks);

  expect(wrapper.state()).toEqual({
    chartMounted: false,
    errorMounted: true,
    tradesTableMounted: false,
    resultJumbotron: false,
    error: undefined,
    candleSticks: dataWithCandleSticks.candleSticks,
    chartMounted: true,
    errorMounted: false,
    resultJumbotron: true,
    roi: dataWithCandleSticks.roi,
    tradesTableMounted: true,
    transformedCandleSticks: dataWithCandleSticks.candleSticks
  });
});
//test("Render Error if error occurs", () => {});
