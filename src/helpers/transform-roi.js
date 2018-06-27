const transformRoi = roi => {
  return parseFloat(roi * 100).toFixed(2);
};

export { transformRoi };
