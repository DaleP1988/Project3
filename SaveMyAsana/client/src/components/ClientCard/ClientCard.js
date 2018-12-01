import React from "react";
import "./clientCard.css";
import { Row } from "../Grid";
import yogi from "../../images/yogaclient.jpg";

const ClientCard = () => (
  <div className="instructor-row">
    <div className="instructor-card">
      <div className="card">
        <div className="waves-effect waves-block waves-light">
          <img className="instructor-image activator" src={yogi} />
        </div>
        <div class="card-content instructor-name">
          <span className="card-title activator grey-text text-darken-4">
            <i className="material-icons right">more_vert</i>
          </span>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            About Me<i className="material-icons right">close</i>
          </span>
          <p style={{ "fontSize ": "12px" }}>
            "I am an intermediate/advanced level yogi who has been practicing
            for over 8 years. I also teach, so I am looking to find a
            challenging instructor who will keep me moving and in shape."
          </p>
          <hr />
          <p>Name: Dale Padelford</p>
          <p>Location: Paso Robles, CA</p>
          <p>Email: yogaGirl@gmail.com</p>
          <p>Phone: (310) 555 - 7777</p>
          <div>
            {/* <a className="waves-effect waves-light btn-small right instructor-btn">
              View Profile
            </a> */}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ClientCard;
