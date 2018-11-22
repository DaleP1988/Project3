import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import background from "../images/floor2.jpg";
import { Modal } from "react-materialize";
import { Link } from "react-router-dom";
import InstructorSurveyForm from "../components/InstructorSurveyForm/InstructorSurveyForm";
import ClientCard from "../components/ClientCard";

//use API.js to get data to DB

class InstructorSurvey extends Component {
  render() {
    return (
      <div>
        <div className="parallax-container">
          <Container>
            <Row>
              <InstructorSurveyForm />
            </Row>
            <Row>
              <Link to="/instructor">
                {" "}
                <a className="waves-effect waves-light btn-small">
                  Go To Profile
                </a>{" "}
              </Link>
              {/* <Modal
                header="Client Matches!"
                className=" waves-effect waves-light"
                trigger={<a className="waves-effect waves-light btn-small">Go To Profile</a>}>
                <p>
                  These are your suggested matches:
                </p>
                <ClientCard />
                <ClientCard />
                <ClientCard />
                <ClientCard />
                <ClientCard />
              </Modal> */}
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
                  "Yoga is a light which once lit will never dim, the better
                  your practice the brighter your flame."
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

export default InstructorSurvey;
