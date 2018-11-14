import axios from "axios";



//////////////////////
//INSTRUCTOR SURVEY//
/////////////////////


export default {
    // Saves Survey Data to DB
    // check to see if survey is the right parameter

 saveIS: function(survey) {
    return axios.post("/api/IS", survey);
  },


//Gets All Survey Data from DB

getISAll: function() {
    return axios.get("/api/IS");
  },

//Gets specific Survey Data from DB

getIS: function(id) {
    return axios.get("/api/IS" + id);
  },

//Deletes a specific Survey from DB


deleteIS: function(id) {
    return axios.delete("/api/IS/" + id);
  }
};



//////////////////////
//INSTRUCTOR PROFILE//
//////////////////////

//USE THE BELOW OPERATIONS TO GET THE DATA FOR THE INSTRUCTOR SEARCH



export default {
    // Saves Survey Data to DB
    // check to see if survey is the right parameter

 saveIP: function(survey) {
    return axios.post("/api/IP", survey);
  },


//Gets All Survey Data from DB

getIPAll: function() {
    return axios.get("/api/IP");
  },

//Gets specific Survey Data from DB

getIP: function(id) {
    return axios.get("/api/IP" + id);
  },

//Deletes a specific Survey from DB


deleteIP: function(id) {
    return axios.delete("/api/IP/" + id);
  }
};




//////////////////////
////CLIENT SURVEY/////
//////////////////////



export default {
    // Saves Survey Data to DB
    // check to see if survey is the right parameter

 saveCS: function(survey) {
    return axios.post("/api/CS", survey);
  },


//Gets All Survey Data from DB

getCSAll: function() {
    return axios.get("/api/CS");
  },

//Gets specific Survey Data from DB

getCS: function(id) {
    return axios.get("/api/CS" + id);
  },

//Deletes a specific Survey from DB


deleteCS: function(id) {
    return axios.delete("/api/CS/" + id);
  }
};




//////////////////////
////CLIENT PROFILE////
//////////////////////




export default {
    // Saves Survey Data to DB
    // check to see if survey is the right parameter

 saveCP: function(survey) {
    return axios.post("/api/CP", survey);
  },


//Gets All Survey Data from DB

getCPAll: function() {
    return axios.get("/api/CP");
  },

//Gets specific Survey Data from DB

getCP: function(id) {
    return axios.get("/api/CP" + id);
  },

//Deletes a specific Survey from DB


deleteCP: function(id) {
    return axios.delete("/api/CP/" + id);
  }
};
