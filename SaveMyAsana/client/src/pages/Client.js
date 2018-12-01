import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import background from "../images/floor2.jpg";
import { Link } from "react-router-dom";
import Headstand from "../images/headstand.png";
import { Card, Input, Icon, Button, Modal } from "react-materialize";
import ClientResultContact from "../components/ResultDivs/ClientResultContact";
import ClientCard from "../components/ClientCard";
import ClientResultBio from "../components/ResultDivs/ClientResultBio";

//need to be directed from form page, fill in the data, change the state
// use functions defined client side in API.js (utils)
// make sure to disable the links until the login happens
//

// state = {
//   ClientName: "Justin Quinonez",
//   Location: "Brooklyn, NY",

//   iClient: []
// };

// componentDidMount() {
//   //   this.getClientProfile();
//   //   //can I just call all the others here?
// }

// //Method for getting the saved survey from the db
// getClientProfile = () => {
//   API.getCP().then(res => {
//     this.setState({ iClient: res.data });

//     //can I add code right into here for the rendering?
//   });
// };

// // method for rendering a results div

// renderclientProfContact = () => {
//   return this.state.iClient.map(iClient => (
//     <ClientResultContact>
//       {/* need to make a results component */}
//       {/* this needs to reference the client components */}
//       -id={iClient.id}
//       key={iClient._id}
//       name={iClient.Firstname + iClient.Lastname}
//       email={iClient.email}
//       phone={iClient.phone}
//       city={iClient.city}
//       loc={iClient.locState}
//       img={iClient.img}
//     </ClientResultContact>
//   ));
// };

// renderClientResultBio = () => {
//   return this.state.iClient.map(iClient => (
//     <ClientResultBio>
//       {/* need to make a results component */}
//       {/* this needs to reference the client components */}
//       -id={iClient.id}
//       key={iClient._id}
//       ideal={iClient.q1}
//       challenge={iClient.q2}
//       environment={iClient.q3}
//       practice={iClient.q4}
//     </ClientResultBio>
//   ));
// };

class Client extends Component {
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
                  style={{ marginTop: "5%", paddingBottom: "10px" }}
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
                      <span> Dale Padelford</span>
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
                      <span> Intermediate </span>
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
                      <span> Paso Robles, CA</span>
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col size="6">
                <ClientCard />
              </Col>
              <Col size="6">
                <Card title="">
                  <Row>
                    <div
                      className="col m12"
                      style={{
                        marginBottom: "125px",
                        paddingLeft: "40px",
                        paddingRight: "40px"
                      }}
                    >
                      <p>
                        <ClientResultContact />
                      </p>
                      {/* {this.renderClientResultContact()} */}
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
                    </div>
                    <Modal
                      className=" waves-effect waves-light"
                      // trigger={<Button>Fill and Display Profile</Button>}
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
                  className="white "
                  id="search-heading"
                  style={{
                    // marginTop: "5%",
                    paddingBottom: "5px",
                    marginLeft: "5px"
                  }}
                >
                  <div
                    className=""
                    id="search-title"
                    style={{
                      paddingLeft: "40px",
                      paddingRight: "40px"
                    }}
                  >
                    {/* <img className="img" src={OM} /> */}
                    <h5 className="center">My Yoga Journy </h5>
                    <p>
                      <ClientResultBio />
                    </p>
                    {/* {this.renderclientProfBio()} */}
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
            <div style={{ marginBottom: "15px" }}>
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

        <div className="section-white" style={{ marginTop: "30px" }}>
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
