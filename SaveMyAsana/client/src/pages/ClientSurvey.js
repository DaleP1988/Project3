import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import background from "../images/floor2.jpg";
import logo from "../images/yogateacher.jpg";
import { Link } from "react-router-dom";
import ClientSurveyForm from "../components/ClientSurveyForm/ClientSurveyForm";
import { Button, Modal } from "react-materialize";
import BestMatchCard from "../components/BestMatchCard";
import axios from "axios";

// on click get data (obj), call result function, display in modal...
// add a modal to the page

class ClientSurvey extends Component {
  // state = {
  //   // BestMatch: [],
  //   ModalResult: []
  //   //make a new one
  //   // async await is supported in create react app
  //   // can write async like linear functions
  //   // review.
  // };

  // componentDidMount() {
  //   this.onSubmit();
  //   // this.getBestMatch();
  //   //can I just call all the others here?
  // }

  //Method for getting the saved survey from the db
  // getBestMatch = () => {
  //   API.bestMatch().then(res => {
  //     this.setState({ BestMatch: res.data });

  //can I add code right into here for the rendering?
  // });
  // };

  // onFormSubmit = data => {
  //   alert(data);
  //   var modalRes = JSON.stringify(data);
  //   this.setState({ ModalResult: modalRes });

  // save the result into state
  // and set to modal
  // this needs to be the survey logic.....
  // };

  // renderModal = () => {
  //   return this.state.modalRes.map(modal => (
  //     <BestMatchCard>
  //       -id={modal.id}
  //       key={modal._id}
  //       name={modal.Firstname + modal.Lastname}
  //       studio={modal.Studio}
  //       location={modal.City}
  //     </BestMatchCard>
  //   ));
  // };

  // data is passed in from the form

  // method for rendering a results div

  //
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
                <p>These are your suggested matches:</p>

                <div className="card horizontal searchCard">
                  {/* <img className="card-image" src={logo} alt="filler" /> */}
                  <div className="card-stack">
                    <div
                      className="card-content center"
                      style={{ marginLeft: "40%", width: "100%" }}
                    >
                      <p>Name: Mandy O'Share</p>
                      <p>Location: Los Angeles, CA</p>
                      <p>Studio: Mode Yoga</p>
                      <p>Email: Mandy@modeyoga.com</p>
                      <p>Phone: (949) 121 - 5521</p>
                      <br />
                      <Link to="/search">
                        <a
                          id="instructor"
                          className="waves-effect waves-light btn-small"
                        >
                          Search other Instructors
                        </a>
                      </Link>
                      <br />
                      <Link to="/booking">
                        <a className="waves-effect waves-light btn-small">
                          View Instructor's Schedule
                        </a>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card horizontal searchCard">
                  {/* <img className="card-image" src={{ logo }} alt="filler" /> */}
                  <div className="card-stack">
                    <div
                      className="card-content center"
                      // style={{ marginLeft: "40%", width: "100%" }}
                    >
                      <p>Name: Matt Bluth</p>
                      <p>Location: Los Angeles, CA</p>
                      <p>Studio: Angels City Yoga</p>
                      <p>Email: mBluth@aol.com</p>
                      <p>Phone: (949) 222 - 5521</p>
                      <br />
                      <Link to="/search">
                        <a
                          id="instructor"
                          className="waves-effect waves-light btn-small"
                          style={{ marginLeft: "1%" }}
                        >
                          Search other Instructors
                        </a>
                      </Link>
                      <Link to="/booking">
                        <a className="waves-effect waves-light btn-small">
                          View Instructor's Schedule
                        </a>{" "}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="card horizontal searchCard">
                  {/* <img className="card-image" src={logo} alt="filler" /> */}
                  <div className="card-stack">
                    <div
                      className="card-content center"
                      // style={{ marginLeft: "40%", width: "100%" }}
                    >
                      <p>Name: Johnny Salke</p>
                      <p>Location: San Luis Obispo, CA</p>
                      <p>Studio: Clubville</p>
                      <p>Email: JSYoga@gmail.com</p>
                      <p>Phone: (805) 121 - 5521</p>
                      <br />
                      <Link to="/search">
                        <a
                          id="instructor"
                          className="waves-effect waves-light btn-small"
                          style={{ marginLeft: "1%" }}
                        >
                          Search other Instructors
                        </a>
                      </Link>
                      <Link to="/booking">
                        <a className="waves-effect waves-light btn-small">
                          View Instructor's Schedule
                        </a>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card horizontal searchCard">
                  {/* <img className="card-image" src={logo} alt="filler" /> */}
                  <div className="card-stack">
                    <div
                      className="card-content center"
                      style={{ marginLeft: "1%" }}
                      // style={{ marginLeft: "40%", width: "100%" }}
                    >
                      <p>Name: Sarah Smith</p>
                      <p>Location: La Habra, CA</p>
                      <p>Studio: La Curl </p>
                      <p>Email: 123gmail@com</p>
                      <p>Phone: (555) 555 - 5555</p>
                      <br />
                      <Link to="/search">
                        <a
                          id="instructor"
                          className="waves-effect waves-light btn-small"
                        >
                          Search other Instructors
                        </a>
                      </Link>
                      <Link to="/booking">
                        <a
                          className="waves-effect waves-light btn-small"
                          style={{ marginLeft: "1%" }}
                        >
                          View Instructor's Schedule
                        </a>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card horizontal searchCard">
                  {/* <img className="card-image" src={logo} alt="filler" /> */}
                  <div className="card-stack">
                    <div
                      className="card-content center"
                      // style={{ marginLeft: "40%", width: "100%" }}
                    >
                      <p>Name: Sunny Sage</p>
                      <p>Location: Dallas, TX</p>
                      <p>Studio: OM Studio</p>
                      <p>Email: Sunnysage@gmail.com</p>
                      <p>Phone: (469) 541 - 3395</p>
                      <br />
                      <Link to="/search">
                        <a
                          id="instructor"
                          className="waves-effect waves-light btn-small"
                          style={{ marginLeft: "1%" }}
                        >
                          Search other Instructors
                        </a>
                      </Link>
                      <Link to="/booking">
                        <a className="waves-effect waves-light btn-small">
                          View Instructor's Schedule
                        </a>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
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

export default ClientSurvey;
