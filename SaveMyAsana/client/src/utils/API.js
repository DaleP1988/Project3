import axios from "axios";

//////////////////////
//INSTRUCTOR SURVEY//
/////////////////////

// Saves Survey Data to DB
// check to see if survey is the right parameter
// passes in the model
// check logout and userData
// where do the ends of the URLs come from?

const API = {

  MBOSearch: function(name, city, state) {
    const key = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    const password = "",
    const queryURL =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
      authKey +
      "&q=" +
      topic +
      "&begin_date=" +
      name +
      "0101&end_date=" +
      city +
      "0101"
      state + 
      " ";
      
    return axios.get(queryURL);
  },

  //saves the surveys

  saveIS: function(surveyIS) {
    return axios.post("/api/surveyRoutes/InstructorSurvey", surveyIS);
  },

  //Gets All Survey Data from DB

  getISAll: function() {
    return axios.get("/api/surveyRoutes/InstructorSurvey");
  },

  //Gets specific Survey Data from DB

  getIS: function(id) {
    return axios.get("/api/surveyRoutes/InstructorSurvey/:" + id);
  },

  //Deletes a specific Survey from DB

  deleteIS: function(id) {
    return axios.delete("/api/surveyRoutes/InstructorSurvey/:" + id);
  },
  // };

  //////////////////////
  //INSTRUCTOR PROFILE//
  //////////////////////

  //USE THE BELOW OPERATIONS TO GET THE DATA FOR THE INSTRUCTOR SEARCH

  // export default {
  // Saves Survey Data to DB
  // check to see if survey is the right parameter
  // can reuse these routes for the booking and search profile data

  saveIP: function(surveyIP) {
    return axios.post("/api/surveyRoutes/InstructorProfile", surveyIP);
  },

  //Gets All Survey Data from DB

  getIPAll: function() {
    return axios.get("/api/surveyRoutes/InstructorProfile");
  },

  //Gets specific Survey Data from DB

  getIP: function(id) {
    return axios.get("/api/surveyRoutes/InstructorProfile/:" + id);
  },

  //Deletes a specific Survey from DB

  deleteIP: function(id) {
    return axios.delete("/api/surveyRoutes/InstructorProfile/:" + id);
  },

  //////////////////////
  ////CLIENT SURVEY/////
  //////////////////////

  // export default {
  // Saves Survey Data to DB
  // check to see if survey is the right parameter

  saveCS: function(surveyCS) {
    return axios.post("/api/surveyRoutes/ClientSurvey", surveyCS);
  },

  //Gets All Survey Data from DB

  getCSAll: function() {
    return axios.get("/api/surveyRoutes/ClientSurvey");
  },

  //Gets specific Survey Data from DB

  getCS: function(id) {
    return axios.get("/api/surveyRoutes/ClientSurvey/:" + id);
  },

  //Deletes a specific Survey from DB

  deleteCS: function(id) {
    return axios.delete("/api/surveyRoutes/ClientSurvey/:" + id);
  },

  //////////////////////
  ////CLIENT PROFILE////
  //////////////////////

  // export default {
  // Saves Survey Data to DB
  // check to see if survey is the right parameter

  saveCP: function(surveyCP) {
    return axios.post("/api/surveyRoutes/ClientProfile", surveyCP);
  },

  //Gets All Survey Data from DB

  getCPAll: function() {
    return axios.get("/api/surveyRoutes/ClientProfile/:");
  },

  //Gets specific Survey Data from DB

  getCP: function(id) {
    return axios.get("/api/surveyRoutes/ClientProfile/:" + id);
  },

  //Deletes a specific Survey from DB

  deleteCP: function(id) {
    return axios.delete("/api/surveyRoutes/ClientProfile/:" + id);
  },

  /////////////////////
  ////////LOGIN////////
  /////////////////////

  //Gets All Survey Data from DB

  getLoginAll: function() {
    return axios.get("/api/surveyRoutes/Login");
  },

  //Gets specific Survey Data from DB

  getLogin: function(id) {
    return axios.get("/api/surveyRoutes/Login/:" + id);
  },

  //Deletes a specific Survey from DB

  deleteLogin: function(id) {
    return axios.delete("/api/surveyRoutes/Login/:" + id);
  }

  ///////////////
  ///BOOKING/////
  ///////////////

  //////////////
  ///SEARCH/////
  //////////////
};

export default API;
