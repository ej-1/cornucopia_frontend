import {
  SELECT_AMOUNT,
  SELECT_CURRENCY_PAIR,
  SELECT_STRATEGY,
  SELECT_START_DATE,
  SELECT_END_DATE
} from "../actions/actionTypes";

let index = 0;

let initialState = {
  index: index++,
  amount: null,
  currencyPair: null,
  strategy: null,
  startDate: null,
  endDate: null
};

function strategyFormReducer(state = initialState, action) {
  switch (action.type) {
    case SELECT_AMOUNT:
      return {
        index: index++,
        ...state
      };
    case SELECT_CURRENCY_PAIR:
      return {
        index: index++,
        ...state
      };
    case SELECT_STRATEGY:
      return {
        index: index++,
        ...state
      };
    case SELECT_START_DATE:
      return {
        index: index++,
        ...state
      };
    case SELECT_END_DATE:
      return {
        index: index++,
        ...state
      };
    default:
      return state;
  }
}

export default strategyFormReducer;
