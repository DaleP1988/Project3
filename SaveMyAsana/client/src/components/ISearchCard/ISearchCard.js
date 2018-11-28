import React from "react";
import { Row, Col, Container } from "../Grid";
import "./SearchCard.css";
import instructor from "../../images/yogateacher.jpg";
import { Link } from "react-router-dom";

const ISearchCard = () => (
  <div className="card horizontal searchCard">
    <img className="card-image" src={instructor} alt="filler" />
    <div className="card-stack">
      <div className="card-content">
        {/* <p>Name: {props.name}</p>
        <p>Location: {props.loc}</p>
        <p>Studio: {props.studio}</p>
        <p>Email: {props.email}</p>
        <p>Phone: {props.phone}</p> */}
        <br />
        <a id="instructor" className="waves-effect waves-light btn-small">
          Search other Instructors
        </a>
        {/* this needs to clear the input field in search + reload the search page */}
        <Link to="/booking">
          {" "}
          <a className="waves-effect waves-light btn-small">
            View Instructor's Schedule
          </a>{" "}
        </Link>
      </div>
    </div>
  </div>
);

export default ISearchCard;
