import React from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
// import API from "../../";

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

  createDTO = survey => {
    var dto = {
      Firstname: survey.Contact.Firstname,
      Lastname: survey.Contact.Lastname,
      email: survey.Contact.Email,
      phone: survey.Contact.Phone,
      locState: survey.Location,
      img: survey.Photo.content,
      q1: survey.question1,
      q2: survey.question2,
      q3: survey.question3,
      q4: survey.question4
    };

    return dto;
  };

  //Define a callback methods on survey complete
  onComplete(survey, options) {
    //Write survey results into database
    console.log("Survey results: " + JSON.stringify(survey.data));

    //API.saveSurvey function will be called here.....
    //function defined in API.js
    //(see saved book)
  }

  render() {
    //Create the model and pass it into react Survey component
    //You may create survey model outside the render function and use it in your App or component
    //The most model properties are reactive, on their change the component will change UI when needed.

    var model = new Survey.Model(this.json);
    return <Survey.Survey model={model} onComplete={this.onComplete} />;
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
  }
}