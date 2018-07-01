export const convertDate = date => {
  // Be aware of timezone conversion can change the hours.
  // "2018-04-03T09:00:00.000Z" => 2018-04-03 11:00:00
  return new Date(date).toLocaleString();
};
