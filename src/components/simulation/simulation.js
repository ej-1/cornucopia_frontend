import React, { Component } from "react";
import ReactDOM from "react-dom";

import { simulate } from "../../services/api";
import TradesTable from "../tables/trades-table";
import StrategyForm from "../forms/strategy-form";
import CandleStickChart from "../charts/candle-stick-chart";
import Error from "../errors/error";
import ResultJumbotron from "./result-jumbotron";

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

  onErrorMounted() {
    this.setState({
      errorMounted: !this.state.errorMounted
    })
  }

  onChartMounted() {
    this.setState({
      chartMounted: !this.state.chartMounted
    })
  }

  onTradesTableMounted() {
    this.setState({
      tradesTableMounted: !this.state.tradesTableMounted
    })
  }

  onResultJumbotron() {
    this.setState({
      resultJumbotron: !this.state.resultJumbotron
    })
  }

  transformCandleSticksForChart = candleSticks => { // MOVE THIS SOMEWHERE ELSE.
    let transformedCandleSticks = [];
    candleSticks.forEach(candleStick => {
      transformedCandleSticks.push({
        AbsoluteChange: undefined,
        close: candleStick.Close,
        date: new Date(candleStick.Date),
        dividend: "",
        ema12: candleStick.ema12,
        ema26: candleStick.ema26,
        high: candleStick.High,
        low: candleStick.Low,
        MACD: {
          MACD: candleStick.MACD,
          signal:
            candleStick.MACD === undefined
              ? undefined
              : candleStick.MACD.signal,
          divergence:
            candleStick.MACD === undefined
              ? undefined
              : candleStick.MACD.histogram
        },
        open: candleStick.Open,
        percentChange: undefined,
        smaVolume50: candleStick.VolumeTo, // THIS IS WRONG candleStick.smaVolume50 NEED TO CALCULATE THIS smaVolume50.
        split: "",
        volume: candleStick.VolumeFrom // PROBABLY NOT RIGHT VOLUME. DOUBLE-CHECK.
        // "volumeto" means the volume in the currency that is being traded
        // "volumefrom" means the volume in the base currency that things are traded into.
        // https://bitcointalk.org/index.php?topic=1995403.0
      });
    });
    return transformedCandleSticks;
  };

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
            transformedCandleSticks: this.transformCandleSticksForChart(
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

    if (this.state.errorMounted === true) {
      error = <Error message={this.state.error.message} />
    }
    if (this.state.tradesTableMounted === true) {// DO NOT THROW AWAY THE ENTIRE COMPPONENT, but how to remember? prevState does not work here..
      tradesTable = <TradesTable candleSticks={this.state.candleSticks} roi={this.state.roi} />
    }
    if (this.state.chartMounted === true) {
      chart = <CandleStickChart candleSticks={this.state.transformedCandleSticks} />
    }
    if (this.state.resultJumbotron === true) {
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
