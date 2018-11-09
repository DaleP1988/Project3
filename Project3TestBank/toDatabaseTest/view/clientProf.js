Survey.Survey.cssType = "bootstrap";

var surveyJSON = {
  title: "Yoga Client Profile",
  pages: [
    {
      name: "Yoga Client Profile",
      elements: [
        {
          type: "multipletext",
          name: "Contact",
          title: "Contact",
          items: [
            { name: "Firstname" },
            { name: "Lastname" },
            { name: "Email" },
            { name: "Phone " },
            { name: "Location (city, state)" }
          ],
          itemSize: 16,
          colCount: 2
        },
        {
          type: "file",
          name: "Photo",
          imageHeight: "200px",
          imageWidth: "300px",
          maxSize: 0
        },
        {
          type: "checkbox",
          name: "question1",
          title:
            "Select the words that best describe your ideal yoga practice (please check all that apply) ",
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
          type: "checkbox",
          name: "question2",
          title:
            "Select the word(s) that best describe the challenges you are facing in your practice.",
          choices: [
            { value: "item1", text: "Too Advanced" },
            { value: "item2", text: "Too Basic" },
            { value: "item3", text: "Don't like the studio" },
            { value: "item4", text: "Injury" },
            { value: "item5", text: "Illness" },
            { value: "item6", text: "Anxiety" },
            { value: "item7", text: "Can't find the right teacher" }
          ],
          colCount: 3
        },
        {
          type: "comment",
          name: "question4",
          title: "Please describe your ideal yoga practice environment"
        },
        {
          type: "comment",
          name: "question3",
          title: "Tell us more about your yoga journey...."
        }
      ],
      title: "Yoga Client Profile"
    }
  ],
  sendResultOnPageNext: true
};

function sendDataToServer(survey) {
  survey.sendResult("bd42385f-45b7-45dd-be8c-2f049f0288c9");
  console.log(survey);
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
  model: survey,
  onComplete: sendDataToServer
});

//get survey object
//post to db
//get from db
// post on profile page
