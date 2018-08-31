import React from "react";
import { FormControl, ControlLabel, Button } from "react-bootstrap";
import DatePicker from "react-datepicker";
import moment from "moment";
import DropDown from "../forms/dropdown/dropdown";
import "react-datepicker/dist/react-datepicker.css";
import "../forms/strategy-form.css";

const StrategyForm = ({
  amount,
  currencyPair,
  strategy,
  endDate,
  startDate,
  fastPeriod,
  slowPeriod,
  signalPeriod,
  simpleMAOscillator,
  simpleMASignal,
  currencyOptions,
  strategyOptions,
  simpleMAOscillatorOptions,
  selectSimpleMASignalOptions,
  //changeAmount,
  selectCurrencyPair,
  selectStrategy,
  changeFastPeriod,
  changeSlowPeriod,
  changeSignalPeriod,
  selectSimpleMAOscillator,
  selectSimpleMASignal,
  selectStartDate,
  selectEndDate,
  fetchSimulation
}) => (
  <div className="strategy-form-container">
    <div className="strategy-form">
      <h4>Simulate strategy</h4>
      <form
        id="strategy-form"
        name="strategy-form"
        onSubmit={e => {
          e.preventDefault();
          fetchSimulation({
            amount,
            currencyPair,
            strategy,
            fastPeriod,
            slowPeriod,
            signalPeriod,
            simpleMAOscillator,
            simpleMASignal,
            startDate,
            endDate
          });
        }}
      >
        {/*DON'T USE AMOUNT FOR NOW*/}
        {/*<ControlLabel>Amount</ControlLabel> 
        <FormControl
          id="amount"
          className="amount"
          componentClass="input"
          type="number"
          onChange={changeAmount}
        />*/}
        <DropDown
          title="currency"
          onSelect={selectCurrencyPair}
          options={currencyOptions}
        />
        <DropDown
          id="dropdown-strategy"
          title="strategy"
          onSelect={selectStrategy}
          options={strategyOptions}
        />
        <ControlLabel>Fast Period</ControlLabel>
        <FormControl
          id="fastPeriod"
          className="fastPeriod"
          componentClass="input"
          type="number"
          value={fastPeriod}
          onChange={changeFastPeriod}
        />
        <ControlLabel>Slow Period</ControlLabel>
        <FormControl
          id="slowPeriod"
          className="slowPeriod"
          componentClass="input"
          type="number"
          value={slowPeriod}
          onChange={changeSlowPeriod}
        />
        <ControlLabel>Signal Period</ControlLabel>
        <FormControl
          id="signalPeriod"
          className="signalPeriod"
          componentClass="input"
          type="number"
          value={signalPeriod}
          onChange={changeSignalPeriod}
        />
        <DropDown
          title="simpleMAOscillator"
          onSelect={selectSimpleMAOscillator}
          options={["true", "false"]}
        />
        <DropDown
          title="simpleMASignal"
          onSelect={selectSimpleMASignal}
          options={["true", "false"]}
        />
        <div>
          <ControlLabel>Trading Start date</ControlLabel>
          <DatePicker
            id="datepicker-startdate"
            selected={moment(startDate)}
            onChange={selectStartDate}
            showTimeSelect
            dateFormat="YYYY/MM/DD HH:00"
            timeFormat="HH:mm"
          />
          <ControlLabel>Trading End date</ControlLabel>
          <DatePicker
            id="datepicker-enddate"
            selected={moment(endDate)}
            onChange={selectEndDate}
            showTimeSelect
            dateFormat="YYYY/MM/DD HH:00"
            timeFormat="HH:mm"
          />
        </div>
        <Button bsStyle="warning" type="submit" block>
          Simulate
        </Button>
      </form>
    </div>
  </div>
);

export default StrategyForm;
