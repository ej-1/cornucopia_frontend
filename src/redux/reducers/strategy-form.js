import {
  CHANGE_AMOUNT,
  SELECT_CURRENCY_PAIR,
  SELECT_STRATEGY,
  SELECT_START_DATE,
  SELECT_END_DATE,
  CHANGE_FAST_PERIOD,
  CHANGE_SLOW_PERIOD,
  CHANGE_SIGNAL_PERIOD,
  SELECT_SIMPLE_MA_OSCILLATOR,
  SELECT_SIMPLE_MA_SIGNAL
} from "../actions/actionTypes";
import moment from "moment";

let index = 0;

let initialState = {
  index: index++,
  currencyOptions: ["BTC-USDT"],
  strategyOptions: ["MACD"],
  fastPeriod: 21,
  slowPeriod: 50,
  signalPeriod: 9,
  simpleMAOscillatorOptions: ["false", "true"],
  simpleMASignalOptions: ["false", "true"],
  endDate: moment(Date.now()),
  startDate: moment(Date.now())
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
    case CHANGE_FAST_PERIOD:
      return {
        ...state,
        index: index++,
        fastPeriod: action.fastPeriod
      };
    case CHANGE_SLOW_PERIOD:
      return {
        ...state,
        index: index++,
        slowPeriod: action.slowPeriod
      };
    case CHANGE_SIGNAL_PERIOD:
      return {
        ...state,
        index: index++,
        signalPeriod: action.signalPeriod
      };
    case SELECT_SIMPLE_MA_OSCILLATOR:
      return {
        ...state,
        index: index++,
        simpleMAOscillator: action.simpleMAOscillator
      };
    case SELECT_SIMPLE_MA_SIGNAL:
      return {
        ...state,
        index: index++,
        simpleMASignal: action.simpleMASignal
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
