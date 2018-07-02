import {
  CHANGE_AMOUNT,
  SELECT_CURRENCY_PAIR,
  SELECT_STRATEGY,
  SELECT_START_DATE,
  SELECT_END_DATE
} from "../actions/actionTypes";

let index = 0;

let initialState = {
  index: index++,
  currencyOptions: ["BTC-USDT", "BTC-BNB"],
  strategyOptions: ["MACD", "EMA"]
};

function strategyFormReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_AMOUNT:
      return {
        ...state,
        index: index++,
        amount: action.amount
      };
    case SELECT_CURRENCY_PAIR:
      return {
        ...state,
        index: index++,
        currencyPair: action.currencyPair
      };
    case SELECT_STRATEGY:
      return {
        ...state,
        index: index++,
        strategy: action.strategy
      };
    case SELECT_START_DATE:
      return {
        ...state,
        index: index++,
        startDate: action.startDate
      };
    case SELECT_END_DATE:
      return {
        ...state,
        index: index++,
        endDate: action.endDate
      };
    default:
      return state;
  }
}

export default strategyFormReducer;
