import React, { Component } from "react";
import ReactDOM from "react-dom";

import { simulate } from "../../services/api";
import TradesTable from "../tables/trades-table";
import StrategyForm from "../forms/strategy-form";
import CandleStickChart from "../charts/candle-stick-chart";
import Error from "../errors/error";
import ResultJumbotron from "./result-jumbotron";
import { transformCandleSticksForChart } from "./transform-candlesticks-for-chart";

const Simulation = ({
  mounted,
  error,
  candleSticks,
  transformedCandleSticks,
  roi,
  fetchSimulation
}) => (
  <div className="simulation">
    <StrategyForm runSimulation={fetchSimulation} />
    <div className="simulation-chart-and-table-container">
      {error && <Error message={error.message} />}
      {console.log("SIMULATION COMPONENT -- is there an error?", error)}
      {console.log("SIMULATION COMPONENT -- is there a mounted?", mounted)}
      {console.log("SIMULATION COMPONENT -- is there a roi?", roi)}

      {mounted && <CandleStickChart candleSticks={transformedCandleSticks} />}
      {mounted && <ResultJumbotron roi={roi} />}
      {mounted && <TradesTable candleSticks={candleSticks} roi={roi} />}
    </div>
  </div>
);

export default Simulation;
