import React, {Component} from 'react'
import { Jumbotron as BootstrapJumbotron, Button, Col } from "react-bootstrap";

class Jumbotron extends Component {
  render() {
    return (
      <Col xs={12} md={12}>
        <BootstrapJumbotron>
          <h1>
            {this.props.header.split('\n').map((item, key) => {
              return <span key={key}>{item}<br/></span>
            })}
          </h1>
          <p>
            {this.props.text.split('\n').map((item, key) => {
              return <span key={key}>{item}<br/></span>
            })}
          </p>
          <p>
            <Button bsStyle={this.props.buttonStyle}>{this.props.buttonText}</Button>
          </p>
        </BootstrapJumbotron>;
      </Col>
    )
  }
}

export default Jumbotron;
