import { combineReducers } from "redux";
import { ACTION_TYPES } from "../actions/actionTypes";
import { transformCandleSticksForChart } from "../../components/simulation/transform-candlesticks-for-chart";

let index = 0;
let initialState = {}; // REMOVE THIS??

function simulationReducer(
  state = {
    isFetching: false,
    didInvalidate: false,
    candleSticks: null //[] // WHY DO I NEED TO SET INITIAL STATE?
  },
  action
) {
  console.log(
    "simulationReducer triggered",
    "STATE:",
    state,
    "ACTION:",
    action
  );
  switch (action.type) {
    // MOVE THESE ACTIONS SOMEWHERE ELSE LIKE IN CONVOSE.

    // SHOULD I UPDATE STATE ATTRIBUTES BY SETTING THE TO false DIRECTLY. REDUCER ARE SUPPOSED TO BE PURE FUNCTIONS.
    case "RECEIVE_ERROR":
      console.log("REDUCER RECEIVE_ERROR");
      return Object.assign({}, state, {
        index: index++,
        isFetching: true,
        didInvalidate: false, // REMOVE didInvalidate
        error: action.error,
        candleSticks: null,
        transformedCandleSticks: null,
        roi: null
      });
    case "REQUEST_SIMULATION":
      return Object.assign({}, state, {
        index: index++,
        isFetching: true,
        didInvalidate: false
      });
    case "RECEIVE_SIMULATION":
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
