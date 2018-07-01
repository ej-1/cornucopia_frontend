import { ACTION_TYPES } from "../actions/actionTypes";

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
  switch (action.type) {
    case ACTION_TYPES.RECEIVE_ERROR:
      return Object.assign({}, state, {
        formData: action.formData, // Form data should be handled by another reducer for strategy-form.
        index: index++,
        isFetching: true, // use this for spinner.
        didInvalidate: false,
        error: action.error,
        candleSticks: null,
        transformedCandleSticks: null,
        roi: null
      });
    case ACTION_TYPES.REQUEST_SIMULATION:
      return Object.assign({}, state, {
        formData: action.formData,
        index: index++,
        isFetching: true,
        didInvalidate: false
      });
    case ACTION_TYPES.RECEIVE_SIMULATION:
      return Object.assign({}, state, {
        formData: action.formData,
        index: index++,
        isFetching: false,
        didInvalidate: false,
        error: null,
        candleSticks: action.candleSticks,
        transformedCandleSticks: action.transformedCandleSticks,
        roi: action.roi,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

export default simulationReducer;
