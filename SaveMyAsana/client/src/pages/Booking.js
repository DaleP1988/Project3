import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import InstructorCard from "../components/InstructorCard";
import { Card, Input, Icon, Button, Modal } from "react-materialize";
import background from "../images/floor2.jpg";
import InstructorSchedule from "../components/InstructorSchedule";

class Booking extends Component {
  state = {
    name: "",
    city: "",
    state: "",
    instructorSchedule: [],
    date: "",
    time: ""
  };

  // use session storage from previous to get the name of the instructor
  // run ajax with this data
  // fill the table

  // handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Getting NYT Articles");
  //   console.log("this.state.topic: ", this.state.topic);
  //   console.log("this.state.startYear: ", this.state.startYear);
  //   console.log("this.state.endYear: ", this.state.endYear);
  //   API.searchNYT(this.state.topic, this.state.startYear, this.state.endYear)
  //     .then((res) => {
  //       this.setState({ articles: res.data.response.docs });
  //       console.log("this.state.articles: ", this.state.articles);
  //     });
  // }

  // ADD THE MODAL, FILL date and time message....

  render() {
    return (
      <div>
        <div className="parallax-container">
          <Container>
            <div
              style={{ marginTop: "20px" }}
              id="booking-section"
              className="white responsive"
            >
              <Row>
                <div className="center" id="search-heading">
                  <h2 className="center" id="search-title">
                    <Icon className="medium">event</Icon>
                    CLASS SCHEDULER
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
                        <input
                          placeholder="Date"
                          id="datePick"
                          type="text"
                          class="datepicker"
                        />
                        <label for="datePick">Select a date</label>
                      </div>
                    </Row>
                    <Row>
                      <div className="input-field col m12">
                        <input
                          placeholder="Time"
                          id="timePick"
                          type="text"
                          class="timepicker"
                        />
                        <label for="timePick">Select a time</label>
                      </div>
                    </Row>
                    <Modal
                      header="Thanks for booking!"
                      className=" waves-effect waves-light"
                      trigger={
                        <Button
                          className="waves-effect waves-light btn-small"
                          type="submit"
                        >
                          Submit
                        </Button>
                      }
                    >
                      <p>
                        Your request for a session on 'date' at 'time' has been
                        submitted. 'instructor' will contact you directly.
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
        <div className="section-white">
          <Container style={{ height: "400px" }}>
            <h2 className="center">RESULTS</h2>
            <Row>
              <Col size="12">
                <div style={{}} className="" id="booking-results">
                  <InstructorSchedule />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Booking;
