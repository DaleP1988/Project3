import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Icon } from "react-materialize";
import background from "../images/floor2.jpg";
import CSearchCard from "../components/CSearchCard";

//get data from search table, post on page
// use functions defined client side in API.js (utils)

class ClientSearch extends Component {
  //   state = {
  //     clients: [],
  //     selection: "",
  //     name: "",
  //     loc: ""
  //   };

  //   componentDidMount() {
  //     this.handleSearchSubmit();
  //   }

  //get survey content for the client search term

  // getClientProfile  = ()=> {
  //     API.getCP()
  //     .then((res) => {
  //       this.setState({clients: res.data });
  //     });

  // }

  //store name input

  // handleNameSearch = event => {
  //   this.setState({ name: event.target.value });
  // };

  // //store location input

  // handleLocationSearch = event => {
  //   this.setState({
  //     location: event.target.value
  //     //need to separate the string .....
  //   });
  // };

  // form submit make a call to the backend

  // handleSearchSubmit = event => {
  //   event.preventDefault();
  //   console.log("grabbed search name and location");
  //   console.log("this.state.name", this.state.name);
  //   console.log("this.state.location", this.state.location);
  //   API.searchClients(this.state.name, this.state.location).then(res => {
  //     this.setState({ clients: res.data.response.docs });
  //     console.log("this.state.clients", this.state.clients);

  //need to create a searchInstructors call at API.js in utils
  //   });
  // };

  //method for rendering one div based on the above backend call

  // renderClients = () => {
  //   return this.state.clients.map(clients => (
  //     <Result>
  //       -id={clients.id}
  //       key={clients._id}
  //       name={clients.Firstname + clients.Lastname}
  //       email={clients.email}
  //       phone={clients.phone}
  //       city={clients.city}
  //       loc={clients.loc}
  //       img={clients.img}
  //     </Result>
  //   ));
  // };

  // handleInstructorSelection = event => {
  //   this.setState({ selection: event.target.value });
  // };

  //make sure the button to store the instructor info
  //export this function/data to profile page..
  //need to change the window.ref

  // make/check the results component to accomodate the rendering

  // class ClientSearch extends Component {
  render() {
    return (
      <div>
        <div className="parallax-container">
          <Container>
            <div id="search" className="white">
              <Row>
                <div className="center" id="search-heading">
                  <h2 className="center" id="search-title">
                    <Icon className="medium">search</Icon>SEARCH CLIENTS
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
                  <CSearchCard />
                  <CSearchCard />
                  <CSearchCard />
                  <CSearchCard />
                  <CSearchCard />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default ClientSearch;
