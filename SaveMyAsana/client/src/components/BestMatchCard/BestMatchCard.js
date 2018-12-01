import React from "react";
import { Row, Col, Container } from "../Grid";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

const BestMatchCard = () => (
  <div className="card horizontal searchCard">
    <img className="card-image" src={logo} alt="filler" />
    <div className="card-stack">
      <div className="card-content">
        <p>Name: Johnny Salke</p>
        <p>Location: San Luis Obispo, CA</p>
        <p>Studio: Clubville</p>
        <p>Email: JSYoga@gmail.com</p>
        <p>Phone: (805) 121 - 5521</p>
        <br />
        <Link to="/search">
          <a id="instructor" className="waves-effect waves-light btn-small">
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
);

export default BestMatchCard;
