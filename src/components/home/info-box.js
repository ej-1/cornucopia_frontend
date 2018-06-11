import React, { Component } from "react";
import { PageHeader, Col, Button } from "react-bootstrap";

const InfoBox = ({ header, text, buttonLink, buttonStyle, buttonText }) => (
  <Col xs={12} md={6}>
    <PageHeader>
      {header.split("\n").map((item, key) => {
        return (
          <span key={key}>
            {item}
            <br />
          </span>
        );
      })}
    </PageHeader>
    <p>
      {text.split("\n").map((item, key) => {
        return (
          <span key={key}>
            {item}
            <br />
          </span>
        );
      })}
    </p>
    <Button href={buttonLink} bsStyle={buttonStyle}>
      {buttonText}
    </Button>
  </Col>
);

export default InfoBox;
