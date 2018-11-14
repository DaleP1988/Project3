import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Icon } from "react-materialize";
import SearchCard from "../components/SearchCard";
import background from "../images/floor2.jpg";
import "./Search.css";

//get data from search table, post on page
// use functions defined client side in API.js (utils)

class Search extends Component {
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
                <SearchCard />
                <SearchCard />
              </Col>
            </Row>
            <Row>
              <Col size="12" className="center">
                <div id="booking-results" className="center">
                  <Row className="inline">
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                    <SearchCard />
                  </Row>
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
