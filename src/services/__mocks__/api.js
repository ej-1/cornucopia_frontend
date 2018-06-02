const candleSticks = [
  { date: "2013-01-01", close: "19.20" },
  { date: "2013-01-02", close: "21.40" }
];

const simulate = body => {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      if (body.strategy === "MACD") {
        resolve(candleSticks);
      } else {
        reject({
          error: "Fetch failed. Something wen't wrong"
        });
      }
    });
  });
};

export { simulate };
