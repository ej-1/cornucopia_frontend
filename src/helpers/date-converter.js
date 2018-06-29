const convertDate = date => {
  //"2018-04-03T09:00:00.000Z"
  return new Date(date).toLocaleString();
};

export default { convertDate };
