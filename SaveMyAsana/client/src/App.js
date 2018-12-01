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
import ClientSearch from "./pages/ClientSearch";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import $ from "jquery";

// login form
//

class App extends React.Component {
  state = {
    data: null
  };

  componentDidMount() {
    // let datepicker = $.fn.datepicker; //accessing jquery function
    // let parallax = $.fn.parallax;
    // let timepicker = $.fn.timepicker; //accessing jquery function
    // $(".datepicker").datepicker({});
    // $(".parallax").parallax({});
    // $(".timepicker").timepicker({});
  }

  render() {
    return (
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
            <Route
              exact
              path="/instructorprofile"
              component={InstructorProfile}
            />
            <Route
              exact
              path="/instructorsurvey"
              component={InstructorSurvey}
            />
            <Route exact path="/search" component={Search} />
            <Route exact path="/clientsearch" component={ClientSearch} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
