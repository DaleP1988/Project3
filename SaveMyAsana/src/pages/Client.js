import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Icon } from "react-materialize";
import background from "../images/floor2.jpg";
import { Link } from "react-router-dom";
import headstand from "../images/headstand.png";

class Client extends Component {
  render() {
    return (
      <div>
        <div className="parallax-container">
          <Container>
            <Row>
              <Col size="12">
                <div className="white center" id="search-heading">
                  <h5 className="center" id="search-title">
                    <img src={headstand}> </img>
                    CLIENT NAME: LOCATION: STUDIO:
                  </h5>
                </div>
              </Col>
            </Row>
            <Row>
              <Col size="5">
                <div className="white center" id="search-heading">
                  <h5 className="center" id="search-title">
                    <img src="change to the example"> </img>
                    image
                  </h5>
                </div>
              </Col>
              <Col size="5">
                <div className="white center" id="search-heading">
                  <h5 className="center" id="search-title">
                    {/* <img src={omSym}> </img> */}
                    begin bio content
                  </h5>
                </div>
              </Col>
            </Row>
            <Row>
              <Col size="12">
                <div className="white center" id="search-heading">
                  <h5 className="center" id="search-title">
                    {/* <img src={omSym}> </img> */}
                    final bio content
                  </h5>
                </div>
              </Col>
            </Row>
          </Container>
          <div className="parallax">
            <img
              className="background-img"
              src={background}
              alt="Unsplashed background img 1"
            />
          </div>
        </div>
        <div className="section-white">
          <h2 className="center">Namaste</h2>
          <Row>
            <div className="center">
              <Col size="3" />
            </div>
            <div className="center">
              <Col size="6">
                <p>
                  "Yoga Is a light with once lit will never dim, the better your
                  practice the brighter your flame."
                </p>
                <p>- B.K.S. Iyengar</p>
              </Col>
            </div>
            <div className="center">
              <Col size="3" />
            </div>
          </Row>
        </div>
      </div>
    );
  }
}
export default Client;
