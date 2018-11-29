import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import background from "../images/floor2.jpg";
import { Link } from "react-router-dom";
import Headstand from "../images/headstand.png";
import InstructorCard from "../components/InstructorCard";
import { Card, Input, Icon, Button, Modal } from "react-materialize";
import InstructorResultContact from "../components/ResultDivs/InstructorResultContact";
import InstructorResultBio from "../components/ResultDivs/InstructorResultBio";

//need to be directed from form page, fill in the data, change the state
// use functions defined client side in API.js (utils)
// make sure to disable the links until the login happens
//

class Client extends Component {
  state = {
    ClientName: "Justin Quinonez",
    Location: "Brooklyn, NY",
    iClient: []
  };

  componentDidMount() {
    //   this.getClientProfile();
    //   //can I just call all the others here?
  }

  // //Method for getting the saved survey from the db
  getClientProfile = () => {
    API.getCP().then(res => {
      this.setState({ iClient: res.data });

      //can I add code right into here for the rendering?
    });
  };

  // // method for rendering a results div

  renderclientProfContact = () => {
    return this.state.iClient.map(iClient => (
      <ClientResultContact>
        {/* need to make a results component */}
        {/* this needs to reference the client components */}
        -id={iClient.id}
        key={iClient._id}
        name={iClient.Firstname + iClient.Lastname}
        email={iClient.email}
        phone={iClient.phone}
        city={iClient.city}
        loc={iClient.locState}
        img={iClient.img}
      </ClientResultContact>
    ));
  };

  renderClientResultBio = () => {
    return this.state.iClient.map(iClient => (
      <ClientResultBio>
        {/* need to make a results component */}
        {/* this needs to reference the client components */}
        -id={iClient.id}
        key={iClient._id}
        ideal={iClient.q1}
        challenge={iClient.q2}
        environment={iClient.q3}
        practice={iClient.q4}
      </ClientResultBio>
    ));
  };

  // class Client extends Component {
  render(props) {
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
                    <img className="img" src={Headstand} />
                    <span
                      style={{
                        marginRight: "50px",
                        marginLeft: "20px",
                        fontSize: "20px",
                        fontWeight: "bold"
                      }}
                    >
                      Name:
                      <span> Jane Robbins</span>
                    </span>
                    <span
                      style={{
                        marginRight: "50px",
                        marginLeft: "20px",
                        fontSize: "20px",
                        fontWeight: "bold"
                      }}
                    >
                      Level:
                      <span> Beginner </span>
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
                      <span> Los Angeles, CA</span>
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
                <Card title="Client Biography">
                  <Row>
                    <div className="col m12">
                      <h6>About Me</h6>
                      {this.renderClientResultContact()}
                      {/* <p style={{ lineHeight: "20px" }}>
                        {" "}
                        Ideal Yoga Practice:
                      </p>
                      <p style={{ lineHeight: "20px" }}>
                        {" "}
                        Challenges I am Facing in My Practice:
                      </p>
                      <p style={{ lineHeight: "20px" }}>
                        {" "}
                        Ideal Yoga Practice Environment:
                      </p> */}{" "}
                      */}
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
                    <h4 className="center">My Yoga Journey </h4>
                    {this.renderclientProfBio()}
                    {/* <p
                      style={{
                        marginLeft: "50px"
                      }}
                    >
                      Here is how it all began:
                    </p> */}
                  </div>
                </div>
              </Col>
            </Row>
            <div style={{ marginBottom: "5px" }}>
              <Link to="/clientsurvey">
                {" "}
                <a className="waves-effect waves-light btn-small">
                  Take Client Survey
                </a>{" "}
              </Link>
              <Link to="/search">
                {" "}
                <a className="waves-effect waves-light btn-small">
                  Search Instructors
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

export default Client;
