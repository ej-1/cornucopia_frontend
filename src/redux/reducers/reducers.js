import { combineReducers } from "redux";
import { ACTION_TYPES } from "../actions/action-types";
let index = 0;
let initialState = {};

const simulationReducer = (state = [], action) => {
  //console.log("simulationReducer triggered", "STATE:", state, "ACTION:", action);
  switch (action.type) {
    case ACTION_TYPES.RUN_SIMULATION:
      return Object.assign({}, state, {
        index: index++,
        form: action.form,
        candleSticks: action.candleSticks
      });
    default:
      return state;
  }
};

const transformCandleSticksReducer = (state = [], action) => {
  switch (action.type) {
    case ACTION_TYPES.TRANSFORM_CANDLESTICKS:
      return Object.assign({}, state, {
        index: index++,
        form: action.form,
        transformedCandleSticks: action.transformCandleSticks
      });
    default:
      return state;
  }
};

// Note passing middleware as the third argument requires redux@>=3.1.0

// combines Reducers into a state object where the reducers can be called by their keys.
const rootReducer = combineReducers({
  simulationReducer,
  transformCandleSticksReducer
});

export { rootReducer };
