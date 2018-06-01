//jest.mock("./api");
//import * as api from "../services/api";
import * as api from "../services/__mock__/api"; // CALLING THE MOCK FILE DIRECT instead of with jest.mock('./path)

it("promise sends candleSticks with resolves", () => {
  expect.assertions(1);
  return expect(
    api.simulate({ strategy: "MACD", currencyPair: "BTC-USDT" })
  ).resolves.toEqual([
    { date: "2013-01-01", close: "19.20" },
    { date: "2013-01-02", close: "21.40" }
  ]);
});

it("promise sends error with rejects", () => {
  expect.assertions(0); // SHOULD THIS REALLY BE 0
  expect(
    api.simulate({ strategy: "EMA", currencyPair: "BTC-USDT" })
  ).rejects.toEqual({
    error: "Fetch failed. Something wen't wrong"
  });
});
