import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'
import { Simulation } from '../actions/action-types'
import { fetchSimulation } from '../reducers/simulation'
//simulationReducer
import { transformCandleSticksForChart } from "./transform-candlesticks-for-chart";

let index = 0;

const getSimulation = (state = [], action) => {
  //console.log("simulationReducer triggered", "STATE:", state, "ACTION:", action);
  switch (action.type) {
    case ACTION_TYPES.RUN_SIMULATION:
      return Object.assign({}, state, {
        index: index++,
        form: action.form,
        candleSticks: action.candleSticks,
        transformedCandleSticks: transformCandleSticksForChart( // AM ALLOWED TO MUTATE DATA HERE?
          data.candleSticks
        )
      });
    default:
      return state;
  }
};

const mapStateToProps = action => ({
  candleSticks: getSimulation(action)
   //todos: getVisibleTodos(state.todos, state.visibilityFilter)
})
​
const mapDispatchToProps = dispatch => {
  return {
    //submitForm: data => {
    //  dispatch(submitSimulationForm(data))
    //},
    fetchSimulation: data => {
      dispatch(fetchSimulation(data))
    }
    //onTodoClick: id => {
    //  dispatch(toggleTodo(id))
    //}
  }
}









const mapDispatchToProps = dispatch => {
  //const { cart } = getState()
  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  //toggleTodo: id => dispatch(toggleTodo(id))
}
​
export const checkout = candleSticks => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.RUN_SIMULATION,
    candleSticks
  });
}







export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Simulation)