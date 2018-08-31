import React from "react";
import { FormControl, ControlLabel } from "react-bootstrap";
import DropDown from "../dropdown/dropdown";
import "react-datepicker/dist/react-datepicker.css";
import "../../forms/strategy-form.css"; // CHANGE THIS

const MacdOptions = ({
  fastPeriod,
  slowPeriod,
  signalPeriod,
  selectSimpleMAOscillator,
  selectSimpleMASignal,
  simpleMAOscillatorOptions,
  simpleMASignalOptions,
  changeFastPeriod,
  changeSlowPeriod,
  changeSignalPeriod
}) => (
  <div id="strategy-options">
    <h4>Simulate strategy</h4>
    <ControlLabel>Fast Period</ControlLabel>
    <FormControl
      id="fastPeriod"
      className="fastPeriod"
      s
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
      options={simpleMAOscillatorOptions}
    />
    <DropDown
      title="simpleMASignal"
      onSelect={selectSimpleMASignal}
      options={simpleMASignalOptions}
    />
  </div>
);

export default MacdOptions;
