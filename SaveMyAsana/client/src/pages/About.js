import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import { Icon, Parallax } from "react-materialize";
import background from "../images/floor2.jpg";
import yogi from "../images/yogaBeach.jpg";

class About extends Component {
  render() {
    return (
      <div>
        <div id="index-banner" className="parallax-container">
          <div className="section no-pad-bot">
            <div className="container">
              <div id="home-card" className="card-panel amber lighten-5">
                <span className="black-text">
                  <h4>About Save My Asana</h4>
                  <ul>
                    <li>
                      <p>
                        How many times have you been to a yoga class that turned
                        out to be too hard or too easy or too philosophical?
                      </p>
                    </li>
                    <li>
                      <p>There are many yoga instructors out there</p>
                    </li>
                    <li>
                      <p>
                        It's great to have a lot of options, but its hard to
                        know which ones will be a good fit.
                      </p>
                    </li>
                    <li>
                      <p>Allow us to help...</p>
                    </li>
                    <li>
                      <p>
                        If you are new, advanced, sort of injured, really
                        out-of-shape, or just super intimidated, Save My Asana
                        can help you find the class you need
                      </p>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
          <div className="parallax">
            <img
              className="background"
              src={background}
              alt="Unsplashed background img 1"
            />
          </div>
          <div className="section">
            <img
              src={yogi}
              style={{
                height: "70%",
                width: "70%",
                marginLeft: "15%",
                textAlign: "justify"
              }}
            />
            <p
              style={{
                backgroundColor: "whitesmoke",
                marginLeft: "25%",
                marginRight: "25%",
                padding: "3%"
              }}
            >
              "Thanks to Save My Asana, I am back to my mat. The app matched me
              with a seasoned instructor, who helped me develop strategies for
              working with my chronic knee pain." - Mary Lori
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
