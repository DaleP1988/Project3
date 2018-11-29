import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import InstructorCard from "../components/InstructorCard";
import { Card, Input, Icon, Button, Modal } from "react-materialize";
import background from "../images/floor2.jpg";
import InstructorSchedule from "../components/InstructorSchedule";
import API from "../utils/API";
import $ from "jquery";

class Booking extends Component {
  state = {
    Instructor: "Johnny Salke",
    Location: "",
    City: "",
    InstructorSchedules: [],
    InstructorBio: [],
    Day: "",
    Time: ""
    // Modal: []
  };

  selectedDate = React.createRef();

  //when component mounts, get instructor from session storage, load to this.state.instructorSchedule

  componentDidMount() {
    // this.getInstructorName();
    // this.findSchedules();
  }

  ////////////////////
  ////GET NAME///////
  ////GET LOC////////
  ///////////////////

  getInstructorName = event => {
    // save the data from the other page
    this.setState({ Instructor: event.target.value });
  };

  getInstructorLocation = event => {
    // save the data from the other page
    this.setState({ Location: event.target.value });
  };

  ////////////////////
  ////AJAX CALL//////
  ////MBO////////////
  ///////////////////

  handleSearchSubmit = event => {
    event.preventDefault();
    API.getClasses(this.state.Instructor, this.state.Location).then(res => {
      console.log("got data ", res.data);
      this.setState({ InstructorSchedules: res.data });
    });
  };

  /////////////////////
  ///abbrv profile/////
  /////////////////////

  //function to get the instructor name from session storage

  // funciton to get the profile data into card

  fillAbbrevProfile = () => {
    API.getIP(this.state.name, this.state.loc).then(res => {
      this.setState({ clients: res.data });
    });
  };

  // method to create a single card div
  // instructor card

  renderInstructorContactInfo = () => {
    return this.state.InstructorSchedules.map(schedule => (
      <InstructorCard
        key={schedule.instructor}
        name={schedule.instructor}
        studio={schedule.studioName}
        location={schedule.location}
        address={schedule.address}
      />
    ));
  };

  //////////////////
  //BOOKING INPUT///
  //////////////////

  //method for getting the date input

  handleDateChange = event => {
    console.log("changing date");
    this.setState({ Time: event.target.value });
  };

  //method for getting the time input

  handleTimeInput = event => {
    this.setState({ Day: event.target.value });
  };

  handleTimeDate(event) {
    // event.preventDefault();
    console.log("here ", this.state.Time, this.state.Day);
  }

  //////////////////
  ///MODAL BUILD///
  /////////////////

  //not sure if above will return the right result

  // method for rendering the modal div
  // may not need this method. can just do the

  // renderModal = () => {
  //   return this.state.Modal.map(schedule => (
  //     <BookingResult>
  //       -id={schedule._id}
  //       key={schedule._id}
  //       name = {Modal.name}
  //       location = {Modal.location}
  //       studio = {Modal.studio}
  //       email = {Modal.email}
  //       phone = {Modal.phone}
  //     </BookingResult>
  //   ));
  // };

  ///////////////////
  ///FILL SCHEDULE//
  //////////////////

  //function to search with the name. for the axios call to MBO
  // make sure it gets the right instructor

  // findSchedule = () => {
  //   API.getClasses(this.state.Instructor)
  //     .then(res => {
  //       var responseArray =
  //         typeof res.data.response.docs !== "undefined"
  //           ? res.data.response.docs
  //           : [];
  //       if (responseArray) {
  //         classList = responseArray.Classes.class;
  //       }
  //       this.setState({ InstructorSchedules: classList });
  //     })
  //     .catch(err => console.log(err));
  // };

  //method for rendering one instructor schedule div

  renderInstructorSchedule = () => {
    return this.state.InstructorSchedules.map(schedule => (
      <InstructorSchedule>
        -id={schedule._id}
        key={schedule._id}
        className = {schedule.nameClass}
        level = {schedule.classLevel}
        description = {schedule.description}
        location = {schedule.location}
        date = {schedule.date}
        time = {schedule.time}
        studio = {schedule.studio}
        spots = {schedule.spots}
        cancellation = {schedule.cancellation}
        registration ={schedule.registration}
        address = {schedule.address}
      </InstructorSchedule>
    ));
  };

  render(props) {
    console.log("here", this.refs);
    return (
      <div>
        <div className="parallax-container">
          <Container>
            <div
              style={{ marginTop: "20px", height: "250px" }}
              id="booking-section"
              className="white responsive"
            >
              <Row>
                <div className="center" id="search-heading">
                  <h2
                    className="center"
                    id="search-title"
                    style={{ "margin-bottom": "0px" }}
                  >
                    <Icon className="medium">event</Icon>
                    CLASS SCHEDULER
                  </h2>
                </div>
              </Row>
              <Row>
                <div className="center" id="search-heading">
                  <div className="input-field col m6">
                    <input
                      placeholder="Name"
                      id="name"
                      type="text"
                      class="name"
                      style={{ width: "80%" }}
                      onChange={this.getInstructorName}
                      value={this.state.Instructor}
                    />
                  </div>
                  <div className="input-field col m6">
                    <input
                      placeholder="City, State"
                      id="location"
                      type="text"
                      class="location"
                      style={{ width: "80%" }}
                      onChange={this.getInstructorLocation}
                      value={this.Location}
                    />
                  </div>
                  <a
                    className="waves-effect waves-light btn-small left"
                    style={{ "margin-left": "5%" }}
                    onClick={this.handleSearchSubmit}
                  >
                    Submit
                  </a>
                </div>
              </Row>

              <Row>
                <Col size="6">{this.renderInstructorContactInfo()}</Col>
                <Col size="6">
                  <Card title="Request an Introductory Session">
                    <Row>
                      <div className="input-field col m12">
                        <input
                          placeholder="Date"
                          id="datePick"
                          type="text"
                          class="datepicker"
                          ref={this.selectedDate}
                          onSet={this.handleDateChange}
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
                          onChange={this.handleTimeInput}
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
                          onClick={this.handleTimeDate}
                        >
                          Submit
                        </Button>
                      }
                    >
                      <p>
                        Your request for a session
                        {/* {this.selectedDate.current} at */}
                        {this.state.Time} has been submitted.
                        {this.state.Instructor} will contact you directly.
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
                  {this.renderInstructorSchedule()}
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
