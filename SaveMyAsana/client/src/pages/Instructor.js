import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import background from "../images/floor2.jpg";
import { Link } from "react-router-dom";
import OM from "../images/omSym.png";
import InstructorCard from "../components/InstructorCard";
import { Card, Input, Icon, Button, Modal } from "react-materialize";
import InstructorResultContact from "../components/ResultDivs/InstructorResultContact";
import InstructorResultBio from "../components/ResultDivs/InstructorResultBio";

//need to be directed from form page, fill in the data, change the state
// use functions defined client side in API.js (utils)
// make a UUID with javascript,

class Instructor extends Component {
  // state = {
  //   iSurvey: [],
  //   iProf: []
  // };

  // componentDidMount() {
  //   this.getInstructorProfile();
  //   //can I just call all the others here?
  // }

  // //Method for getting the saved survey from the db
  // getInstructorProfile = () => {
  //   API.getIP().then(res => {
  //     this.setState({ iSurvey: res.data });

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
  //
  //       location={iProf.loc}
  //       img={iProf.img}
  //     </InstructorResultContact>
  //   ));
  // };

  // renderinstructorProfBio = () => {
  //   return this.state.iProf.map(iProf => (
  //     <InstructorResultBio>
  //       {/* need to make a results component */}
  //       {/* this needs to reference the client components */}
  //       -id={iProf.id}
  //       key={iProf._id}
  //       about={iProf.q1}
  //       style={iProf.q2}
  //       background={iProf.q3}
  //       transformative={iProf.q4}
  //       message={iProf.q5}
  //       wisdom={iProf.q6}
  //       goodie={iProf.q7}
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
                      Name:
                      <span> Linda Rosenblatt</span>
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
                      <span> Yoga By Linda</span>
                    </span>
                    <span
                      style={{
                        marginRight: "50px",
                        marginLeft: "20px",
                        fontSize: "20px",
                        fontWeight: "bold"
                      }}
                    >
                      Location:
                      <span> Kern County, CA</span>
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
                    <div className="col m12">
                      <h6>About Me</h6>
                      <p style={{ lineHeight: "20px" }}>My Teaching Style:</p>
                      <p style={{ lineHeight: "20px" }}> Instructor Bio:</p>
                      <p style={{ lineHeight: "20px" }}>
                        A Transformative Teach Experience:
                      </p>
                    </div>
                  </Row>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col size="12">
                <div
                  className="white "
                  id="search-heading"
                  style={{
                    // marginTop: "5%",
                    paddingBottom: "5px",
                    marginLeft: "5px"
                  }}
                >
                  <div className="" id="search-title">
                    {/* <img className="img" src={OM} /> */}
                    <h4 className="center">
                      Teaching Experience and Philosophy{" "}
                    </h4>
                    <p
                      style={{
                        marginLeft: "50px"
                      }}
                    >
                      What I Love Most About Teaching:
                    </p>
                    <p
                      style={{
                        marginLeft: "50px"
                      }}
                    >
                      Words of Wisdom and Encouragement:
                    </p>
                    <p
                      style={{
                        marginLeft: "50px"
                      }}
                    >
                      Find my Favorite Yoga Goodie Here:
                    </p>
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
