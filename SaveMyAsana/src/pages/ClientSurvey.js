import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import background from "../images/floor2.jpg";
import { Link } from "react-router-dom";
import ClientSurveyForm from "../components/ClientSurveyForm/ClientSurveyForm";
import { Button, Modal } from "react-materialize";
import InstructorCard from '../components/InstructorCard';

// on click get data (obj), call result function, display in modal...
// add a modal to the page

class ClientProfile extends Component {
  render() {
    return (
      <div>
        <div className="parallax-container">
          <Container>
            <Row>
              <ClientSurveyForm />
            </Row>
            <Row>
              <Modal
                header="Instructor Matches!"
                className=" waves-effect waves-light"
                trigger={<Button>View Matches</Button>}
              >
                <p>
                  These are your suggested matches:
                </p>
                <InstructorCard />
                <InstructorCard />
                <InstructorCard />
                <InstructorCard />
                <InstructorCard />
              </Modal>
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

export default ClientProfile;
