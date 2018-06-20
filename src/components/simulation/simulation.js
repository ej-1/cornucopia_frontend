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
      {console.log("SIMULATION COMPONENT -- is there a roi?", roi)}

      {transformedCandleSticks && (
        <CandleStickChart candleSticks={transformedCandleSticks} />
      )}
      {roi && <ResultJumbotron roi={roi} />}
      {candleSticks && <TradesTable candleSticks={candleSticks} />}
    </div>
  </div>
);

export default Simulation;
