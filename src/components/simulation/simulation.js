import React from "react";
import { Image, Grid, Col, Row } from "react-bootstrap";
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
  roi,
  fetchSimulation
}) => (
  <Grid>
    <Row>
      <Col xs={12} md={3}>
        <StrategyForm />
      </Col>

      <Col xs={12} md={9}>
        <div className="simulation-chart-and-table-container">
          {error && <Error message={error.message} />}
          {transformedCandleSticks && (
            <CandleStickChart candleSticks={transformedCandleSticks} />
          )}
          {roi != null && <ResultJumbotron roi={roi} />}
          {candleSticks && <TradesTable candleSticks={candleSticks} />}
        </div>
      </Col>
    </Row>
  </Grid>
);

export default Simulation;
