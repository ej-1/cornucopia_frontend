import React, { Component } from "react";
import PropTypes from "prop-types";

const Error = ({ error }) => {
    if (!error) {
      return null;
    }

    return (
      <div className="error">{error.message}</div>
    );
  }

Error.propTypes = {
  message: PropTypes.string.isRequired
};
Error.defaultProps = {
  message: "Something went wrong."
};

export default Error;
