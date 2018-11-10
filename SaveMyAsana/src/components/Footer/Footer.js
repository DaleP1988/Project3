import React from "react";
import "./Footer.css";
import { Icon } from "react-materialize";
import { Col, Row, Container } from "../Grid";

const Footer = () => (
  <div className="page-footer teal" id="footer-style">
    <Container>
      <Row>
        <Col size="3">
          <h5 class="white-text">More Info</h5>
          <ul>
            <li>
              <a className="white-text" href="#!">
                FAQ
              </a>
            </li>
            <li>
              <a className="white-text" href="#!">
                About Us
              </a>
            </li>
            <li>
              <a className="white-text" href="#!">
                Blog
              </a>
            </li>
            {/* <li>
              <a classname="white-text" href="#!">
                Press
              </a>
            </li> */}
          </ul>
        </Col>
        <Col size="4">
          <h6 className="white-text">We're Here to Help</h6>
          <p>Mon - Fri: 9am - 5pm </p>
          <p> Sat + Sun: 10am - 4pm</p>
          <p>Call or Text: (800) 555-5555 help@savemyasana.com</p>
        </Col>
        <Col size="3">
          <h5 className="white-text">Social</h5>
          <i className="fab fa-facebook-square fa-3x" />
          <i className="fab fa-instagram fa-3x" />
          <i className="fab fa-twitter-square fa-3x" />

          <h5 className="white-text">Get Our App </h5>
          <img className="img" src="../../images/appStore.png" />
        </Col>
        <Col size="2">
          <img
            // style="height: 200px; width: 200px; background-color: white"
            className="img"
            src="../../images/logo.png"
          />
        </Col>
      </Row>
      <Row>
        <p id="footer">
          <i className="far fa-copyright" />
          2018 SAVE MY ASANA
        </p>
      </Row>
    </Container>
  </div>
);

export default Footer;
