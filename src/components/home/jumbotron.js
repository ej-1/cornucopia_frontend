import React from "react";
import { Jumbotron as BootstrapJumbotron, Button } from "react-bootstrap";

const Jumbotron = ({ header, text, buttonLink, buttonStyle, buttonText }) => (
  <BootstrapJumbotron>
    <h1>
      {header.split("\n").map((item, key) => {
        return (
          <span key={key}>
            {item}
            <br />
          </span>
        );
      })}
    </h1>
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
    <p>
      <Button href={buttonLink} bsStyle={buttonStyle}>
        {buttonText}
      </Button>
    </p>
  </BootstrapJumbotron>
);

export default Jumbotron;
