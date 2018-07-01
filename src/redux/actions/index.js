import {
  REQUEST_SIMULATION,
  RECEIVE_SIMULATION,
  RECEIVE_ERROR
} from "../actions/actionTypes";
import {
  selectAmount,
  selectCurrencyPair,
  selectStrategy,
  selectStartDate,
  selectEndDate
} from "./strategy-form";
import {
  requestSimulation,
  receiveSimulation,
  receiveError,
  fetchSimulation
} from "./simulation";

export default fetchSimulation;
