import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from '../components/Grid';
import { Icon } from 'react-materialize';

class Home extends Component {

  render() {
    return (
      <div classNameName="parallax-container" id="background">
        <div className="section no-pad-bot">
            <Row>
                <Col size="12">
                <h1 id="title">SAVE MY ASANA</h1><h5 id="description">will help you find the yoga instructor your Asana has been waiting for</h5>
                </Col>
            </Row>
            <Row>
                <Col size="6">
                    <div className="card-panel amber lighten-5">
                        <span className="black-text">
                            <ul>
                                <li>
                                    <p>How many times have you been to a yoga class that turned out to be too hard or too easy or too philosophical?</p>
                                </li>
                                <li>
                                    <p>There are many yoga instructors out there</p>
                                </li>
                                <li>
                                    <p>It's great to have a lot of options, but its hard to know which ones will be a good fit.</p>
                                </li>
                                <li>
                                    <p>Allow us to help...</p>
                                </li>
                                <li>
                                    <p>If you are new, advanced, sort of injured, really out-of-shape, or just super intimidated, Save My Asana can help you find the class you need</p>
                                </li>
                            </ul>
                        </span>
                    </div>
                </Col>
                <Col size="6">
                </Col>
            </Row>
            <div className="section white">
                <Row>
                    <Col size="12">
                            <h3 className="center">HOW IT WORKS</h3>
                                <div className="center">
                                    <Col size="4">
                                        <Icon className="medium">account_circle</Icon>
                                        <h5>Log in and create profile</h5>
                                    </Col>
                                </div>
                                <div className="center">
                                    <Col size="4">
                                        <Icon className="medium">assignment_ind</Icon>
                                        <h5>Find match</h5>
                                    </Col>
                                </div>
                                <div className="center">
                                    <Col size="4">
                                        <Icon className="medium">event_available</Icon>
                                        <h5>Connect</h5>
                                    </Col>
                                </div>
                    </Col>
                </Row>
            </div>

        </div>
    </div>
    );
  }
}

export default Home;