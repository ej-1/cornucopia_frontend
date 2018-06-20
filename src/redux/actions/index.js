import { transformCandleSticksForChart } from "../../components/simulation/transform-candlesticks-for-chart";
import { simulate } from "../../services/api";
import { ACTION_TYPES } from "../actions/actionTypes";

export const requestSimulation = data => {
  return {
    type: ACTION_TYPES.REQUEST_SIMULATION,
    data
  };
};

export const receiveSimulation = (data, json) => {
  console.log("action RECEIVE_SIMULATION json", json);
  return {
    type: ACTION_TYPES.RECEIVE_SIMULATION,
    data,
    candleSticks: json.candleSticks,
    transformedCandleSticks: transformCandleSticksForChart(json.candleSticks),
    roi: json.roi,
    receivedAt: Date.now()
  };
};

export const receiveError = (data, json) => {
  return {
    type: ACTION_TYPES.RECEIVE_ERROR,
    data,
    error: json.error,
    receivedAt: Date.now()
  };
};

// Thunk action creator!
export const fetchSimulation = data => {
  console.log("fetchSimulation ../actions/index.js----->", data);

  return function(dispatch) {
    dispatch(requestSimulation(data));
    return simulate(data).then(response => {
      console.log("API RESPONSE", response);
      if (response.error) {
        dispatch(receiveError(data, response));
      } else if (response.candleSticks) {
        dispatch(receiveSimulation(data, response));
      }
    });
  };
};
