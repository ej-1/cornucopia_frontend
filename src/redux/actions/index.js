import { transformCandleSticksForChart } from "../../helpers/transform-candlesticks-for-chart";
import { transformCandleSticks } from "../../helpers/transform-candlesticks";
import { simulate } from "../../services/api";
import {
  REQUEST_SIMULATION,
  RECEIVE_SIMULATION,
  RECEIVE_ERROR
} from "../actions/actionTypes";

export const requestSimulation = formData => {
  return {
    type: REQUEST_SIMULATION,
    formData
  };
};

export const receiveSimulation = (formData, json) => {
  return {
    type: RECEIVE_SIMULATION,
    formData: formData,
    candleSticks: transformCandleSticks(json.candleSticks),
    transformedCandleSticks: transformCandleSticksForChart(json.candleSticks),
    roi: json.roi,
    receivedAt: Date.now()
  };
};

export const receiveError = (formData, json) => {
  return {
    type: RECEIVE_ERROR,
    formData: formData,
    error: json.error,
    receivedAt: Date.now()
  };
};

// Thunk action creator!
export const fetchSimulation = formData => dispatch => {
  dispatch(requestSimulation(formData));
  return simulate(formData).then(response => {
    if (response.error) {
      dispatch(receiveError(formData, response));
    } else if (response.candleSticks) {
      dispatch(receiveSimulation(formData, response));
    }
  });
};
