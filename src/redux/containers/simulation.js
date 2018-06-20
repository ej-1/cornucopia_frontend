import { connect } from "react-redux";
import Simulation from "../../components/simulation/simulation";
import { simulate } from "../../services/api";
import { transformCandleSticksForChart } from "../../components/simulation/transform-candlesticks-for-chart";
import { fetchSimulation } from "../actions";
import TradesTable from "../../components/tables/trades-table";

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
