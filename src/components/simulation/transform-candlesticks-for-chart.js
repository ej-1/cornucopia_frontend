const transformCandleSticksForChart = candleSticks => {
  let transformedCandleSticks = [];
  candleSticks.forEach(candleStick => {
    transformedCandleSticks.push({
      AbsoluteChange: undefined,
      close: parseFloat(candleStick.close), // MAYBE PUT PARSEFLOAT EVERYWHERE TO BE SURE.
      date: new Date(candleStick.date),
      dividend: "",
      ema12: candleStick.ema12,
      ema26: candleStick.ema26,
      high: parseFloat(candleStick.high),
      low: parseFloat(candleStick.low),
      MACD: {
        MACD: candleStick.MACD,
        signal:
          candleStick.MACD === undefined ? undefined : candleStick.MACD.signal,
        divergence:
          candleStick.MACD === undefined
            ? undefined
            : candleStick.MACD.histogram
      },
      open: parseFloat(candleStick.open),
      percentChange: undefined,
      smaVolume50: parseFloat(candleStick.volumeTo), // THIS IS WRONG candleStick.smaVolume50 NEED TO CALCULATE THIS smaVolume50.
      split: "",
      volume: parseFloat(candleStick.volumeFrom) // PROBABLY NOT RIGHT VOLUME. DOUBLE-CHECK.
      // "volumeto" means the volume in the currency that is being traded
      // "volumefrom" means the volume in the base currency that things are traded into.
      // https://bitcointalk.org/index.php?topic=1995403.0
    });
  });
  return transformedCandleSticks;
};

export { transformCandleSticksForChart };
