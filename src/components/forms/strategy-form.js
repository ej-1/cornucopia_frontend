import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  MenuItem,
  DropdownButton,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";

class StrategyForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChangeStartDate = date => {
    this.setState({
      startDate: date
    });
  };

  handleChangeEndDate = date => {
    // MERGE THE DATE FUNCTINOS INTO ONE FUNCTION INSTEAD OF TWO.
    this.setState({
      endDate: date
    });
  };

  handleChangeStrategy = strategy => {
    this.setState({
      strategy: strategy
    });
  };

  handleChangeCurrencyPair = currencyPair => {
    this.setState({
      currencyPair: currencyPair
    });
  };

  handleChangeAmount = event => {
    // MOVE THIS TO THE TOP SO THE METHODS ARE IN THE SAME ORDER AS RENDERED OBJECTS.
    this.setState({
      amount: parseInt(event.target.value, 10)
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { amount, currencyPair, startDate, endDate, strategy } = this.state;
    this.props.runSimulation({
      amount,
      currencyPair,
      startDate,
      endDate,
      strategy
    });
  };
  // DON'T HARDCODE CURRENCY PAIRS IN DROPDOWN.
  render() {
    return (
      <div className="strategy-form-container">
        <div className="strategy-form">
          <h4>Simulate strategy</h4>
          <form
            id="strategy-form"
            name="strategy-form"
            onSubmit={this.handleSubmit}
          >
            <ControlLabel>Amount</ControlLabel>{" "}
            <FormControl
              className="strategy-form-amount"
              componentClass="input"
              type="number"
              placeholder={this.state.amount}
              value={this.state.amount || 1000}
              onChange={this.handleChangeAmount}
            />
            <DropdownButton
              className="dropdown"
              title={this.state.currencyPair || "Currency Pair"}
              onSelect={this.handleChangeCurrencyPair}
            >
              <MenuItem eventKey="BTC-BNB">BTC-BNB</MenuItem>
              <MenuItem eventKey="BTC-USDT">BTC-USDT</MenuItem>
            </DropdownButton>
            <DropdownButton
              className="dropdown"
              title={this.state.strategy || "Strategy"}
              onSelect={this.handleChangeStrategy}
            >
              <MenuItem eventKey="MACD">MACD</MenuItem>
              <MenuItem eventKey="EMA">EMA</MenuItem>
            </DropdownButton>
            <div>
              <ControlLabel>Trading Start date</ControlLabel>{" "}
              <DatePicker
                selected={this.state.startDate || moment()}
                onChange={this.handleChangeStartDate}
                showTimeSelect
                dateFormat="YYYY/MM/DD HH:00"
                timeFormat="HH:mm"
              />
              <ControlLabel>Trading End date</ControlLabel>{" "}
              <DatePicker
                selected={this.state.endDate || moment()}
                onChange={this.handleChangeEndDate}
                showTimeSelect
                dateFormat="YYYY/MM/DD HH:00"
                timeFormat="HH:mm"
              />
            </div>
            <Button bsStyle="warning" type="submit" block>
              Submit
            </Button>
          </form>
        </div>
      </div>
    );
  }
}

export default StrategyForm; // officiella module export sättet, men i node är det inte uppdaterat, så där måste man skriva
// module.exports = { runSimulation, trades, net_profit, net_profit_percent }
