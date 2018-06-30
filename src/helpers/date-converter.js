export const convertDate = date => {
  // "2018-04-03T09:00:00.000Z => 2018-04-03 09:00:00"
  return new Date(date).toLocaleString();
};

export const convertCandleStickDates = candleSticks => {
  const candleSticksClone = [...candleSticks];
  for (let i = 0; i < candleSticksClone.length; i++) {
    candleSticksClone[i].date = convertDate(candleSticksClone[i].date);
  }
  return candleSticksClone;
};
