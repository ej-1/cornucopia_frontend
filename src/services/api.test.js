//jest.mock("./api");
//import * as api from "../services/api";
import * as api from "../services/__mocks__/api"; // CALLING THE MOCK FILE DIRECT instead of with jest.mock('./path)

it("promise sends candleSticks with resolves", () => {
  const dataWithCandleSticks = {
    candleSticks: [
      { close: "19.20", date: "2013-01-01" },
      { close: "21.40", date: "2013-01-02" }
    ],
    roi: 23.45
  };

  expect.assertions(1);
  return expect(
    api.simulate({ strategy: "MACD", currencyPair: "BTC-USDT" })
  ).resolves.toEqual(dataWithCandleSticks);
});

it("promise sends error with rejects", () => {
  const dataWithError = {
    error: "Fetch failed. Something wen't wrong"
  };

  expect.assertions(0); // SHOULD THIS REALLY BE 0
  expect(
    api.simulate({ strategy: "EMA", currencyPair: "BTC-USDT" })
  ).rejects.toEqual(dataWithError);
});
