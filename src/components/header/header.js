import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";

const Header = () => (
  <div className="header">
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">CornucopiaTrader</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="/simulate">
            Trading Strategy Simulator
          </NavItem>
          <NavItem eventKey={2} href="/robotconfig">
            Robot Settings
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Header;
