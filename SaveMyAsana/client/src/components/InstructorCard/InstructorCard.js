import React from "react";
import "./instructorCard.css";
import instructor from "../../images/hotyogaman.jpg";

const InstructorCard = () => (
  <div className="instructor-row">
    <div className="instructor-card">
      <div className="card">
        <div className="waves-effect waves-block waves-light">
          <img className="instructor-image activator" src={instructor} />
        </div>
        <div class="card-content instructor-name">
          <span className="card-title activator grey-text text-darken-4">
            Johnny Salke<i className="material-icons right">more_vert</i>
          </span>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            Why I Teach<i className="material-icons right">close</i>
          </span>
          <p>
            "Witnessing my students power through my advanced keeps me going. My
            students are my inspiration"
          </p>
          <hr />
          <p>Name: Johnny Salke</p>
          <p>Location: San Luis Obispo, CA</p>
          <p>Studio: Clubville</p>
          <p> Email Contact: JSYoga@gmail.com</p>
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

export default InstructorCard;
