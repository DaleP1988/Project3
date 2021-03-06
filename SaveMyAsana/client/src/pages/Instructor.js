import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import background from "../images/floor2.jpg";
import { Link } from "react-router-dom";
import OM from "../images/omSym.png";
import InstructorCard from "../components/InstructorCard";
import { Card, Input, Icon, Button, Modal } from "react-materialize";
import InstructorResultContact from "../components/ResultDivs/InstructorResultContact";
import InstructorResultBio from "../components/ResultDivs/InstructorResultBio";
import API from "../utils/API";

//need to be directed from form page, fill in the data, change the state
// use functions defined client side in API.js (utils)
// make a UUID with javascript,

class Instructor extends React.Component {
  // state = {
  //   iProf: [],
  //   InstructorName: "Johnny Salke",
  //   // studio: "",
  //   location: "San Luis Obispo, CA"
  // };

  // this is built with hardcoded name and location data
  // we arent going to be able to get the info from the previous page
  //

  // componentDidMount() {
  //   // this.getInstructorName();
  //   // this.getInstructorProfile();
  //   //can I just call all the others here?
  // }

  // get data from props

  /////////////////////////////////////
  ///METHOD FOR GETTING THE INS FORM///
  /////////////////////////////////////

  // we'll use this if we end up able to get the

  // instructorProfileSubmit = data => {
  //   alert(data);
  //   var modalRes = JSON.stringify(data);
  //   this.setState({ ModalResult: modalRes });

  // method for getting name from session storage
  // hard code into state if it doesnt work

  // getInstructorName = () => {
  //   var instructorName = sessionStorage.getItem("key");
  //   var location = sessionStorage.getItem("key");
  //   // figure out how to get it from component ... use session storage? see clientSurveyForm, use the onsubmit option
  //   // need a method to set the state with the object from the onSubmit
  //   // eliminate the sessionStorage
  //   // save the data from the other page
  //   this.setState({ InstructorName: instructorName });
  // };

  // //Method for getting the saved survey from the db
  // getInstructorProfile = () => {
  //   API.getIP(this.state.InstructorName, this.state.location).then(res => {
  //     this.setState({ iProf: res.iPros });
  //     // revise....
  //     // this.setState({ iProf: res.data });
  //     // this.setState({ location: res.data.Location });

  //     //can I add code right into here for the rendering?
  //   });
  // };

  // // method for rendering a results div

  // renderinstructorProfContact = () => {
  //   return this.state.iProf.map(iProf => (
  //     <InstructorResultContact>
  //       {/* need to make a results component */}
  //       {/* this needs to reference the client components */}
  //       -id={iProf.id}
  //       key={iProf._id}
  //       name={iProf.Firstname + iProf.Lastname}
  //       email={iProf.email}
  //       phone={iProf.phone}
  //       location={iProf.loc}
  //       img={iProf.img}
  //     </InstructorResultContact>
  //   ));
  // };

  // renderinstructorProfBio = () => {
  //   return this.state.iProf.map(iProf => (
  //     <InstructorResultBio>
  //       {/* make sure the content below gets to the right parts of the survey */}
  //       {/* check the selections in dev tools */}
  //       -id={iProf.id}
  //       key={iProf._id}
  //       about={iProf.q2}
  //       style={iProf.q1}
  //       background={iProf.q3}
  //       transformative={iProf.q4}
  //       message={iProf.q5}
  //       wisdom={iProf.q6}
  //       goodie={iProf.goodie}
  //     </InstructorResultBio>
  //   ));
  // };

  // class Instructor extends Component {
  render() {
    return (
      <div>
        <div className="parallax-container">
          <Container>
            <Row>
              <Col size="12">
                <div
                  className="white center"
                  id="search-heading"
                  style={{ marginTop: "5%", paddingBottom: "5px" }}
                >
                  <div className="center inline" id="search-title">
                    <img className="img" src={OM} />
                    <span
                      style={{
                        marginRight: "50px",
                        marginLeft: "20px",
                        fontSize: "20px",
                        fontWeight: "bold"
                      }}
                    >
                      Name: Johnny Salke
                      {/* <span> {props.name}</span> */}
                    </span>
                    <span
                      style={{
                        marginRight: "50px",
                        marginLeft: "20px",
                        fontSize: "20px",
                        fontWeight: "bold"
                      }}
                    >
                      Studio:
                      <span> Clubville </span>
                    </span>
                    <span
                      style={{
                        marginRight: "50px",
                        marginLeft: "20px",
                        fontSize: "20px",
                        fontWeight: "bold"
                      }}
                    >
                      Location: San Luis Obispo, CA
                      {/* <span> {props.location}</span> */}
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col size="6">
                <InstructorCard />
              </Col>
              <Col size="6">
                <Card title="Instructor Biography">
                  <Row>
                    <div className="col m12" style={{ marginBottom: "78px" }}>
                      <InstructorResultContact />

                      {/* {this.renderinstructorProfContact()} */}
                      {/* <h6>About Me</h6>
                      <p style={{ lineHeight: "20px" }}>My Teaching Style:</p>
                      <p style={{ lineHeight: "20px" }}> Instructor Bio:</p>
                      <p style={{ lineHeight: "20px" }}>
                        A Transformative Teaching Experience:
                      </p> */}
                    </div>
                    <br />
                    <Modal
                      className=" waves-effect waves-light"
                      trigger={<Button>Fill and Display Profile</Button>}
                    >
                      <Row>
                        <h6>
                          Fill in Firstname, Lastname and Email. Click Display
                          Profile and Close to View!
                        </h6>
                      </Row>
                      <Row>
                        <Col size="6">
                          <div className="input-field col s12">
                            <i className="material-icons prefix">
                              account_circle
                            </i>
                            <input
                              id="name"
                              type="text"
                              className="validate"
                              // onChange={this.handleNameSearch}
                              // value={this.state.name}
                            />
                            <label htmlFor="name">Name</label>
                          </div>
                        </Col>
                        <Col size="6">
                          <div className="center">
                            <div className="input-field col s12">
                              <i className="material-icons prefix">
                                account_circle
                              </i>
                              <input
                                id="location"
                                type="text"
                                className="validate"
                                // onChange={this.handleLocationSearch}
                                // value={this.state.location}
                              />
                              <label htmlFor="location">Email</label>
                            </div>
                          </div>
                        </Col>
                      </Row>
                      <a
                        className="waves-effect waves-light btn-small"
                        // onClick={this.handleSearchSubmit}
                      >
                        Display Profile
                      </a>{" "}
                    </Modal>
                  </Row>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col size="12">
                <div
                  className="white"
                  id="search-heading"
                  style={{
                    // marginTop: "5%",
                    paddingBottom: "5px",
                    marginLeft: "5px",
                    marginTop: "20px"
                  }}
                >
                  <div className="white" id="search-title">
                    <InstructorResultBio />
                  </div>
                </div>
              </Col>
            </Row>
            <div style={{ marginBottom: "10px" }}>
              <Link to="/instructorsurvey">
                {" "}
                <a className="waves-effect waves-light btn-small">
                  Take Instructor Survey
                </a>{" "}
              </Link>
              <Link to="/clientsearch">
                {" "}
                <a className="waves-effect waves-light btn-small">
                  Search Clients
                </a>{" "}
              </Link>
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
        <div className="section-white" style={{ marginTop: "5%" }}>
          <h2 className="center">Namaste</h2>
          <Row>
            <div className="center">
              <Col size="3" />
            </div>
            <div className="center">
              <Col size="6">
                <p>
                  "Yoga Is a light which once lit will never dim, the better
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

export default Instructor;
