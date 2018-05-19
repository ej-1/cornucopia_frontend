import React, { Component } from "react";
import PropTypes from 'prop-types';

class Error extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="error">
          {this.props.message}
      </div>
    );
  }
}

Error.propTypes = {
  message: PropTypes.string.isRequired
}
Error.defaultProps = {
  message: "Something went wrong."
}

export default Error;
