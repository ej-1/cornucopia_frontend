import { transformCandleSticksForChart } from "../../helpers/transform-candlesticks-for-chart";
import { transformCandleSticks } from "../../helpers/transform-candlesticks";
import { simulate } from "../../services/api";
import {
  REQUEST_SIMULATION,
  RECEIVE_SIMULATION,
  RECEIVE_ERROR
} from "../actions/actionTypes";

export const requestSimulation = payload => {
  return {
    type: REQUEST_SIMULATION,
    payload
  };
};

export const receiveSimulation = (payload, json) => {
  return {
    type: RECEIVE_SIMULATION,
    payload,
    candleSticks: transformCandleSticks(json.candleSticks),
    transformedCandleSticks: transformCandleSticksForChart(json.candleSticks),
    roi: json.roi,
    receivedAt: Date.now()
  };
};

export const receiveError = (payload, json) => {
  return {
    type: RECEIVE_ERROR,
    payload,
    error: json.error,
    receivedAt: Date.now()
  };
};

// Thunk action creator!
export const fetchSimulation = payload => dispatch => {
  dispatch(requestSimulation(payload));
  return simulate(payload).then(response => {
    if (response.error) {
      dispatch(receiveError(payload, response));
    } else if (response.candleSticks) {
      dispatch(receiveSimulation(payload, response));
    }
  });
};
