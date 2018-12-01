import React from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import axios from "axios";
// import API from "../../";
// import $ from "jquery";

export default class ClientProfileForm extends React.Component {
  json = {
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
              { name: "Phone" },
              { name: "Location", placeholder: "(city, state)" }
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
            name: "question3",
            title: "Please describe your ideal yoga practice environment"
          },
          {
            type: "comment",
            name: "question4",
            title: "Tell us more about your yoga journey...."
          }
        ],
        title: "Yoga Client Profile"
      }
    ]
  };

  // createDTO = survey => {
  //   var dto = {
  //     Firstname: survey.Contact.Firstname,
  //     Lastname: survey.Contact.Lastname,
  //     email: survey.Contact.Email,
  //     phone: survey.Contact.Phone,
  //     locState: survey.Location,
  //     img: survey.Photo.content,
  //     q1: survey.question1,
  //     q2: survey.question2,
  //     q3: survey.question3,
  //     q4: survey.question4
  //   };

  //   return dto;
  // };

  //Define a callback methods on survey complete
  onComplete(survey, options) {
    var DTO = createDTO(survey);
    var clientProfileSubmit = this.props.clientProfileSubmit;
    finale();
    //Write survey results into database

    axios.post("api/clientProfile", DTO).then(function(data) {
      alert("");
      console.log(data);
      clientProfileSubmit(data);
    });

    console.log(DTO);

    //bring back the finale function
    //add the backend transfer info
    //check anuj's work
    // get the slack from justin

    function createDTO(survey) {
      var dto = {
        Firstname: survey.Contact.Firstname,
        Lastname: survey.Contact.Lastname,
        Email: survey.Contact.name.Studio,
        Phone: survey.Contact.name.Location,
        Location: survey.Contact.name.Studio,
        q1: survey.question1,
        q2: survey.question2,
        q3: survey.question3,
        q4: survey.question4
        // q5: survey.question5,
        // q6: survey.question6,
        // q7: survey.question7
      };

      return dto;
    }

    function finale() {
      console.log("Survey results: " + JSON.stringify(survey.data));
    }
  }

  render() {
    var model = new Survey.Model(this.json);
    return <Survey.Survey model={model} onComplete={this.onComplete} />;
  }
}

//API.saveSurvey function will be called here.....
//function defined in API.js
//(see saved book)

//Create the model and pass it into react Survey component
//You may create survey model outside the render function and use it in your App or component
//The most model properties are reactive, on their change the component will change UI when needed.

/*
  //The alternative way. react Survey component will create survey model internally
  return (<Survey.Survey json={this.json} onComplete={this.onComplete}/>);
  */
//You may pass model properties directly into component or set it into model
// <Survey.Survey model={model} mode="display"/>
//or
// model.mode="display"
// <Survey.Survey model={model}/>
// You may change model properties outside render function.
//If needed react Survey Component will change its behavior and change UI.
