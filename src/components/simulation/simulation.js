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
      chartMounted: false,
      errorMounted: false,
      tradesTableMounted: false,
      resultJumbotron: false
    };
  }

  onErrorMounted = () => {
    this.setState({
      errorMounted: !this.state.errorMounted
    });
  };

  onChartMounted = () => {
    this.setState({
      chartMounted: !this.state.chartMounted
    });
  };

  onTradesTableMounted = () => {
    this.setState({
      tradesTableMounted: !this.state.tradesTableMounted
    });
  };

  onResultJumbotron = () => {
    this.setState({
      resultJumbotron: !this.state.resultJumbotron
    });
  };

  transformCandleSticks = candleSticks => {
    return transformCandleSticksForChart(candleSticks); // MIGHT BE A BAD IDEA. MAYBE IT SHOULD BE REVERSED FROM THE BEGINNING?
  };

  setCandleSticks = candleSticks => {
    this.setState({
      candleSticks: candleSticks
    });
  };

  setTransformedCandleSticks = candleSticks => {
    this.setState({
      transformedCandleSticks: this.transformCandleSticks(candleSticks) // MIGHT BE A BAD IDEA. MAYBE IT SHOULD BE REVERSED FROM THE BEGINNING?
    });
  };

  setRoi = roi => {
    this.setState({
      roi: roi
    });
  };

  onComponentsMount = data => {
    if (data.error) {
      this.setState({
        error: data.error
      });

      if (!this.state.errorMounted) this.onErrorMounted();
      if (this.nonErrorComponentsMounted()) this.onNonErrorComponentsMounted();
    } else if (data.candleSticks) {
      this.setCandleSticks(data.candleSticks);
      this.setTransformedCandleSticks(data.candleSticks);
      this.setRoi(data.roi);

      if (this.state.errorMounted) this.onErrorMounted();
      if (!this.nonErrorComponentsMounted()) this.onNonErrorComponentsMounted();
    }
  };

  nonErrorComponentsMounted = () => {
    return (
      this.state.chartMounted &&
      this.state.tradesTableMounted &&
      this.state.resultJumbotron
    );
  };

  onNonErrorComponentsMounted = () => {
    this.onChartMounted();
    this.onTradesTableMounted();
    this.onResultJumbotron();
  };

  handleFetchSimulation = (data, onComponentsMount) => {
    return simulate(data).then(data => {
      // NEED TO USE RETURN OTHERWISE => .then called on undefined.
      onComponentsMount(data);
    });
    //.catch(error => console.error('something went wrong and it was not the API call', error))
  };

  fetchSimulation = data => {
    return this.handleFetchSimulation(data, this.onComponentsMount);
  };

  render() {
    const error = this.state.error && (
      <Error message={this.state.error.message} />
    );

    const tradesTable = this.state.tradesTableMounted && (
      <TradesTable
        candleSticks={this.state.candleSticks}
        roi={this.state.roi}
      />
    );

    const chart = this.state.chartMounted && (
      <CandleStickChart candleSticks={this.state.transformedCandleSticks} />
    );

    const resultJumbotron = this.state.resultJumbotron && (
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
