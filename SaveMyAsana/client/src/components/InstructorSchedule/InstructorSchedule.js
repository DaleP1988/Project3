import React from "react";
// import { Row, Col, Container } from "../Grid";
import "./InstructorSchedule.css";
import paris from "../../images/paris.jpg";
import { Link } from "react-router-dom";
import { Table } from "react-materialize";
import { PromiseProvider } from "mongoose";

//function to map over return data and create a row

const InstructorSchedule = props => (
  <div className=" white jumbotron">
    <div className="card-stack">
      <div className="card-content">
        <h5 className="center">Instructor Teaching Schedule</h5>
        <h6>Class Name: {props.className} </h6>
        <h6>Level: {props.level} </h6>
        <h6>Description: {props.description} </h6>
        <h6>Address: {props.address}</h6>

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
              <td>{props.date}</td>
              <td>{props.time}</td>
              <td>{props.className}</td>
              <td>{props.studio}</td>
              <td>{props.spots}</td>
              <td>{props.cancellation}</td>
              <td>{props.registration}</td>
            </tr>
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
