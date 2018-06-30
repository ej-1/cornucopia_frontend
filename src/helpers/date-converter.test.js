import {
  convertDate,
  convertCandleStickDates
} from "../helpers/date-converter";

describe("convertCandleStickDates", () => {
  const candleSticks = [
    { something: "bla", date: "2018-04-03T09:00:00.000Z" },
    { something: "da", date: "2018-04-03T10:00:00.000Z" }
  ];

  const converted = [
    {
      something: "bla",
      date: new Date("2018-04-03T09:00:00.000Z").toLocaleString()
    },
    {
      something: "da",
      date: new Date("2018-04-03T10:00:00.000Z").toLocaleString()
    }
  ];
  test("convert dates", () => {
    expect(convertCandleStickDates(candleSticks)).toEqual(converted);
  });
});

describe("convertDate", () => {
  test("convert date", () => {
    expect(convertDate("2018-04-03T09:00:00.000Z")).toEqual(
      new Date("2018-04-03T09:00:00.000Z").toLocaleString()
    );
  });
});
