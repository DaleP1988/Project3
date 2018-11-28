import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Icon } from "react-materialize";
import ISearchCard from "../components/ISearchCard";
import background from "../images/floor2.jpg";

//get data from search table, post on page
// use functions defined client side in API.js (utils)

class Search extends Component {
  state = {
    instructors: [],
    name: "",
    loc: ""
  };

  componentDidMount() {
    // this.handleSearchSubmit();
    // getInstructorProfile();
  }

  //store name input

  handleNameSearch = event => {
    this.setState({ name: event.target.value });
  };

  //store location input

  handleLocationSearch = event => {
    this.setState({
      location: event.target.value
      //need to separate the string .....
    });
  };

  // form submit make a call to the backend

  // handleSearchSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.name || this.state.loc) {
  //     API.getIS(this.state.name, this.state.loc).then(res => {
  //       this.setState({ instructors: res.data });
  //     });
  //   }
  // };

  //method for rendering one div based on the above backend call

  renderInstructors = () => {
    return this.state.instructors.map(instructor => (
      <ISearchCard>
        -id={instructor.id}
        key={instructor._id}
        name={instructor.Firstname + instructor.Lastname}
        email={instructor.email}
        phone={instructor.phone}
        studio-{instructor.studio}
        loc={instructor.city + "," + instructor.state}
        img={instructor.img}
      </ISearchCard>
    ));
  };

  // handleInstructorSelection = event => {
  //   this.setState({ selection: event.target.value });
  // };

  //make sure the button to store the instructor info
  //export this function/data to profile page..
  //need to change the window.ref

  // make/check the results component to accomodate the rendering

  // class Search extends Component {
  render() {
    return (
      <div>
        <div className="parallax-container">
          <Container>
            <div id="search" className="white">
              <Row>
                <div className="center" id="search-heading">
                  <h2 className="center" id="search-title">
                    <Icon className="medium">search</Icon>SEARCH INSTRUCTORS
                  </h2>
                  <div className="input-field col s6">
                    <i className="material-icons prefix">account_circle</i>
                    <input id="icon_prefix" type="text" className="validate" />
                    <label for="icon_prefix">Name</label>
                  </div>
                </div>
                <div className="center">
                  <div className="input-field col s6">
                    <i className="material-icons prefix">account_circle</i>
                    <input id="icon_prefix" type="text" className="validate" />
                    <label for="icon_prefix">Location</label>
                  </div>
                </div>
                <a className="waves-effect waves-light btn-small">
                  Search Instructor
                </a>{" "}
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
          <Container>
            <h2 className="center">RESULTS</h2>
            <Row>
              <Col size="12">
                <div id="booking-results">
                  <ul className="list-group">{this.renderInstructors()}</ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Search;
