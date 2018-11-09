//////////////////////////////
//update instructorsurvey/////
/////////////////////////////

// // update database

var instructorId = $(this);
var surveyData = survey.Class.classes.valuesHash;
var ID = surveyData.___;
var Name = surveyData.Contact.Firstname + surveyData.Contact.Lastname;
var Studio = surveyData.Contact.Studio;
var Location = surveyData.Contact.Location;
var q1 = surveyData.question1;
var q2 = surveyData.question2;
var q3 = surveyData.question3;
var q4 = surveyData.question4;
var q5 = surveyData.question5;
var q6 = surveyData.question6;

$("#is-btn").on("click", function instructorSurveySubmit() {
  //create newCS object to send to the database
  var newIS = {
    insId: ID,
    instructorName: Name,
    studio: Studio,
    loc: Location,
    q1: q1,
    q2: q2,
    q4: q3,
    q5: q4,
    q6: q5
  };

  console.log(newIS);
  submitCS(newIS);
  //make sure the method below will post to db
  //
});

//add new CS to db
function submitIS(newIS) {
  $.post("/api/IS/", newIS, function() {
    window.location.href = "/iSurvey";
  });
}

//////////////////////////
//update clientprof/////
//////////////////////////

//update the survey to reflect whats in the obj

var clientId = $(this);
var surveyData = survey.Class.classes.valuesHash;
var ID = surveyData.___;
var Name = surveyData.Contact.Firstname + surveyData.Contact.Lastname;
var Email = surveyData.Contact.Email;
var Phone = surveyData.Contact.Phone;
var City = surveyData.Contact.City;
var locState = surveyData.Contact.Location;
var image = surveyData.Photo.____;
var q1 = surveyData.question1;
var q2 = surveyData.question2;
var q3 = surveyData.question3;
var q4 = surveyData.question4;

$("#cp-btn").on("click", function clientProfileSubmit() {
  //create newCS object to send to the database
  var newIS = {
    clientId: ID,
    clientName: Name,
    email: Email,
    phone: Phone,
    city: City,
    locState: locState,
    img: image,
    q1: q1,
    q2: q2,
    q3: q3,
    q4: q4
  };

  console.log(newCP);
  submitCP(newCP);
  //make sure the method below will post to db
  //
});

//add new CS to db
function submitCP(newCP) {
  $.post("/api/CP/", newCP, function() {
    window.location.href = "/cProfile";
  });
}

////////////////////////////
//update instructorprof/////
////////////////////////////

//update the survey to reflect whats in the obj

var instructorId = $(this);
var surveyData = survey.Class.classes.valuesHash;
var ID = surveyData.___;
var Name = surveyData.Contact.Firstname + surveyData.Contact.Lastname;
var Email = surveyData.Contact.Email;
var Phone = surveyData.Contact.Phone;
var locState = surveyData.Contact.Location;
var image = surveyData.Photo.____;
//need to get the right image property.....
//check the object again
var q1 = surveyData.question1;
var q2 = surveyData.question2;
var q3 = surveyData.question3;
var q4 = surveyData.question4;
var q5 = surveyData.question5;
var q6 = surveyData.question6;
var q7 = surveyData.question7;

$("#ip-btn").on("click", function instructorProfileSubmit() {
  //create newCS object to send to the database
  var newIS = {
    insId: ID,
    instructorName: Name,
    email: Email,
    phone: Phone,
    city: City,
    loc: locState,
    img: image,
    q1: q1,
    q2: q2,
    q3: q3,
    q4: q4,
    q5: q5,
    q6: q6,
    q7: q7,
  };

  console.log(newIP);
  submitIP(newIP);
  //make sure the method below will post to db
  window.location.href = "/iProfile";
});
}

//////////////////////////
//update clientsurvey/////
//////////////////////////

//figure out how to assign a unique id, use courier methods?

//check that the api routes match
//finish the JS (on survey.js to get the object)
//use for survey matching
//

// // update database

var clientId = $(this);
var surveyData = survey.Class.classes.valuesHash;
var ID = surveyData.___;
var Name = surveyData.Contact.Firstname + surveyData.Contact.Lastname;
var q1 = surveyData.question1;
var q2 = surveyData.question2;
var q3 = surveyData.question3;
var q4 = surveyData.question4;
var q5 = surveyData.question5;
var q6 = surveyData.question6;

$("#cs-btn").on("click", function clientSurveySubmit() {
  //create newCS object to send to the database
  var newCS = {
    clientId: ID,
    clientName: Name,
    q1: q1,
    q2: q2,
    q4: q3,
    q5: q4,
    q6: q5
  };

  console.log(newCS);
  submitCS(newCS);
  //make sure the method below will post to db
  //
});

//add new CS to db
function submitCS(newCS) {
  $.post("/api/CS/", newCS, function() {
    window.location.href = "/cSurvey";
  });
}








///////////////////
//BUTTONS//////////
///////////////////


///////////////////
//VIEW SCHEDULE////
//FROM matchModal//
///////////////////



//main page


//check pages that have a view sched button
//match modal

$("#viewSched").on("click", function viewSched() {
    //create newCS object to send to the database
    window.location.href = "";
    $("#").empty();


    //AJAX call with the instructor name
    //fill the view schedule/booking page

    };
 
    

//client survey




//instructor search


// client profile



// instructor profile




///////////////////
/////BUTTONS///////
///////////////////



///////////////////
////NAVIGATION/////
///////////////////







////////////////////
////SEARCH//////////
////////////////////



var instructorId = $(this);
var surveyData = survey.Class.classes.valuesHash;
var ID = surveyData.___;
var Name = surveyData.Contact.Firstname + surveyData.Contact.Lastname;
var Email = surveyData.Contact.Email;
var Phone = surveyData.Contact.Phone;
var City = surveyData.Contact.City;
var locState = surveyData.Contact.Location;
var image = surveyData.Photo.____;


$("#vp-btn").on("click", function searchSubmit() {
  //create newCS object to send to the database
  var newSearch = {
    insId: ID,
    instructorName: Name,
    email: Email,
    phone: Phone,
    city: City,
    ste: locState,
    img: image,
  };

  console.log(newIP);
  submitIP(newIP);
  //make sure the method below will post to db
  window.location.href = "/search";
});
}

//nneed to modify the file paths to reflect the window location


//page redirects + buttons
//data to db
//survey match with the form content
