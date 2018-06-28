const volumesFrom = candleSticks => {
  return candleSticks.map(candleStick => candleStick.volumeFrom);
};

const smaVolume50 = (volumes, i) => {
  let days = 50;
  if (i >= days - 1) {
    let volume50days = volumes.slice(0, days);
    return volume50days.reduce((a, b) => a + b, 0) / days;
  } else {
    return 0;
  }
};

const transformCandleSticksForChart = candleSticks => {
  let transformedCandleSticks = [];
  const volumes = volumesFrom(candleSticks);

  candleSticks.forEach((candleStick, i) => {
    transformedCandleSticks.push({
      AbsoluteChange: undefined,
      close: parseFloat(candleStick.close),
      date: new Date(candleStick.date),
      dividend: undefined,
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
      smaVolume50: smaVolume50(volumes, i),
      split: undefined,
      volume: parseFloat(candleStick.volumeFrom)
      // "volumeto" means the volume in the currency that is being traded
      // "volumefrom" means the volume in the base currency that things are traded into.
      // https://bitcointalk.org/index.php?topic=1995403.0
    });
  });
  return transformedCandleSticks;
};

export { transformCandleSticksForChart, smaVolume50, volumesFrom };
