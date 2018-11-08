import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../components/Grid';
import { Icon } from 'react-materialize';

class Booking extends Component {

  render() {
    return (
        <div>
            <div className="white">
                <Row>
                    <Col size="12">
                        <Row>
                            <div className="white center" id="search-heading">
                                <h2 className="center" id="search-title"><Icon className="medium">search</Icon>SEARCH INSTRUCTORS</h2>
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">account_circle</i>
                                    <input id="icon_prefix" type="text" class="validate" />
                                    <label for="icon_prefix">Name</label>
                                </div>
                            </div>
                            <div className="white center">
                                <div class="input-field col s6">
                                    <i class="material-icons prefix">account_circle</i>
                                    <input id="icon_prefix" type="text" class="validate" />
                                    <label for="icon_prefix">Location (city)</label>
                                </div>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
  }

}

export default Booking;