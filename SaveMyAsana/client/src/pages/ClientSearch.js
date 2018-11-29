import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Icon } from "react-materialize";
import background from "../images/floor2.jpg";
import CSearchCard from "../components/CSearchCard";
import API from "../utils/API";

//get data from search table, post on page
// use functions defined client side in API.js (utils)

class ClientSearch extends Component {
  state = {
    clients: [],
    name: "",
    loc: ""
  };

  componentDidMount() {
    // this.handleSearchSubmit();
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

  handleSearchSubmit = event => {
    event.preventDefault();
    if (this.state.name || this.state.location) {
      API.getCP(this.state.name, this.state.loc).then(res => {
        console.log("server response", res);
        this.setState({ clients: res.data });
      });
    }
  };

  //method for rendering one div based on the above backend call

  renderClients = () => {
    return this.state.clients.map(client => (
      <CSearchCard
        id={client.id}
        key={client._id}
        name={client.Firstname + client.Lastname}
        email={client.email}
        phone={client.phone}
        loc={client.location}
        img={client.img}
      />
    ));
  };

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
                    <input
                      id="name"
                      type="text"
                      className="validate"
                      onChange={this.handleNameSearch}
                      value={this.state.name}
                    />
                    <label htmlFor="name">Name</label>
                  </div>
                </div>
                <div className="center">
                  <div className="input-field col s6">
                    <i className="material-icons prefix">account_circle</i>
                    <input
                      id="location"
                      type="text"
                      className="validate"
                      onChange={this.handleLocationSearch}
                      value={this.state.location}
                    />
                    <label htmlFor="location">Location</label>
                  </div>
                </div>
                <a
                  className="waves-effect waves-light btn-small"
                  onCLick={this.handleSearchSubmit}
                >
                  Search Client
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
                  <ul className="list-group"> {this.renderClients()}</ul>
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
