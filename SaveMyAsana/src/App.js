import React, { Component } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Client from "./pages/Client";
import ClientProfile from "./pages/ClientProfile";
import ClientSurvey from "./pages/ClientSurvey";
import InstructorProfile from "./pages/InstructorProfile";
import InstructorSurvey from "./pages/InstructorSurvey";
import Instructor from "./pages/Instructor";
import Search from "./pages/Search";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/booking" component={Booking} />
        <Route exact path="/about" component={About} />
        <Route exact path="/client" component={Client} />
        <Route exact path="/clientprofile" component={ClientProfile} />
        <Route exact path="/clientsurvey" component={ClientSurvey} />
        <Route exact path="/instructor" component={Instructor} />
        <Route exact path="/instructorprofile" component={InstructorProfile} />
        <Route exact path="/instructorsurvey" component={InstructorSurvey} />
        <Route exact path="/search" component={Search} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
