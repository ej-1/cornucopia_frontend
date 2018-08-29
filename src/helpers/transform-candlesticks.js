import { convertDate } from "../helpers/date-converter";

const transformCandleSticks = candleSticks => {
  const cs = [...candleSticks];
  for (let i = 0; i < cs.length; i++) {
    let candleStick = cs[i];
    candleStick.date = convertDate(candleStick.date);

    // Change the number of decimals to 6 decimals.
    candleStick.close = candleStick.close.toFixed(6);
    candleStick.ema12 = candleStick.ema12
      ? candleStick.ema12.toFixed(6)
      : undefined;
    candleStick.ema26 = candleStick.ema26
      ? candleStick.ema26.toFixed(6)
      : undefined;
    candleStick.high = candleStick.high.toFixed(6);
    candleStick.low = candleStick.low.toFixed(6);
    candleStick.netProfit = candleStick.netProfit.toFixed(6);
    candleStick.volumeFrom = candleStick.volumeFrom.toFixed(6);
    candleStick.volumeTo = candleStick.volumeTo.toFixed(6);
    if (candleStick.trade) {
      candleStick.trade.tradePriceGain = candleStick.trade.tradePriceGain.toFixed(
        6
      );
    }

    if (candleStick.trade) {
      const trade = candleStick.trade;
      trade.tradePriceGain = Number(parseFloat(trade.tradePriceGain));
      trade.tradePriceGainPercent = parseFloat(
        Number(trade.tradePriceGainPercent * 100).toFixed(2)
      );
    }
  }
  return cs;
};

export { transformCandleSticks };
