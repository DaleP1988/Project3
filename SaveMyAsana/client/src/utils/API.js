import axios from "axios";

//////////////////////
//INSTRUCTOR SURVEY//
/////////////////////

// Saves Survey Data to DB
// check to see if survey is the right parameter
//passes in the model
// check logout and userData
//where do the ends of the URLs come from?

const API = {
  //saves the surveys

  saveIS: function(surveyIS) {
    return axios.post("/api/surveyRoutes/IS", surveyIS);
  },

  //Gets All Survey Data from DB

  getISAll: function() {
    return axios.get("/api/surveyRoutes/IS");
  },

  //Gets specific Survey Data from DB

  getIS: function(id) {
    return axios.get("/api/surveyRoutes/IS" + id);
  },

  //Deletes a specific Survey from DB

  deleteIS: function(id) {
    return axios.delete("/api/surveyRoutes/IS/" + id);
  },
  // };

  //////////////////////
  //INSTRUCTOR PROFILE//
  //////////////////////

  //USE THE BELOW OPERATIONS TO GET THE DATA FOR THE INSTRUCTOR SEARCH

  // export default {
  // Saves Survey Data to DB
  // check to see if survey is the right parameter

  saveIP: function(surveyIP) {
    return axios.post("/api/surveyRoutes/IP", surveyIP);
  },

  //Gets All Survey Data from DB

  getIPAll: function() {
    return axios.get("/api/surveyRoutes/IP");
  },

  //Gets specific Survey Data from DB

  getIP: function(id) {
    return axios.get("/api/surveyRoutes/IP" + id);
  },

  //Deletes a specific Survey from DB

  deleteIP: function(id) {
    return axios.delete("/api/surveyRoutes/IP/" + id);
  },

  //////////////////////
  ////CLIENT SURVEY/////
  //////////////////////

  // export default {
  // Saves Survey Data to DB
  // check to see if survey is the right parameter

  saveCS: function(surveyCS) {
    return axios.post("/api/surveyRoutes/CS", surveyCS);
  },

  //Gets All Survey Data from DB

  getCSAll: function() {
    return axios.get("/api/surveyRoutes/CS");
  },

  //Gets specific Survey Data from DB

  getCS: function(id) {
    return axios.get("/api/surveyRoutes/CS" + id);
  },

  //Deletes a specific Survey from DB

  deleteCS: function(id) {
    return axios.delete("/api/surveyRoutes/CS/" + id);
  },

  //////////////////////
  ////CLIENT PROFILE////
  //////////////////////

  // export default {
  // Saves Survey Data to DB
  // check to see if survey is the right parameter

  saveCP: function(surveyCP) {
    return axios.post("/api/surveyRoutes/CP", surveyCP);
  },

  //Gets All Survey Data from DB

  getCPAll: function() {
    return axios.get("/api/surveyRoutes/CP");
  },

  //Gets specific Survey Data from DB

  getCP: function(id) {
    return axios.get("/api/surveyRoutes/CP" + id);
  },

  //Deletes a specific Survey from DB

  deleteCP: function(id) {
    return axios.delete("/api/surveyRoutes/CP/" + id);
  }
};

export default API;
