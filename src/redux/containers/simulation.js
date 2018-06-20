import { connect } from "react-redux";
import Simulation from "../../components/simulation/simulation";
import { fetchSimulation } from "../actions";

const mapStateToProps = state => (
  console.log("mapStateToProps CURRENT STATE IS ===> ", state), state.simulation
);

const mapDispatchToProps = dispatch => {
  return {
    fetchSimulation: data => {
      console.log("CONTAINER----->", data), dispatch(fetchSimulation(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Simulation);
