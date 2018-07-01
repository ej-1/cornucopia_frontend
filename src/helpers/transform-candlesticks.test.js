import { transformCandleSticks } from "../helpers/transform-candlesticks";

describe("transformCandleSticks", () => {
  const candleSticks = [
    {
      untouched: "something",
      date: "2018-04-03T09:00:00.000Z",
      trade: { tradePriceGain: "200.0001", tradePriceGainPercent: "0.1" }
    },
    {
      untouched: "something",
      date: "2018-04-03T10:00:00.000Z",
      trade: { tradePriceGain: "260.0000", tradePriceGainPercent: "-0.2" }
    }
  ];

  const transformed = [
    {
      untouched: "something",
      date: new Date("2018-04-03T09:00:00.000Z").toLocaleString(),
      trade: { tradePriceGain: 200.0001, tradePriceGainPercent: 10.0 }
    },
    {
      untouched: "something",
      date: new Date("2018-04-03T10:00:00.000Z").toLocaleString(),
      trade: { tradePriceGain: 260.0, tradePriceGainPercent: -20.0 }
    }
  ];

  test("transform", () => {
    const result = transformCandleSticks(candleSticks);
    expect(result).toEqual(transformed);
    expect(typeof result[0].trade.tradePriceGain).toEqual("number");
    expect(typeof result[0].trade.tradePriceGainPercent).toEqual("number");
  });
});
