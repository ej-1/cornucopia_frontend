import React from "react";

import TradesTable from "../tables/trades-table";
import StrategyForm from "../forms/strategy-form";
import CandleStickChart from "../charts/candle-stick-chart";
import Error from "../errors/error";
import ResultJumbotron from "./result-jumbotron";
import "../simulation/simulation.css";

const Simulation = ({
  error,
  candleSticks,
  transformedCandleSticks,
  transformedRoi,
  fetchSimulation
}) => (
  <div className="simulation">
    <StrategyForm runSimulation={fetchSimulation} />
    <div className="simulation-chart-and-table-container">
      {error && <Error message={error.message} />}
      {transformedCandleSticks && (
        <CandleStickChart candleSticks={transformedCandleSticks} />
      )}
      {transformedRoi != null && <ResultJumbotron roi={transformedRoi} />}
      {candleSticks && <TradesTable candleSticks={candleSticks} />}
    </div>
  </div>
);

export default Simulation;
