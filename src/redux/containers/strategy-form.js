import React, { Component } from "react";
import { connect } from "react-redux";
import StrategyForm from "../../components/forms/strategy-form";
import {
  changeAmount,
  selectCurrencyPair,
  selectStrategy,
  selectStartDate,
  selectEndDate,
  submitForm,
  fetchSimulation
} from "../actions";

const mapStateToProps = state => {
  console.log("STATE IS : ", state.strategyForm);
  return state.strategyForm;
};

const mapDispatchToProps = dispatch => {
  return {
    changeAmount: data => {
      // alert("changeAmount");
      dispatch(changeAmount(data));
    },
    selectCurrencyPair: data => {
      dispatch(selectCurrencyPair(data));
    },
    selectStrategy: data => {
      dispatch(selectStrategy(data));
    },
    selectStartDate: data => {
      dispatch(selectStartDate(data));
    },
    selectEndDate: data => {
      dispatch(selectEndDate(data));
    },
    // THIS MIGHT NOT BE NEEEDED
    submitForm: data => {
      dispatch(submitForm(data));
    },
    fetchSimulation: data => {
      dispatch(fetchSimulation(data));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StrategyForm);
