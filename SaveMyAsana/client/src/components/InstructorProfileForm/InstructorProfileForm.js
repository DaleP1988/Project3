import * as Survey from "survey-react";
import "survey-react/survey.css";
import React from "react";
// import API from "";
import axios from "axios";
// import $ from "jquery";

class InstructorProfileForm extends React.Component {
  json = {
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

  onComplete = (survey, options) => {
    var DTO = createDTO(survey);

    var instructorProfileSubmit = this.props.instructorProfileSubmit;

    axios.post("api/instructorProfile", DTO).then(function(data) {
      alert("");
      console.log(data);
      instructorProfileSubmit(data);
      // this is to get data back to the page
      // this function can be declared on the page

      // keep the methods simple. see above.
      // data is new. just created here. holds array of instructors.
      // data gets copied into scores variable in the best match method.
      // });
    });
    console.log(DTO);

    function createDTO(survey) {
      var dto = {
        Firstname: survey.Contact.Firstname,
        Lastname: survey.Contact.Lastname,
        studio: survey.Contact.name.Studio,
        loc: survey.Contact.name.Location,
        q1: survey.question1,
        q2: survey.question2,
        q3: survey.question3,
        q4: survey.question4,
        q5: survey.question5,
        q6: survey.question6,
        q7: survey.question7
      };

      return dto;
    }
  };

  //Define a callback methods on survey complete

  // function finale(){

  //   //Write survey results into database
  //   console.log("Survey results: " + JSON.stringify(survey.data));

  render() {
    //Create the model and pass it into react Survey component
    //You may create survey model outside the render function and use it in your App or component
    //The most model properties are reactive, on their change the component will change UI when needed.

    var model = new Survey.Model(this.json);
    return <Survey.Survey model={model} onComplete={this.onComplete} />;

    //     //You may pass model properties directly into component or set it into model
    //     // <Survey.Survey model={model} mode="display"/>
    //     //or
    //     // model.mode="display"
    //     // <Survey.Survey model={model}/>
    //     // You may change model properties outside render function.
    //     //If needed react Survey Component will change its behavior and change UI.
  }
}

export default InstructorProfileForm;
