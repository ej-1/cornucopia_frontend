import React, { Component } from "react";
import ReactDOM from "react-dom";

import { simulate } from "../../services/api";
import TradesTable from "../tables/trades-table";
import StrategyForm from "../forms/strategy-form";
import CandleStickChart from "../charts/candle-stick-chart";
import Error from "../errors/error";
import ResultJumbotron from "./result-jumbotron";
import { transformCandleSticksForChart } from "../../helpers/transform-candlesticks-for-chart"

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
    })
  }

  onChartMounted = () => {
    this.setState({
      chartMounted: !this.state.chartMounted
    })
  }

  onTradesTableMounted = () => {
    this.setState({
      tradesTableMounted: !this.state.tradesTableMounted
    })
  }

  onResultJumbotron = () => {
    this.setState({
      resultJumbotron: !this.state.resultJumbotron
    })
  }

  fetchSimulation = data => {
    simulate(data)
      .then(data => {
        if (data.error) {
          this.setState({
            error: data.error
          })
          if (!this.state.errorMounted) {
            this.onErrorMounted()
          }
          if (this.state.chartMounted && this.state.tradesTableMounted && this.state.resultJumbotron) {
            this.onChartMounted()
            this.onTradesTableMounted()
            this.onResultJumbotron()
          }
        } else {
          this.setState({
            candleSticks: data.candleSticks,
            transformedCandleSticks: transformCandleSticksForChart(
              data.candleSticks.reverse()), // MIGHT BE A BAD IDEA. MAYBE IT SHOULD BE REVERSED FROM THE BEGINNING?
            roi: data.roi
          })
          if (this.state.errorMounted) {
            this.onErrorMounted()
          }
          if (!this.state.chartMounted && !this.state.tradesTableMounted && !this.state.resultJumbotron) {
            this.onChartMounted()
            this.onTradesTableMounted()
            this.onResultJumbotron()
          }
        }
      })
      //.catch(error => console.error('something went wrong and it was not the API call', error))
  };

  render() {
    let error = ""
    let tradesTable = ""
    let chart = ""
    let resultJumbotron = ""

    if (this.state.errorMounted) {
      error = <Error message={this.state.error.message} />
    }
    if (this.state.tradesTableMounted) {// DO NOT THROW AWAY THE ENTIRE COMPPONENT, but how to remember? prevState does not work here..
      tradesTable = <TradesTable candleSticks={this.state.candleSticks} roi={this.state.roi} />
    }
    if (this.state.chartMounted) {
      chart = <CandleStickChart candleSticks={this.state.transformedCandleSticks} />
    }
    if (this.state.resultJumbotron) {
      resultJumbotron = <ResultJumbotron roi={this.state.roi} />
    }
    return (
      <div className="simulation">
        <StrategyForm runSimulation={this.fetchSimulation}/>
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
