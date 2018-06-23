import React, { Component } from "react";
import { Image, Grid, Col, Row } from "react-bootstrap";

import Jumbotron from "../home/jumbotron";
import InfoBox from "../home/info-box";

class Home extends Component {
  jumbotronProps = {
    header: "Welcome to CornucopiaTrader!",
    text:
      "A trading platform for simulating cryptocurrency \n\
      trading strategies based on technical indicators",
    buttonLink: "/simulate",
    buttonStyle: "primary",
    buttonText: "Try it out"
  };

  firstInfoBoxProps = {
    header: "Run trade simulations",
    text:
      "With CornucopiaTrader you can simulate trading strategies based on \n \
      technical indicators using historical exchange data from Binance.",
    buttonLink: "/simulate",
    buttonStyle: "primary",
    buttonText: "Simulate now"
  };

  secondInfoBoxProps = {
    header: "Setup a tradebot",
    text: "Coming soon...",
    buttonLink: "/robotconfig",
    buttonStyle: "primary",
    buttonText: "Setup now"
  };

  render() {
    return (
      <Grid>
        <Row className="home-jumbotron">
          <Jumbotron {...this.jumbotronProps} />
        </Row>

        <Row className="home-image-chart">
          <Col xs={12} md={12}>
            <Image src="/candlestick-chart.png" thumbnail />
          </Col>
        </Row>

        <Row className="home-info-boxes">
          <InfoBox {...this.firstInfoBoxProps} />
          <InfoBox {...this.secondInfoBoxProps} />
        </Row>
      </Grid>
    );
  }
}

export default Home;
