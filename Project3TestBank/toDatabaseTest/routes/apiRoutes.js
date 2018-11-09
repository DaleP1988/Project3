var db = require("../models");

const request = require("request");
const axios = require("axios");

module.exports = function(app) {
  


/////////////////////
//////CLIENT SURVEY//
/////////////////////



  //CREATE CLIENT SURVEY RESULT
  // 

 
  app.post("/api/CS", function (req, res) {
    db.clientSurvey.create(req.body).then(function (result) {
      res.json(result);
    })
      .catch(function (err) {
        res.status(400).json(err);
      });
  });

  //UPDATE CLIENT SURVEY RESULT

  

  app.put("/api/CS", function (req, res) {
    db.clientSurvey.update({
      clientName: req.body.clientName,
      q1: req.body.q1,
      q2: req.body.q1,
      q3: req.body.q1,
      q4: req.body.q1,
      q5: req.body.q1,
      q6: req.body.q1,
    }, {
        where: {
          clientId: req.body.clientId
        }
      }).then(function (result) {
        res.json(result);
      })
      .catch(function (err) {
        res.status(400).json(err);
      });
  });



  //FIND/GET CLIENT SURVEY RESULT ...by clientName

  app.get("/api/CS/:clientName", function (req, res) {
    db.User.findOne({
      where: {
        clientName: req.params.clientName
      }
    }).then(function (result) {
      if (result) {
        res.json(result);
      } else {
        res.json(false);
      }
    })
      .catch(function (err) {
        res.status(400).json(err);
      });
  });






/////////////////////
//INSTRUCTOR SURVEY//
/////////////////////



  //CREATE INSTRUCTOR SURVEYS



  app.post("/api/IS", function (req, res) {
    db.instructorSurvey.create(req.body).then(function (result) {
      res.json(result);
    })
      .catch(function (err) {
        res.status(400).json(err);
      });
  });

  //UPDATE INSTRUCTOR 


  app.put("/api/IS", function (req, res) {
    db.instructorSurvey.update({
      instructorName: req.body.instructorName,
      studio: req.body.studio,
      loc: req.body.loc,
      q1: req.body.q1,
      q2: req.body.q1,
      q3: req.body.q1,
      q4: req.body.q1,
      q5: req.body.q1,
      q6: req.body.q1,
    }, {
        where: {
          clientId: req.body.clientId
        }
      }).then(function (result) {
        res.json(result);
      })
      .catch(function (err) {
        res.status(400).json(err);
      });
  });

//make sure to make the clientID


  //dont need to get survey again




/////////////////////
//CLIENT PROFILE/////
/////////////////////

// create client profile

app.post("/api/CP", function (req, res) {
  db.clientProfile.create(req.body).then(function (result) {
    res.json(result);
  })
    .catch(function (err) {
      res.status(400).json(err);
    });
});


// update client profile



app.put("/api/CP", function (req, res) {
  db.clientProfile.update({
    clientName: req.body.clientName,
    email: req.body.email,
    phone: req.body.phone,
    City: req.body.City,
    locState: req.body.locState,
    img: req.body.img,
    q1: req.body.q1,
    q2: req.body.q1,
    q3: req.body.q1,
    q4: req.body.q1
  
  }, {
      where: {
        clientId: req.body.clientId
      }
    }).then(function (result) {
      res.json(result);
    })
    .catch(function (err) {
      res.status(400).json(err);
    });
});



//get client profile



app.get("/api/CS/:clientName", function (req, res) {
  db.User.findOne({
    where: {
      clientName: req.params.clientName
    }
  }).then(function (result) {
    if (result) {
      res.json(result);
    } else {
      res.json(false);
    }
  })
    .catch(function (err) {
      res.status(400).json(err);
    });
});



//////////////////////
//INSTRUCTOR PROFILE//
//////////////////////

//CREATE INSTRUCTOR PROFILE

app.post("/api/IP", function (req, res) {
  db.instructorProfile.create(req.body).then(function (result) {
    res.json(result);
  })
    .catch(function (err) {
      res.status(400).json(err);
    });
});



//UPDATE INSTRUCTOR PROFILE

app.put("/api/IP", function (req, res) {
  db.instructorProfile.update({
    instructorName: req.body.clientName,
    email: req.body.email,
    phone: req.body.phone,
    loc: req.body.loc,
    img: req.body.img,
    q1: req.body.q1,
    q2: req.body.q2,
    q3: req.body.q3,
    q4: req.body.q4,
    q5: req.body.q5,
    q6: req.body.q6,
    q7: req.body.q7
  
  }, {
      where: {
        clientId: req.body.clientId
      }
    }).then(function (result) {
      res.json(result);
    })
    .catch(function (err) {
      res.status(400).json(err);
    });
});


//GET INSTRUCTOR PROFILE



app.get("/api/IP/:instructorName", function (req, res) {
  db.User.findOne({
    where: {
      instructorName: req.params.instructorName
    }
  }).then(function (result) {
    if (result) {
      res.json(result);
    } else {
      res.json(false);
    }
  })
    .catch(function (err) {
      res.status(400).json(err);
    });
});



//////////////////////
/////////SEARCH///////
//////////////////////

//CREATE SEARCH

app.post("/api/search", function (req, res) {
  db.search.create(req.body).then(function (result) {
    res.json(result);
  })
    .catch(function (err) {
      res.status(400).json(err);
    });
});


//UPDATE SEARCH


app.put("/api/search", function (req, res) {
  db.search.update({
    instructorName: req.body.clientName,
    email: req.body.email,
    phone: req.body.phone,
    city: req.body.city,
    ste: req.body.ste,
    img: req.body.img
  
  }, {
      where: {
        insId: req.body.instId
      }
    }).then(function (result) {
      res.json(result);
    })
    .catch(function (err) {
      res.status(400).json(err);
    });
});



//GET INSTRUCTORS FROM SEARCH 


app.get("/api/search/:instructorName", function (req, res) {
  db.User.findOne({
    where: {
      instructorName: req.params.instructorName
    }
  }).then(function (result) {
    if (result) {
      res.json(result);
    } else {
      res.json(false);
    }
  })
    .catch(function (err) {
      res.status(400).json(err);
    });
});


