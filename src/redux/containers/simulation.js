import { connect } from "react-redux";
import Simulation from "../../components/simulation/simulation";
import { simulate } from "../../services/api";
//import { fetchSimulation } from "../reducers/simulation";
//simulationReducer
import { transformCandleSticksForChart } from "../../components/simulation/transform-candlesticks-for-chart";
import { fetchSimulation } from "../actions";
import ACTION_TYPES from "../actions/actionTypes";
//import fetchSimulation from "../actions/actionCreators";
import TradesTable from "../../components/tables/trades-table";

const getComponents = (candleSticks, error, mounted) => {
  if (mounted) {
    // MAYBE USE THIS INSTEAD -- SimulationMounted.SHOW_ALL:
    return {
      candleSticks: candleSticks,
      transformedCandleSticks: transformCandleSticksForChart(candleSticks)
    };
  } else if (error) {
    return {
      error: error
    };
  } else {
    return {
      mounted: false,
      error: null
    };
  }
};

const mapStateToProps = state => (
  console.log("mapStateToProps CURRENT STATE IS ===> ", state),
  state.simulation
  /*
  {
    mounted: false,
    error: null
  }
  */
);
//todos: getVisibleTodos(state.todos, state.visibilityFilter)

const mapDispatchToProps = dispatch => {
  return {
    //submitForm: data => {
    //  dispatch(submitSimulationForm(data))
    //},
    fetchSimulation: data => {
      console.log("CONTAINER----->", data), dispatch(fetchSimulation(data)); // simulation here comes from /reducers/index.js,
      //which combines reducers into a single rootReducer.
    }
    //onTodoClick: id => {
    //  dispatch(toggleTodo(id))
    //}
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Simulation);
