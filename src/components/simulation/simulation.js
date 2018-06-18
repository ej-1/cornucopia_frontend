import React, { Component } from "react";
import ReactDOM from "react-dom";

import { simulate } from "../../services/api";
import TradesTable from "../tables/trades-table";
import StrategyForm from "../forms/strategy-form";
import CandleStickChart from "../charts/candle-stick-chart";
import Error from "../errors/error";
import ResultJumbotron from "./result-jumbotron";
import { transformCandleSticksForChart } from "./transform-candlesticks-for-chart";

class Simulation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      mounted: false
    };
  }

  fetchSimulation = data => {
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
          transformedCandleSticks: transformCandleSticksForChart(data.candleSticks),
          roi: data.roi
        })
      }
    });
  };

  render() {
    const error = this.state.error && (
      <Error message={this.state.error.message} />
    );

    const tradesTable = this.state.mounted && (
      <TradesTable
        candleSticks={this.state.candleSticks}
        roi={this.state.roi}
      />
    );

    const chart = this.state.mounted && (
      <CandleStickChart candleSticks={this.state.transformedCandleSticks} />
    );

    const resultJumbotron = this.state.mounted && (
      <ResultJumbotron roi={this.state.roi} />
    );

    return (
      <div className="simulation">
        <StrategyForm runSimulation={this.fetchSimulation} />
        <div className="simulation-chart-and-table-container">
          {error}
          {chart}
          {resultJumbotron}
          {tradesTable}
        </div>
      </div>
    );
  }
}

export default Simulation;
