import { combineReducers } from "redux";
import simulation from "./simulation";
import strategyFrom from "./strategy-form";

export default combineReducers({
  simulation,
  strategyFrom
});
