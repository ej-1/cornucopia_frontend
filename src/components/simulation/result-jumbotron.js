import React, { Component } from "react";
import ReactDOM from "react-dom";

class ResultJumbotron extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="result-jumbotron-container">
        <div className="result-jumbotron">
          <h3>Total ROI: {parseFloat(this.props.roi * 100).toFixed(2)} %</h3>
        </div>
      </div>
    );
  }
}

export default ResultJumbotron;
