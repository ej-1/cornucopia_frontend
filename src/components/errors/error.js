import React, { Component } from "react";
import PropTypes from "prop-types";

const Error = ({ message }) => <div className="error">{message}</div>;

Error.propTypes = {
  message: PropTypes.string.isRequired
};
Error.defaultProps = {
  message: "Something went wrong."
};

export default Error;
