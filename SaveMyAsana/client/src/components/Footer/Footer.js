import React from "react";
import "./Footer.css";
import { Icon } from "react-materialize";
import { Col, Row, Container } from "../Grid";
import logo from "../../images/logo.png";
import appStore from "../../images/appStore.png";
import { Link } from "react-router-dom";

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
              <Link to="/about">
                <a className="white-text" href="#!">
                  About Us
                </a>
              </Link>
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
          <img className="img" id="appStore" src={appStore} />
        </Col>
        <Col size="2">
          <img className="img" id="logoBtn" src={logo} alt="logo" />
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
