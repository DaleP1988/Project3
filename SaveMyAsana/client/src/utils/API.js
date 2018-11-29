import axios from "axios";

//////////////////////
//INSTRUCTOR SURVEY//
/////////////////////

// Saves Survey Data to DB
// check to see if survey is the right parameter
// passes in the model
// check logout and userData
// where do the ends of the URLs come from?

// var soap = require("soap");

const api = {
  getClasses: function(name, location) {
    return axios.get(`/api/instructor/${name}`).then(function(insClass) {
      return insClass;
    });
  },

  // saveIS: function(surveyIS) {
  //   return axios.post("/api/InstructorSurvey", surveyIS);
  // },

  //Gets All Survey Data from DB

  // getISAll: function(result) {
  //   return axios.get("/api/InstructorSurvey", result);
  // };

  //Gets specific Survey Data from DB

  getIS: function(name, location) {
    return axios
      .get("/api/instructorSurvey/" + name + "/" + location)
      .then(result => result.data);
  },

  //Deletes a specific Survey from DB

  // deleteIS: function(id) {
  //   return axios.delete("/api/InstructorSurvey/:" + id);
  // },

  //////////////////////
  //INSTRUCTOR PROFILE//
  //////////////////////

  getIP: function(name, location) {
    return axios
      .get("/api/clientProfile/" + name + "/" + location)
      .then(result => result.data);
  }

  // export default {
  // Saves Survey Data to DB
  // check to see if survey is the right parameter
  // can reuse these routes for the booking and search profile data

  // get one instructor profile

  // getIP: function(surveyIP) {
  //   return axios.post("/api/InstructorProfile", surveyIP);
  // };

  // save the IP

  // saveIP: function(surveyIP) {
  //   return axios.post("/api/InstructorProfile", surveyIP);
  // },

  //Gets All Survey Data from DB

  // getIPAll: function() {
  //   return axios.get("/api/InstructorProfile");
  // },

  ///////////////////////
  //INSTRUCTOR SEARCH////
  ///////////////////////

  //Gets specific Survey Data from DB
  //use instructor survey bc it holds the studio data

  // getIS: function(id) {
  //   //fetch('http://localhost:4000/api/InstructorProfile/:id);
  //   // .then
  //   return axios.get("/api/InstructorSurvey/:" + id);
  // },

  //Deletes a specific Survey from DB

  // deleteIP: function(id) {
  //   return axios.delete("/api/InstructorProfile/:" + id);
  // },

  ///////////////////////
  ////CLIENT SEARCH//////
  ///////////////////////

  //Gets specific Survey Data from DB

  // getCP: function(id) {
  //   return axios.get("/api/ClientProfile/:" + id);
  // },

  //Deletes a specific Survey from DB

  // deleteCP: function(id) {
  //   return axios.delete("/api/ClientProfile/:" + id);
  // },

  //////////////////////
  ////CLIENT SURVEY/////
  //////////////////////

  // export default {
  // Saves Survey Data to DB
  // check to see if survey is the right parameter

  // saveCS: function(surveyCS) {
  //   return axios.post("/api/surveyRoutes/ClientSurvey", surveyCS);
  // },

  //Gets All Survey Data from DB

  // getCSAll: function() {
  //   return axios.get("/api/surveyRoutes/ClientSurvey");
  // },

  //Gets specific Survey Data from DB

  // getCS: function(id) {
  //   return axios.get("/api/surveyRoutes/ClientSurvey/:" + id);
  // },

  //Deletes a specific Survey from DB

  // deleteCS: function(id) {
  //   return axios.delete("/api/surveyRoutes/ClientSurvey/:" + id);
  // },

  //////////////////////
  ////CLIENT PROFILE////
  //////////////////////

  // export default {
  // Saves Survey Data to DB
  // check to see if survey is the right parameter

  // saveCP: function(surveyCP) {
  //   //
  //   return axios.post("/api/ClientProfile", surveyCP);
  // },

  //Gets All Survey Data from DB

  // getCPAll: function() {
  //   return axios.get("/api/ClientProfile/:");
  // },

  //Gets specific Survey Data from DB

  // getCP: function(id) {
  //   return axios.get("/api/ClientProfile/:" + id);
  // },

  //Deletes a specific Survey from DB

  // deleteCP: function(id) {
  //   return axios.delete("/api/ClientProfile/:" + id);
  // },

  /////////////////////
  ////////LOGIN////////
  /////////////////////

  //Gets All Survey Data from DB

  // getLoginAll: function() {
  //   return axios.get("/api/surveyRoutes/Login");
  // },

  //Gets specific Survey Data from DB

  // getLogin: function(id) {
  //   return axios.get("/api/surveyRoutes/Login/:" + id);
  // },

  //Deletes a specific Survey from DB

  // deleteLogin: function(id) {
  //   return axios.delete("/api/surveyRoutes/Login/:" + id);
  // },

  ///////////////
  ///BOOKING/////
  ///////////////

  // method to get the classes from the MBO API

  //   getClasses: function() {
  //     searchMBO: function(name, location){
  //       const

  //     }
  //     return axios.get("/api/surveyRoutes/Login");
  //   }
  // };

  //////////////
  ///SEARCH/////
  //////////////
};

export default api;
