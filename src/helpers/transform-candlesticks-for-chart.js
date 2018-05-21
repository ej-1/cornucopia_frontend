const transformCandleSticksForChart = candleSticks => {
  let transformedCandleSticks = [];
  candleSticks.forEach(candleStick => {
    transformedCandleSticks.push({
      AbsoluteChange: undefined,
      close: candleStick.Close,
      date: new Date(candleStick.Date),
      dividend: "",
      ema12: candleStick.ema12,
      ema26: candleStick.ema26,
      high: candleStick.High,
      low: candleStick.Low,
      MACD: {
        MACD: candleStick.MACD,
        signal:
          candleStick.MACD === undefined
            ? undefined
            : candleStick.MACD.signal,
        divergence:
          candleStick.MACD === undefined
            ? undefined
            : candleStick.MACD.histogram
      },
      open: candleStick.Open,
      percentChange: undefined,
      smaVolume50: candleStick.VolumeTo, // THIS IS WRONG candleStick.smaVolume50 NEED TO CALCULATE THIS smaVolume50.
      split: "",
      volume: candleStick.VolumeFrom // PROBABLY NOT RIGHT VOLUME. DOUBLE-CHECK.
      // "volumeto" means the volume in the currency that is being traded
      // "volumefrom" means the volume in the base currency that things are traded into.
      // https://bitcointalk.org/index.php?topic=1995403.0
    });
  });
  return transformedCandleSticks;
};

export { transformCandleSticksForChart };
