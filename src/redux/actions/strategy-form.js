import {
  SELECT_AMOUNT,
  SELECT_CURRENCY_PAIR,
  SELECT_STRATEGY,
  SELECT_START_DATE,
  SELECT_END_DATE
} from "../actions/actionTypes";

export const selectAmount = formData => {
  return {
    type: SELECT_AMOUNT,
    formData
  };
};

export const selectCurrencyPair = formData => {
  return {
    type: SELECT_CURRENCY_PAIR,
    formData
  };
};

export const selectStrategy = formData => {
  return {
    type: SELECT_STRATEGY,
    formData
  };
};

export const selectStartDate = formData => {
  return {
    type: SELECT_START_DATE,
    formData
  };
};

export const selectEndDate = formData => {
  return {
    type: SELECT_END_DATE,
    formData
  };
};
