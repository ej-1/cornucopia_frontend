import { convertDate } from "../helpers/date-converter";

const transformCandleSticks = candleSticks => {
  const cs = [...candleSticks];
  for (let i = 0; i < cs.length; i++) {
    let candleStick = cs[i];
    candleStick.date = convertDate(candleStick.date);
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
