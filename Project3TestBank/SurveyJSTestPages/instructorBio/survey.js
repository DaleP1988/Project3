Survey.Survey.cssType = "bootstrap";

var surveyJSON = {
  title: "Yoga Instructor Profile",
  pages: [
    {
      name: "Yoga Instructor Profile",
      elements: [
        {
          type: "multipletext",
          name: "Contact Information",
          title: "Contact Information",
          items: [
            { name: "Firstname" },
            { name: "Lastname" },
            { name: "Email" },
            { name: "Phone " }
          ],
          itemSize: 16,
          colCount: 2
        },
        {
          type: "file",
          name: "Upload Profile Picture",
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
          name: "question4",
          title: "Instructor Bio: Tell us about yourself "
        },
        {
          type: "comment",
          name: "question5",
          title: "Instructor Bio: Tell us about your training"
        },
        {
          type: "comment",
          name: "question6",
          title:
            "Instructor Bio: Tell us about a transformative teaching experience"
        },
        {
          type: "comment",
          name: "question7",
          title:
            "Instructor Message to Clients: Tell us what you love most about teaching."
        },
        {
          type: "comment",
          name: "question3",
          title:
            "Instructor Message to Clients: What words of wisdom and encouragement do you have to offer clients?"
        },
        {
          type: "file",
          name: "question2",
          title:
            "Drop us a URL to a favorite yoga product you would like to share!",
          maxSize: 0
        }
      ],
      title: "Yoga Instructor Profile"
    }
  ],
  sendResultOnPageNext: true
};

function sendDataToServer(survey) {
  survey.sendResult("785d36d3-9d28-4e7e-8e07-c5d1ba9f158d");
}

ReactDOM.render(
  <Survey.Survey json={surveyJSON} onComplete={sendDataToServer} />,
  document.getElementById("surveyContainer")
);