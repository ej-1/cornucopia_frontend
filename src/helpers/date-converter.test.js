import { convertDate } from "../helpers/date-converter";

test("convert date", () => {
  expect(convertDate("2018-04-03T09:00:00.000Z")).toEqual(
    new Date("2018-04-03T09:00:00.000Z").toLocaleString()
  );
});
