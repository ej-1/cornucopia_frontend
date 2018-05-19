import React, {Component} from 'react'
import { PageHeader, Col, Button } from "react-bootstrap";

class InfoBox extends Component {
  render() {
    return (
			<Col xs={12} md={6}>
				<PageHeader>
					{this.props.header.split('\n').map((item, key) => {
            return <span key={key}>{item}<br/></span>
          })}
				</PageHeader>
				<p>
					{this.props.text.split('\n').map((item, key) => {
            return <span key={key}>{item}<br/></span>
          })}
				</p>
				<Button
					href={this.props.buttonLink}
					bsStyle={this.props.buttonStyle}
				>
					{this.props.buttonText}
				</Button>
			</Col>
    )
  }
}

export default InfoBox;