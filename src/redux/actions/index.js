import { transformCandleSticksForChart } from "../../components/simulation/transform-candlesticks-for-chart";
import { simulate } from "../../services/api";

/*
const fetchy = data => {
  return simulate(data).then(data => {
    if (data.error) {
      this.setState({
        error: data.error,
        mounted: false
      });
    } else if (data.candleSticks) {
      this.setState({
        error: null,
        mounted: true,
        candleSticks: data.candleSticks,
        transformedCandleSticks: transformCandleSticksForChart(
          data.candleSticks
        ),
        roi: data.roi
      });
    }
  });
};
*/

export const requestSimulation = data => {
  return {
    type: "REQUEST_SIMULATION",
    data
  };
};

export const receiveSimulation = (data, json) => {
  console.log("action RECEIVE_SIMULATION json", json);
  return {
    type: "RECEIVE_SIMULATION",
    data,
    candleSticks: json.candleSticks,
    transformedCandleSticks: transformCandleSticksForChart(json.candleSticks),
    roi: json.roi,
    receivedAt: Date.now()
  };
};

export const receiveError = (data, json) => {
  return {
    type: "RECEIVE_ERROR",
    data,
    error: json.error,
    receivedAt: Date.now()
  };
};
/*
export const fetchSimulation = data => (
  
  {
    type: "FETCH_SIMULATION",
    data
  }
);
*/

// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchPosts('reactjs'))

export const fetchSimulation = data => {
  console.log("fetchSimulation ../actions/index.js----->", data);
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function(dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestSimulation(data));

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return simulate(data).then(response => {
      console.log("API RESPONSE", response);
      if (response.error) {
        /*
            this.setState({
              error: response.error,
              mounted: false
            });
            */
        dispatch(receiveError(data, response));
      } else if (response.candleSticks) {
        dispatch(receiveSimulation(data, response));
      }
    });
    // Do not use catch, because that will also catch
    // any errors in the dispatch and resulting render,
    // causing a loop of 'Unexpected batch number' errors.
    // https://github.com/facebook/react/issues/6895
    //error => console.log('An error occurred.', error)
    //)
    //.then(json =>
    // We can dispatch many times!
    // Here, we update the app state with the results of the API call.

    //  dispatch(receivePosts(subreddit, json))
    //)
    //}
  };
};
