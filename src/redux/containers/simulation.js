import { connect } from "react-redux";
import Simulation from "../../components/simulation/simulation";

const mapStateToProps = state => state.simulation;

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Simulation);
