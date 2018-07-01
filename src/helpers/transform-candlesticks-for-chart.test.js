import {
  transformCandleSticksForChart,
  smaVolume50,
  volumesFrom
} from "../../helpers/transform-candlesticks-for-chart";

describe("volumesFrom", () => {
  const candleSticks = [
    { something: "bla", volumeFrom: 10 },
    { something: "da", volumeFrom: 20 }
  ];

  test("get volumes", () => {
    expect(volumesFrom(candleSticks)).toEqual([10, 20]);
  });
});

describe("smaVolume50", () => {
  describe("50th day and before", () => {
    // REFACTOR LATER
    let volumes = [];
    let length = 50;
    for (let i = 1; i < length + 1; i++) {
      volumes.push(i);
    }

    test("first 49 days are 0, 50th day is calculated", () => {
      // MOVE LATER
      expect(volumes.length).toEqual(50);

      const smaVolume50result = volumes.map((v, i) => smaVolume50(volumes, i));
      expect(smaVolume50result.length).toEqual(50);
      // 49 first days are 0.
      const zeroes = smaVolume50result.filter(i => i == 0);
      expect(zeroes.length).toEqual(49);
      // 50th day is supposed to be calculated.
      expect(smaVolume50result[smaVolume50result.length - 1]).toEqual(
        volumes.reduce((a, b) => a + b, 0) / 50
      );
    });
  });

  describe("50th day and after", () => {
    // REFACTOR LATER
    let volumes = [];
    let length = 100;
    for (let i = 1; i <= length; i++) {
      volumes.push(i * 3);
    }

    test("50th day", () => {
      // MOVE LATER
      const days = 50;
      expect(volumes.length).toEqual(length);

      const fiftyDays = volumes.slice(0, days);
      expect(fiftyDays.length).toEqual(days);
      expect(smaVolume50(fiftyDays, 49)).toEqual(
        fiftyDays.reduce((a, b) => a + b, 0) / days
      );
    });

    test("100th day", () => {
      // MOVE LATER
      const days = 100;

      const fiftyDaysAndAfter = volumes.slice(50, days);
      expect(fiftyDaysAndAfter.length).toEqual(50);
      expect(smaVolume50(fiftyDaysAndAfter, 99)).toEqual(
        fiftyDaysAndAfter.reduce((a, b) => a + b, 0) / 50
      );
    });
  });
});

describe("transformCandleSticksForChart", () => {
  const candleSticks = [
    {
      close: 7390,
      date: "2018-04-03T22:00:00.000Z",
      high: 7433.1,
      id: 926,
      low: 7345,
      netProfit: 1000,
      open: 7431,
      symbol: "BTCUSDT",
      volumeFrom: 1089.66,
      volumeTo: 8048931.74
    },
    {
      MACD: {
        MACD: -0.3678672800051572,
        signal: -5.307016570839783,
        histogram: 4.939149290834626
      },
      close: 7395,
      date: "2018-04-03T07:00:00.000Z",
      ema12: 7364.971133422033,
      ema26: 7534.971133422033,
      high: 7447.99,
      id: 942,
      low: 7319,
      netProfit: 1000,
      open: 7330,
      position: 0,
      symbol: "BTCUSDT",
      volumeFrom: 1645.06,
      volumeTo: 12118679.12
    }
  ];

  // REFACTOR LATER
  let volumes = [];
  let length = 50;
  for (let i = 1; i < length + 1; i++) {
    volumes.push(i);
  }

  const transformCandleSticks = [
    {
      AbsoluteChange: undefined,
      close: 7390,
      date: new Date("2018-04-03T22:00:00.000Z"),
      dividend: undefined,
      ema12: undefined,
      ema26: undefined,
      high: 7433.1,
      low: 7345,
      MACD: {
        MACD: undefined,
        histogram: undefined,
        signal: undefined
      },
      open: 7431,
      percentChange: undefined,
      smaVolume50: 0, // UNIT TESTED THIS SEPARATELY
      split: undefined,
      volume: 1089.66
    },
    {
      MACD: {
        MACD: {
          MACD: -0.3678672800051572,
          histogram: 4.939149290834626,
          signal: -5.307016570839783
        },
        divergence: 4.939149290834626, // taken from histogram
        signal: -5.307016570839783 // taken from signal
      },
      AbsoluteChange: undefined,
      close: 7395,
      date: new Date("2018-04-03T07:00:00.000Z"),
      dividend: undefined,
      ema12: 7364.971133422033,
      ema26: 7534.971133422033,
      high: 7447.99,
      low: 7319,
      open: 7330,
      percentChange: undefined,
      smaVolume50: 0, // UNIT TESTED THIS SEPARATELY
      split: undefined,
      volume: 1645.06
    }
  ];

  test("transform", () => {
    expect(transformCandleSticksForChart(candleSticks)).toEqual(
      transformCandleSticks
    );
  });
});
