import { connect } from "react-redux";
import StrategyForm from "../../components/forms/strategy-form";
import { fetchSimulation } from "../actions";

const mapStateToProps = state => state.simulation;

const mapDispatchToProps = dispatch => {
  return {
    fetchSimulation: data => {
      dispatch(fetchSimulation(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StrategyForm);
