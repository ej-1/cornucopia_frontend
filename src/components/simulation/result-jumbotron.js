import React from "react";

const ResultJumbotron = ({ roi }) => (
  <div className="result-jumbotron-container">
    <div className="result-jumbotron">
      <h3>Total ROI: {roi} %</h3>
    </div>
  </div>
);

export default ResultJumbotron;
