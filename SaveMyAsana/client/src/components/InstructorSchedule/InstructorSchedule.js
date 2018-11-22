import React from "react";
// import { Row, Col, Container } from "../Grid";
import "./InstructorSchedule.css";
import paris from "../../images/paris.jpg";
import { Link } from "react-router-dom";
import { Table } from "react-materialize";

//function to map over return data and create a row

const InstructorSchedule = () => (
  <div className=" white jumbotron">
    <div className="card-stack">
      <div className="card-content">
        <h5 className="center">Instructor Teaching Schedule</h5>
        <h6>Class Name:</h6>
        <h6>Level:</h6>
        <h6>Description:</h6>
        <h6>Location:</h6>

        <Table className="center">
          <thead>
            <tr className="thead">
              <th className="th" data-field="date">
                Date:
              </th>
              <th className="th" data-field="time">
                Time:
              </th>
              <th className="th" data-field="classname">
                Class Name:
              </th>
              <th className="th" data-field="studio">
                Studio:
              </th>
              <th className="th" data-field="spots">
                Spots Available?
              </th>
              <th className="th" data-field="cancel">
                Class Cancelled?
              </th>
              <th className="th" data-field="register">
                Registration?
              </th>
            </tr>
          </thead>
          {/* make a table row component, fill in with js */}
          <tbody>
            <tr>
              <td>11-29-18</td>
              <td>7:00 AM</td>
              <td>Advanced Flow</td>
              <td>The Yoga Scene</td>
              <td>Yes</td>
              <td>No</td>
              <td>Drop-In</td>
            </tr>
            {/* <tr>
              <td>Alan</td>
              <td>Jellybean</td>
              <td>$3.76</td>
              <td>Alan</td>
              <td>Jellybean</td>
              <td>$3.76</td>
              <td>Alan</td>
              <td>Jellybean</td>
              <td>$3.76</td>
            </tr>
            <tr>
              <td>Jonathan</td>
              <td>Lollipop</td>
              <td>$7.00</td>
              <td>Jonathan</td>
              <td>Lollipop</td>
              <td>$7.00</td>
              <td>Jonathan</td>
              <td>Lollipop</td>
              <td>$7.00</td>
            </tr> */}
          </tbody>
        </Table>
        <Link to="/Search" style={{ font: "white !important" }}>
          <a className="waves-effect waves-light btn-small instructor-btn">
            Search Instructors
          </a>
        </Link>
      </div>
    </div>
  </div>
);

export default InstructorSchedule;
