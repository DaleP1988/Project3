import React from "react";
import { Row, Col, Container } from "../Grid";
import "./searchCard.css";
import paris from "../../images/paris.jpg";

const SearchCard = () => (
  <div className="card horizontal searchCard">
    <img  className="card-image" src={paris} alt="filler" />
    <div className="card-stack">
      <div className="card-content">
        <p>Name: Paris Hilton</p>
        <p>Location: Beverly Hills</p>
        <p>Email: philton@hilton.com</p>
        <p>Phone: 500-PARIS</p>
        <br />
        <a id="instructor" className="waves-effect waves-light btn-small">
          Search other Instructors
        </a>
        {/* this needs to clear the input field in search + reload the search page */}
        <a className="waves-effect waves-light btn-small">
          View this Instructor's Schedule
        </a>
      </div>
    </div>
  </div>
);

export default SearchCard;
