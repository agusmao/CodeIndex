import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid'
import {FlatButton,TextField} from 'material-ui'

class ListActionBar extends Component {

  render() {
    return (
        <Row className="homeListActionBar">
            <Col xs={3}>
                <FlatButton
                    label="Add"
                    onClick={this.props.onAddTapped || ((event) => {})}
                />
            </Col>
            <Col xs={3}>
            <FlatButton
                label="Edit"
            />
            </Col>
            <Col xs={3}>
            <FlatButton
                label="Remove"
            />
            </Col>
        </Row>
    )
  }
}

export default ListActionBar;
