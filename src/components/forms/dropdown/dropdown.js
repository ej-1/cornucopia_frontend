import React, { Component } from "react";
import { MenuItem, DropdownButton } from "react-bootstrap";

import "react-datepicker/dist/react-datepicker.css";

class DropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onSelect = selectedOption => {
    this.props.onSelect(selectedOption);
    this.setState({
      selectedOption: selectedOption
    });
  };

  render() {
    const menuItems = []; // REFACTOR TO USE MAP.
    this.props.options.forEach((option, index) => {
      // REFACTOR - DON'T USE INDEX AS UNIQUE KEY. BAD PRACTICE.
      menuItems.push(
        <MenuItem key={index} eventKey={option}>
          {option}
        </MenuItem>
      );
    });

    return (
      <DropdownButton
        id={`dropdown-${this.props.title}`}
        className="dropdown"
        title={this.state.selectedOption || `Choose ${this.props.title}`}
        onSelect={this.onSelect}
      >
        {menuItems}
      </DropdownButton>
    );
  }
}

export default DropDown;
