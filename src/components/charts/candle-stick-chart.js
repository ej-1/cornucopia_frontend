import React, { Component } from "react";
import PropTypes from "prop-types";
import Chart from "../charts/chart";
//import { getData } from "../charts/utils";

import { TypeChooser } from "react-stockcharts/lib/helper";

class CandleStickChart extends React.PureComponent {
  // SHOULD I USE React.Purecomponent? https://reactjs.org/docs/optimizing-performance.html#examples
  constructor(props) {
    super(props);
  }
  /*
      SO FAR: I think I only need to call on this.props.candleSticks below. State is used if I
      need to update something in the component, like if the component changes itself from within
      like Clock (official react docs) example or if I get a props that I want to change.
      Since props are not supposed to be changed
      but rather subject to pure functions, which do not alter arguments/props it receives, I am only supposed to
      save the new value to the component's state.

      the original example https://codesandbox.io/s/github/rrag/react-stockcharts-examples2/tree/master/examples/CandleStickChartWithMACDIndicator
      uses state, but that is probably because it changes itself from withing with:
          getData().then(data => {
            this.setState({ data })
          })
    */

  // This lifecycle hook that is called is before things are rendered and can treat the incoming props.
  // I don't really need it yet, but it makes things a little more explicit.
  // I only need props, should I ignore state altogether? What is best practice?

  render() {
    if (this.props.candleSticks) {
      // check if to use null or undefined.
      //return <div>Loading...</div>;
      throw new Error('CHART CHRASED');
    }
    return (
      <div className="chart-container">
        <div className="chart">
          <TypeChooser>
            {type => <Chart type={type} data={this.props.candleSticks} />}
          </TypeChooser>
        </div>
      </div>
    );
  }
}

CandleStickChart.propTypes = {
  candleSticks: PropTypes.array.isRequired
};

export default CandleStickChart;
