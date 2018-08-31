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

export const changeAmount = event => {
  return {
    type: CHANGE_AMOUNT,
    amount: parseInt(event.target.value, 10)
  };
};

export const selectCurrencyPair = option => {
  return {
    type: SELECT_CURRENCY_PAIR,
    currencyPair: option
  };
};

export const selectStrategy = option => {
  return {
    type: SELECT_STRATEGY,
    strategy: option
  };
};

export const selectStartDate = date => {
  return {
    type: SELECT_START_DATE,
    startDate: date
  };
};

export const selectEndDate = date => {
  return {
    type: SELECT_END_DATE,
    endDate: date
  };
};

export const changeFastPeriod = number => {
  return {
    type: CHANGE_FAST_PERIOD,
    fastPeriod: number
  };
};

export const changeSlowPeriod = number => {
  return {
    type: CHANGE_SLOW_PERIOD,
    slowPeriod: number
  };
};

export const changeSignalPeriod = number => {
  return {
    type: CHANGE_SIGNAL_PERIOD,
    signalPeriod: number
  };
};

export const selectSimpleMAOscillator = boolean => {
  return {
    type: SELECT_SIMPLE_MA_OSCILLATOR,
    simpleMAOscillator: boolean
  };
};

export const selectSimpleMASignal = boolean => {
  return {
    type: SELECT_SIMPLE_MA_SIGNAL,
    simpleMASignal: boolean
  };
};
