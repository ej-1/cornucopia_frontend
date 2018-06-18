import { combineReducers } from "redux";
import { ACTION_TYPES } from "../actions/action-types";
import { transformCandleSticksForChart } from "../../components/simulation/transform-candlesticks-for-chart";
let index = 0;
let initialState = {}; // REMOVE THIS??

const simulationReducer = (state = [], action) => {
  //console.log("simulationReducer triggered", "STATE:", state, "ACTION:", action);
  switch (action.type) {
    case ACTION_TYPES.FETCH_SIMULATION:
      return Object.assign({}, state, {
        index: index++,
        formData: action.form
      });

    // MOVE THESE SOMEWHERE ELSE LIKE IN CONVOSE.
    case ACTION_TYPES.RECEIVE_ERROR:
      return Object.assign({}, state, {
        index: index++,
        candleSticks: action.candleSticks
      });
    case ACTION_TYPES.RECEIVE_DATA:
      return Object.assign({}, state, {
        index: index++,
        error: action.error,
        candleSticks: null
      });
    default:
      return state;
  }
};

export { simulationReducer };
