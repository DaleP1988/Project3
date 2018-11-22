import React from "react";
import "./instructorCard.css";
import { Row } from "../Grid";
import parisCard from "../../images/parisCard.png";
import { PromiseProvider } from "mongoose";

const BestMatchCard = () => (
  <div className="instructor-row">
    <div className="instructor-card">
      <div className="card">
        <div className="waves-effect waves-block waves-light">
          <img className="instructor-image activator" src={props.img} />
        </div>
        <div class="card-content instructor-name">
          <span className="card-title activator grey-text text-darken-4">
            {props.name}
            <i className="material-icons right">more_vert</i>
          </span>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Why I Teach<i className="material-icons right">close</i>
          </span>
          <p>{props.message}</p>
          <hr />
          <p>Name: {props.name}</p>
          <p>Location: {props.city + "," + props.state}</p>
          <p>Email: {props.email}</p>
          <p>Phone: {props.phone}</p>
          <div>
            <a className="waves-effect waves-light btn-small right instructor-btn">
              View Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default BestMatchCard;