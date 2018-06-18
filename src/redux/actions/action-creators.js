let index = 0;

import ACTION_TYPES from "../action-types";

export const runSimulationAction = formOuput => {
  return {
    type: DATA_TYPES.RUN_SIMULATION,
    formOutput: formOuput,
    index: index++
  };
};

export const transformCandleSticks = (candleSticks, form) => {
  return {
    type: DATA_TYPES.TRANSFORM_CANDLESTICKS,
    candleSticks: candleSticks,
    form: form,
    index: index++
  };
};

//dispatch(runSimulation(formOuput));
//dispatch(transformCandleSticks(candleSticks));
