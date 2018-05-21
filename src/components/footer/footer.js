import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

const Footer = () => (
  <div className="footer">
    <Navbar fixedBottom>
      <Nav>
        <Navbar.Text>Copyright © 2018 CornucopiaTrader</Navbar.Text>
      </Nav>
    </Navbar>
  </div>
);

export default Footer;
