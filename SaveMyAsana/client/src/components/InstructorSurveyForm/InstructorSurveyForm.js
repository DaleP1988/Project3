import * as Survey from "survey-react";
import "survey-react/survey.css";
import React from "react";
// import API from "";
// import $ from "jquery";

class InstructorSurveyForm extends React.Component {
  json = {
    title: "Yoga Instructor Survey",
    pages: [
      {
        name: "",
        elements: [
          {
            type: "multipletext",
            name: "Contact",
            title: "Contact",
            items: [
              { name: "Firstname", placeholder: "First name" },
              { name: "Lastname", placeholder: "Last name" },
              { name: "Studio" },
              { name: "City" },
              { name: "Location" }
            ],
            colCount: 2
          },
          {
            type: "checkbox",
            name: "question1",
            title: "How long have you been teaching yoga?",
            isRequired: true,
            choices: [
              { value: "item1", text: "0 -1 year" },
              { value: "item2", text: "1-5 years" },
              { value: "item3", text: "5-10 years" },
              { value: "item4", text: "10+ years" }
            ],
            colCount: 4
          },
          {
            type: "checkbox",
            name: "question2",
            title: "What levels do you teach? (please check all that apply)",
            choices: [
              { value: "item1", text: "Introductory" },
              { value: "item2", text: "Beginner" },
              { value: "item3", text: "Intermediate" },
              { value: "item4", text: "Advanced" },
              { value: "item5", text: "Specialty" },
              { value: "item6", text: "Rehabilitative" }
            ],
            colCount: 4
          },
          {
            type: "checkbox",
            name: "question3",
            title: "What styles do you teach? (please check all that apply)",
            choices: [
              { value: "item1", text: "Vinyasa Flow" },
              { value: "item2", text: "Hatha" },
              { value: "item3", text: "Iyengar" },
              { value: "item4", text: "Viniyoga" },
              { value: "item5", text: "Core Yoga" },
              { value: "item6", text: "Yoga Sculpt" },
              { value: "item7", text: "Restorative" },
              { value: "item8", text: "Bikram" }
            ],
            colCount: 4
          },
          {
            type: "checkbox",
            name: "question4",
            title:
              "What special populations have you worked with (either privately or in group settings)?",
            choices: [
              { value: "item1", text: "Youth (5 - 12)" },
              { value: "item2", text: "Teens (13 - 19)" },
              { value: "item3", text: "Elite Athletes" },
              { value: "item4", text: "Dancers" },
              { value: "item5", text: "Injury: feet" },
              { value: "item6", text: "Injury: ankle" },
              { value: "item7", text: "Injury: knee" },
              { value: "item8", text: "Injury: spinal" },
              { value: "item9", text: "Injury: shoulder" },
              { value: "item10", text: "Injury: wrist" },
              { value: "item11", text: "condition: bone" },
              { value: "item12", text: "condition: arthritis" },
              { value: "item13", text: "condition: inflammatory" },
              { value: "item14", text: "condition: anxiety" },
              { value: "item15", text: "condition: heart" },
              { value: "item16", text: "illness: cancer" },
              { value: "item17", text: "Pre-Natal" },
              { value: "item18", text: "Post - Natal" }
            ],
            colCount: 3
          },
          {
            type: "checkbox",
            name: "question5",
            title:
              "What specialty training or certifications do you have? (please check all that apply)",
            choices: [
              { value: "item1", text: "Yoga for Kids" },
              { value: "item2", text: "Yoga for Teens" },
              { value: "item3", text: "Yoga for Elite Athletes" },
              { value: "item4", text: "Yoga for Dancers" },
              { value: "item5", text: "Pre-Natal Yoga" },
              { value: "item6", text: "Post-Natal Yoga" },
              { value: "item7", text: "Yoga for Spine Health" },
              { value: "item8", text: "Restorative Yoga" },
              { value: "item9", text: "Core Yoga" },
              { value: "item10", text: "Geriatric Yoga" },
              { value: "item11", text: "Yoga for Rehabilitation" },
              { value: "item12", text: "Yoga for 12 Step Recovery" },
              { value: "item13", text: "Yoga for Inflammatory Conditions" },
              { value: "item14", text: "Yoga for Healing from Trauma" }
            ],
            colCount: 2
          },
          {
            type: "checkbox",
            name: "question6",
            title:
              "What advanced training (academic or professional) do you have? (please check all that apply)",
            choices: [
              { value: "item1", text: "Licensed Physical Therapist" },
              { value: "item2", text: "Licensed Manual Therapist" },
              { value: "item3", text: "None" },
              { value: "item4", text: "Psychology" },
              { value: "item5", text: "Cranio Sacral Therapist" },
              { value: "item6", text: "Doctor (General Practitioner)" },
              { value: "item7", text: "Doctor (Other Specialty)" },
              { value: "item8", text: "Phd" }
            ],
            colCount: 2
          },
          {
            type: "checkbox",
            name: "question7",
            title:
              "In addition to teaching classes, I offer:    (please check all that apply) ",
            choices: [
              { value: "item1", text: "Workshops" },
              { value: "item2", text: "In-Home Sessions" },
              { value: "item3", text: "Retreats" },
              { value: "item4", text: "Lectures" },
              { value: "item5", text: "Destination Classes/Retreats" },
              { value: "item6", text: "Teacher Trainings" }
            ],
            colCount: 2
          }
        ],
        title: "Yoga Instructor Survey"
      }
    ]
  };

  onComplete = (survey, options) => {
    var DTO = createDTO(survey);
  };

  createDTO = survey => {
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
  };

  //Define a callback methods on survey complete
  onComplete(survey, options) {
    //Write survey results into database
    console.log("Survey results: " + JSON.stringify(survey.data));
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

export default InstructorSurveyForm;
