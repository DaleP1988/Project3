import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import InstructorCard from "../components/InstructorCard";
import { Card, Input, Icon, Button, Modal } from "react-materialize";
import background from "../images/floor2.jpg";

class Booking extends Component {
  render() {
    return (
      <div>
        <div className="parallax-container">
          <Container>
            <div id="booking-section" className="white">
              <Row>
                <div className="white center" id="search-heading">
                  <h2 className="center" id="search-title">
                    <Icon className="medium">event</Icon>CLASS SCHEDULER
                  </h2>
                </div>
              </Row>
              <Row>
                <Col size="6">
                  <InstructorCard />
                </Col>
                <Col size="6">
                  <Card title="Request an Introductory Session">
                      <Row>
                      <div className="input-field col m12">
                          <input placeholder="Date" id="datePick" type="text" class="datepicker" />  
                        <label for="datePick">Select a date</label>
                    </div>
                      </Row>
                      <Row>
                        <div className="input-field col m12">
                          <input placeholder="Time" id="timePick" type="text" class="timepicker" />   
                        <label for="timePick">Select a time</label>  
                      </div>
                      </Row>
                      <Modal
                        header="Thanks for booking!"
                        className=" waves-effect waves-light"
                        trigger={<Button className="waves-effect waves-light btn-small" type="submit">Submit</Button>}
                      >
                        <p>
                          Your request for a session on 'date' at 'time' has been submitted.  'instructor' will contact you directly.
                        </p>
                      </Modal>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="parallax">
            <img
              className="background-img"
              src={background}
              alt="Unsplashed background img 1"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Booking;
