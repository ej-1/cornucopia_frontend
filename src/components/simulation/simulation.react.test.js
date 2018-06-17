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

// IS THIS TEST TESTING FOR TO MUCH, I ONLY NEED TO KNOW THAT TWO FUNCTIONS WHERE CALLED.
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
          error: false,
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
describe("handleFetchSimulation", () => {
  const wrapper = mount(<Simulation />);

  test("makes successful API call and calls onComponentsMount", () => {
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

  test("makes successful API call, receives error", () => {
    const wrapper = mount(<Simulation />);
    const onComponentsMount = jest.fn(() => {
      return Promise.resolve("value1");
    });

    expect.assertions(1);

    return expect(
      wrapper
        .instance()
        .handleFetchSimulation(
          { strategy: "SOME INVALID STRATEGY" },
          onComponentsMount
        )
    ).rejects.toEqual({ error: "Fetch failed. Something wen't wrong" });
  });
});

describe("onComponentsMount", () => {
  describe("error received", () => {
    describe("no components set", () => {
      test("set state to render Error component", () => {
        const wrapper = mount(<Simulation />);
        const data = { error: "SOME ERROR" };
        wrapper.setState({
          chartMounted: false,
          error: false,
          tradesTableMounted: false,
          resultJumbotron: false
        });

        wrapper.instance().onComponentsMount(data);
        expect(wrapper.state()).toEqual({
          chartMounted: false,
          //error: true,
          tradesTableMounted: false,
          resultJumbotron: false,
          error: "SOME ERROR"
        });
      });
    });

    describe("Error component set", () => {
      test("set state to render Error component", () => {
        const wrapper = mount(<Simulation />);
        const data = { error: "SOME ERROR" };
        wrapper.setState({
          chartMounted: false,
          error: true,
          tradesTableMounted: false,
          resultJumbotron: false
        });

        wrapper.instance().onComponentsMount(data);
        expect(wrapper.state()).toEqual({
          chartMounted: false,
          error: true,
          tradesTableMounted: false,
          resultJumbotron: false,
          error: "SOME ERROR"
        });
      });
    });

    describe("Non Error components set", () => {
      test("set state to render Error component", () => {
        const wrapper = mount(<Simulation />);
        const data = { error: "SOME ERROR" };
        wrapper.setState({
          chartMounted: true,
          error: false,
          tradesTableMounted: true,
          resultJumbotron: true
        });

        wrapper.instance().onComponentsMount(data);
        expect(wrapper.state()).toEqual({
          chartMounted: false,
          error: true,
          tradesTableMounted: false,
          resultJumbotron: false,
          error: "SOME ERROR"
        });
      });
    });
  });

  describe("candleSticks and ROI received", () => {
    describe("No components set", () => {
      test("sets state to render Components and sets correct state", () => {
        const wrapper = mount(<Simulation />);
        wrapper.setState({
          chartMounted: false,
          error: false,
          tradesTableMounted: false,
          resultJumbotron: false
        });

        wrapper.instance().onComponentsMount(dataWithCandleSticks);
        expect(wrapper.state()).toEqual({
          chartMounted: true,
          error: false,
          resultJumbotron: true,
          tradesTableMounted: true,
          candleSticks: dataWithCandleSticks.candleSticks,
          roi: dataWithCandleSticks.roi,
          transformedCandleSticks: dataWithCandleSticks.candleSticks
        });
      });
    });

    describe("Error component set", () => {
      test("sets state to render Components and sets correct state", () => {
        const wrapper = mount(<Simulation />);
        wrapper.setState({
          chartMounted: false,
          error: true,
          tradesTableMounted: false,
          resultJumbotron: false
        });

        wrapper.instance().onComponentsMount(dataWithCandleSticks);
        expect(wrapper.state()).toEqual({
          chartMounted: true,
          error: false,
          resultJumbotron: true,
          tradesTableMounted: true,
          candleSticks: dataWithCandleSticks.candleSticks,
          roi: dataWithCandleSticks.roi,
          transformedCandleSticks: dataWithCandleSticks.candleSticks
        });
      });
    });

    describe("Non Error components set ", () => {
      test("onComponentsMount sets state to render Components and sets correct state", () => {
        const wrapper = mount(<Simulation />);
        wrapper.setState({
          chartMounted: false,
          error: false,
          tradesTableMounted: false,
          resultJumbotron: false
        });

        wrapper.instance().onComponentsMount(dataWithCandleSticks);
        expect(wrapper.state()).toEqual({
          chartMounted: true,
          error: false,
          resultJumbotron: true,
          tradesTableMounted: true,
          candleSticks: dataWithCandleSticks.candleSticks,
          roi: dataWithCandleSticks.roi,
          transformedCandleSticks: dataWithCandleSticks.candleSticks
        });
      });
    });
  });
});

test("set state functions", () => {
  const wrapper = mount(<Simulation />);
  wrapper.instance().onErrorMounted();
  wrapper.instance().onChartMounted();
  wrapper.instance().onTradesTableMounted();
  wrapper.instance().onResultJumbotron();
  wrapper.instance().setCandleSticks(dataWithCandleSticks.candleSticks);
  wrapper
    .instance()
    .setTransformedCandleSticks(["transformed candleSticks placeholder one"]);
  wrapper.instance().setRoi(34.2);

  expect(wrapper.state()).toEqual({
    candleSticks: [
      { close: "19.20", date: "2013-01-01" },
      { close: "21.40", date: "2013-01-02" }
    ],
    chartMounted: true,
    error: true,
    resultJumbotron: true,
    roi: 34.2,
    tradesTableMounted: true,
    transformedCandleSticks: ["transformed candleSticks placeholder one"]
  });

  wrapper.instance().onErrorMounted();
  wrapper.instance().onChartMounted();
  wrapper.instance().onTradesTableMounted();
  wrapper.instance().onResultJumbotron();
  wrapper.instance().setCandleSticks(dataWithCandleSticks.candleSticks);
  wrapper
    .instance()
    .setTransformedCandleSticks(["transformed candleSticks placeholder two"]);
  wrapper.instance().setRoi(45.2);

  expect(wrapper.state()).toEqual({
    candleSticks: [
      { close: "19.20", date: "2013-01-01" },
      { close: "21.40", date: "2013-01-02" }
    ],
    chartMounted: false,
    error: false,
    resultJumbotron: false,
    roi: 45.2,
    tradesTableMounted: false,
    transformedCandleSticks: ["transformed candleSticks placeholder two"]
  });
});

test("nonErrorComponentsMounted", () => {
  const wrapper = mount(<Simulation />);

  expect(wrapper.instance().nonErrorComponentsMounted()).toEqual(false);
  wrapper.instance().onNonErrorComponentsMounted(); // notice this is method to set components, not evalute.
  expect(wrapper.instance().nonErrorComponentsMounted()).toEqual(true);
});

test("onNonErrorComponentsMounted", () => {
  const wrapper = mount(<Simulation />);
  wrapper.instance().onNonErrorComponentsMounted();

  expect(wrapper.state()).toEqual({
    chartMounted: true,
    error: false,
    resultJumbotron: true,
    tradesTableMounted: true
  });

  wrapper.instance().onNonErrorComponentsMounted();

  expect(wrapper.state()).toEqual({
    chartMounted: false,
    error: false,
    resultJumbotron: false,
    tradesTableMounted: false
  });
});
