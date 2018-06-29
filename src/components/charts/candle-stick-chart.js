import React, { Component } from "react";
import PropTypes from "prop-types";
import Chart from "../charts/chart";
//import { getData } from "../charts/utils";
import Style from "../charts/candle-stick-chart.css";

import { TypeChooser } from "react-stockcharts/lib/helper";

class CandleStickChart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.candleSticks) {
      // check if to use null or undefined.
      return <div>Loading...</div>;
    }
    return (
      <div className="chart-container">
        <TypeChooser>
          {type => <Chart type={type} data={this.props.candleSticks} />}
        </TypeChooser>
      </div>
    );
  }
}

CandleStickChart.propTypes = {
  candleSticks: PropTypes.array.isRequired
};

export default CandleStickChart;
