import { combineReducers } from "redux";
import simulation from "./simulation";
import strategyForm from "./strategy-form";

export default combineReducers({
  simulation,
  strategyForm
});
