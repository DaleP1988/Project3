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
                <span style={{ textAlign: "justify" }} className="black-text">
                  <h4>About Save My Asana</h4>
                  <ul>
                    <li>
                      <h6>The Common Condition</h6>
                      <p>
                        The idea behind Save My Asana was inspired by a
                        condition that is common to the yoga community. Even in
                        the most dedicated of communities - at some time or
                        another - yogis find themselves separated from their
                        mats. They may carry on the practice of yoga in their
                        daily lives and continue to make time for meditation,
                        but for some reason or another they fall out of their
                        regular routine of asana practice, which is the physical
                        practice of yoga. The asana was developed to help yogis
                        prepare their bodies for an extended period of seated
                        meditation. For some, the absence of an asana practice
                        affects the depth of meditation practice and removes
                        some of the benefits of yoga practice. Essentially, the
                        presence or absence of yoga asana can mean the
                        difference between bliss and no bliss for the yogi.
                      </p>
                    </li>
                    <li>
                      <h6> Getting Yogis Back to OM </h6>
                      <p>
                        So Save My Asana was developed with the intention of
                        getting challenged yogis back to their mats. It does it
                        by identifying the many possible obstacles a yogi might
                        face (for example injury or class level) and finding the
                        instructors and classes that either address these needs
                        or fit the yogi's description of an ideal class.
                      </p>
                    </li>
                    <li>
                      <h6>How does it Work?</h6>
                      <p>
                        The journey back to OM is made simple by Save My Asana.
                      </p>
                      <p>
                        Once a Client or Instructor has created a login and
                        password, they can create a Profile. We hold onto the
                        Profiles in our database for future reference by other
                        Yoga Clients and Yoga Instructors.
                      </p>
                      <p>
                        After reviewing their profile, yogis are encouraged to
                        take a Survey. The Surveys for Client and Instructor are
                        unique, but related. Once submitted, our fancy
                        technology finds the best five Instructors for a Client.
                        The Client can then select View Profile for the
                        Instructor of their choosing, or Search Instructors for
                        others available Instructors.
                      </p>
                      <p>
                        Clients always have the option of searching for
                        Instructors using our database of Instructor Profiles.
                        Instructors can find out more about their new Clients by
                        searching and reviewing Client Profiles.
                      </p>
                      <p>
                        When a Client finds the Instructor they want, they can
                        book them!
                      </p>
                      <p>
                        Our Booking page is a full-service scheduling platform
                        that allows Clients to review Instructor's real studio
                        schedules and submit the date and time that they would
                        like to have a private session.
                      </p>
                    </li>
                    <li>
                      <h6>Help Us Reach our Full Potential</h6>
                      <p>
                        If you have any feedback or comments please send to:
                        notes@savemyasana.com
                      </p>
                      <br />
                      <h5>OM Namaste , </h5>

                      <h6> The Save My Asana Team</h6>
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
              working with chronic knee pain." - Mary Lori
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
