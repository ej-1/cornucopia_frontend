import { combineReducers } from "redux";
import { ACTION_TYPES } from "../actions/action-types";
import { transformCandleSticksForChart } from "../../components/simulation/transform-candlesticks-for-chart";

let index = 0;
let initialState = {}; // REMOVE THIS??
/*
const simulation = (state = [], action) => {
  console.log(
    "simulationReducer triggered",
    "STATE:",
    state,
    "ACTION:",
    action
  );
  switch (action.type) {
    case "FETCH_SIMULATION":
      return Object.assign({}, state, {
        index: index++,
        formData: action.data
      });

    // MOVE THESE SOMEWHERE ELSE LIKE IN CONVOSE.
    case "RECEIVE_ERROR":
      console.log("REDUCER RECEIVE_ERROR");
      return Object.assign({}, state, {
        index: index++,
        candleSticks: null,
        error: action.error
      });
    case "RECEIVE_SIMULATION":
      return Object.assign({}, state, {
        index: index++,
        error: action.error,
        candleSticks: null
      });
    case "RECEIVE_SIMULATION":
      return Object.assign({}, state, {
        index: index++,
        error: action.error,
        candleSticks: null
      });
    default:
      return state;
  }
};
*/
function simulationReducer(
  state = {
    isFetching: false,
    didInvalidate: false,
    candleSticks: [] // WHY DO I NEED TO SET INITIAL STATE?
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
    /*
    case INVALIDATE_SUBREDDIT:
      return Object.assign({}, state, {
        didInvalidate: true
      });
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      });
    */
    // MOVE THESE ACTIONS SOMEWHERE ELSE LIKE IN CONVOSE.
    case "RECEIVE_ERROR":
      console.log("REDUCER RECEIVE_ERROR");
      return Object.assign({}, state, {
        index: index++,
        isFetching: true,
        didInvalidate: false,
        mounted: false,
        candleSticks: null,
        transformedCandleSticks: null,
        roi: null,
        error: action.error
      });
    case "REQUEST_SIMULATION":
      return Object.assign({}, state, {
        index: index++,
        isFetching: true,
        didInvalidate: false
      });
    case "RECEIVE_SIMULATION":
      console.log(
        "./reducers/simulation RECEIVE_SIMULATION",
        Object.assign({}, state, {
          index: index++,
          isFetching: false,
          didInvalidate: false,
          mounted: true, // SHOULD PROBABLY NOT NEED TO USE MOUNTED ANYMORE. USE transformedCandleSticks AS CONDITINOAL TO RENDER CHART.
          candleSticks: action.candleSticks,
          transformedCandleSticks: transformCandleSticksForChart(
            action.candleSticks
          ),
          roi: action.roi,
          lastUpdated: action.receivedAt
        })
      );
      return Object.assign({}, state, {
        index: index++,
        isFetching: false,
        didInvalidate: false,
        mounted: true, // SHOULD PROBABLY NOT NEED TO USE MOUNTED ANYMORE. USE transformedCandleSticks AS CONDITINOAL TO RENDER CHART.
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
