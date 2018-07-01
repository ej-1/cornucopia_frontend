import { connect } from "react-redux";
import StrategyForm from "../../components/forms/strategy-form";
import {
  changeAmount,
  selectCurrencyPair,
  selectStrategy,
  selectStartDate,
  selectEndDate,
  fetchSimulation
} from "../actions";

const mapStateToProps = state => {
  return state.strategyForm;
};

const mapDispatchToProps = dispatch => {
  return {
    changeAmount: data => {
      dispatch(changeAmount(data));
    },
    selectCurrencyPair: data => {
      dispatch(selectCurrencyPair(data));
    },
    selectStrategy: data => {
      dispatch(selectStrategy(data));
    },
    selectStartDate: data => {
      dispatch(selectStartDate(data));
    },
    selectEndDate: data => {
      dispatch(selectEndDate(data));
    },
    fetchSimulation: data => {
      dispatch(fetchSimulation(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StrategyForm);
