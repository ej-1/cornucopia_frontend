import { connect } from "react-redux";
import Simulation from "../../components/simulation/simulation";
import fetchSimulation from "../actions";

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
)(Simulation);
