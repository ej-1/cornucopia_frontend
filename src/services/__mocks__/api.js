const data = {
  candleSticks: [
    { date: "2013-01-01", close: "19.20" },
    { date: "2013-01-02", close: "21.40" }
  ],
  roi: 23.45
};

const simulate = body => {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      if (body.strategy === "MACD") {
        resolve(data);
      } else {
        reject({
          error: "Fetch failed. Something wen't wrong"
        });
      }
    });
  });
};

export { simulate };
