import { combineReducers } from "redux";
import { ACTION_TYPES } from "../actions/actionTypes";
import { transformCandleSticksForChart } from "../../components/simulation/transform-candlesticks-for-chart";

let index = 0;

let initialState = {
  isFetching: false,
  didInvalidate: false, // didInvalidate so you can later toggle it when the data is stale. https://redux.js.org/advanced/async-actions
  index: index++,
  error: null,
  candleSticks: null,
  transformedCandleSticks: null,
  roi: null
};

function simulationReducer(state = initialState, action) {
  console.log(
    "simulationReducer triggered",
    "STATE:",
    state,
    "ACTION:",
    action
  );
  switch (action.type) {
    case ACTION_TYPES.RECEIVE_ERROR:
      console.log("REDUCER RECEIVE_ERROR");
      return Object.assign({}, state, {
        index: index++,
        isFetching: true,
        didInvalidate: false,
        error: action.error,
        candleSticks: null,
        transformedCandleSticks: null,
        roi: null
      });
    case ACTION_TYPES.REQUEST_SIMULATION:
      return Object.assign({}, state, {
        index: index++,
        isFetching: true,
        didInvalidate: false
      });
    case ACTION_TYPES.RECEIVE_SIMULATION:
      console.log("./reducers/simulation RECEIVE_SIMULATION");
      return Object.assign({}, state, {
        index: index++,
        isFetching: false,
        didInvalidate: false,
        error: null,
        candleSticks: action.candleSticks,
        transformedCandleSticks: transformCandleSticksForChart(
          action.candleSticks
        ),
        roi: action.roi,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

export default simulationReducer;
