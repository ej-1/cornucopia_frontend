import React, { Component } from "react";
import ReactDOM from "react-dom";

const ResultJumbotron = ({ roi }) => (
  <div className="result-jumbotron-container">
    <div className="result-jumbotron">
      <h3>Total ROI: {parseFloat(roi * 100).toFixed(2)} %</h3>
    </div>
  </div>
);

export default ResultJumbotron;
