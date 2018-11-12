Survey.Survey.cssType = "bootstrap";

var surveyJSON = {
  title: "Yoga Instructor Profile",
  pages: [
    {
      name: "",
      elements: [
        {
          type: "multipletext",
          name: "Contact",
          title: "Contact",
          items: [
            { name: "Firstname" },
            { name: "Lastname" },
            { name: "Email" },
            { name: "Phone" },
            { name: "Location", placeholder: "City, State" }
          ],
          itemSize: 16,
          colCount: 3
        },
        {
          type: "file",
          name: "Photo",
          title: "Photo",
          imageHeight: "200px",
          imageWidth: "300px",
          maxSize: 0
        },
        {
          type: "checkbox",
          name: "question1",
          title:
            "Select the words that best describe your teaching style (please check all that apply) ",
          choices: [
            { value: "item1", text: "Beginner" },
            { value: "item2", text: "Intermediate" },
            { value: "item3", text: "Advanced" },
            { value: "item4", text: "Hot" },
            { value: "item5", text: "Core Focused" },
            { value: "item6", text: "Cardiovascular" }
          ],
          colCount: 3
        },
        {
          type: "comment",
          name: "question2",
          title: "Instructor Bio: Tell us about yourself "
        },
        {
          type: "comment",
          name: "question3",
          title: "Instructor Bio: Tell us about your teaching background"
        },
        {
          type: "comment",
          name: "question4",
          title:
            "Instructor Bio: Tell us about a transformative teaching experience"
        },
        {
          type: "comment",
          name: "question5",
          title:
            "Instructor Message to Clients: Tell us what you love most about teaching."
        },
        {
          type: "comment",
          name: "question6",
          title:
            "Instructor Message to Clients: What words of wisdom and encouragement do you have to offer clients?"
        },
        {
          type: "text",
          name: "Goodie",
          title: "Show us your favorite yoga goodie! (Paste URL)"
        }
      ]
    }
  ],
  sendResultOnPageNext: true
};

function sendDataToServer(survey) {
  var instructorProf = survey.valuesHash;
  $.post("/api/IP/", instructorProf, function(matches) {
    console.log("great work!");
    // window.location.href = "/test";
    $("#instructorProfileForm").text(JSON.stringify(matches));
    //populate the page with matches
  });
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
  model: survey,
  onComplete: sendDataToServer
});

// function sendDataToServer(survey) {
//   survey.sendResult("785d36d3-9d28-4e7e-8e07-c5d1ba9f158d");
//   console.log(survey);
// }

// var survey = new Survey.Model(surveyJSON);
// $("#surveyContainer").Survey({
//   model: survey,
//   onComplete: sendDataToServer
// });

//NOTES:
// to edit the object subheaders use name. use title for the HTML

//get survey object
//post survey to db
// post to search in db
// put on profile page
//
