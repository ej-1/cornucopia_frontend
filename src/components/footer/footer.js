import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="footer">
        <Navbar fixedBottom>
          <Nav>
            <Navbar.Text>
              Copyright © 2018 CornucopiaTrader
            </Navbar.Text>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
