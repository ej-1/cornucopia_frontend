import { connect } from "react-redux";
import StrategyForm from "../../components/forms/strategy-form";
import {
  changeAmount,
  selectCurrencyPair,
  selectStrategy,
  selectStartDate,
  selectEndDate,
  fetchSimulation,
  changeFastPeriod,
  changeSlowPeriod,
  changeSignalPeriod,
  selectSimpleMAOscillator,
  selectSimpleMASignal
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
    },
    changeFastPeriod: data => {
      dispatch(changeFastPeriod(data));
    },
    changeSlowPeriod: data => {
      dispatch(changeSlowPeriod(data));
    },
    changeSignalPeriod: data => {
      dispatch(changeSignalPeriod(data));
    },
    selectSimpleMAOscillator: data => {
      dispatch(selectSimpleMAOscillator(data));
    },
    selectSimpleMASignal: data => {
      dispatch(selectSimpleMASignal(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StrategyForm);
