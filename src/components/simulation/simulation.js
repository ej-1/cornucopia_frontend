import React, { Component } from "react";
import ReactDOM from "react-dom";

import { simulate } from "../../services/api";
import TradesTable from "../tables/trades-table";
import StrategyForm from "../forms/strategy-form";
import CandleStickChart from "../charts/candle-stick-chart";
import ErrorBoundary from "../errors/error-boundary";
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

  onNonErrorMounted = () => {
    this.setState({
      mounted: !this.state.mounted
    });
  };

  fetchSimulation = data => {
    simulate(data).then(data => {
      if (data.error) {
        this.setState({
          error: data.error
        });
        if (this.state.mounted)
          this.onNonErrorMounted()
      } else {
        this.setState({
          error: null,
          candleSticks: data.candleSticks,
          transformedCandleSticks: transformCandleSticksForChart(
            data.candleSticks
          ), // MIGHT BE A BAD IDEA. MAYBE IT SHOULD BE REVERSED FROM THE BEGINNING?
          roi: data.roi
        });
        if (!this.state.mounted)
          this.onNonErrorMounted()
      }
    });
    //.catch(error => console.error('something went wrong and it was not the API call', error))
  };

  render() {

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
          <ErrorBoundary>
            <Error error={this.state.error} />
            {chart}
            {resultJumbotron}
            {tradesTable}
          </ErrorBoundary>
        </div>
      </div>
    );
  }
}

export default Simulation;
