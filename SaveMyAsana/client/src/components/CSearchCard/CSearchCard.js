import React from "react";
import { Row, Col, Container } from "../Grid";
import "./SearchCard.css";
// import paris from "../../images/paris.jpg";
import client from "../../images/yogaclient.jpg";
import { Link } from "react-router-dom";
import { PromiseProvider } from "mongoose";

const CSearchCard = () => (
  <div className="card horizontal searchCard">
    <img className="card-image" src={client} alt="filler" />
    <div className="card-stack">
      <div className="card-content">
        <p>Name: {props.name}</p>
        <p>Location: {props.loc}</p>
        <p>Email: {props.email}</p>
        <p>Phone: {props.phone}</p>
        <br />
        <a id="instructor" className="waves-effect waves-light btn-small">
          Search other Clients
        </a>
        {/* this needs to clear the input field in search + reload the search page */}
        <Link to="/booking">
          {" "}
          <a className="waves-effect waves-light btn-small">
            View Client Schedule
          </a>{" "}
        </Link>
      </div>
    </div>
  </div>
);

export default CSearchCard;
