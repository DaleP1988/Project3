import * as Survey from "survey-react";
import "survey-react/survey.css";
import ClientSurvey from "../../pages/ClientSurvey";
import React from "react";
import axios from "axios";
// import $ from "jquery";

class ClientSurveyForm extends React.Component {
  json = {
    title: "Yoga Client Survey",
    pages: [
      {
        name: "Yoga Client Survey",
        elements: [
          {
            type: "multipletext",
            name: "Contact",
            title: "Contact",
            items: [{ name: "Firstname" }, { name: "Lastname" }],
            colCount: 2
          },
          {
            type: "checkbox",
            name: "q1",
            title: "How long have you been practicing yoga?",
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
            name: "q2",
            title:
              "What class level are you most comfortable in?   (please check all that apply)",
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
            name: "q3",
            title: "What style(s) do you prefer? (please check all that apply)",
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
            name: "q4",
            title:
              "Which categories best describe your Yoga Client Profile ? (please check all that apply)",
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
            name: "q5",
            title:
              "Do you attend specialty classes ? (please check all that apply)",
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
            name: "q6",
            title:
              "Do you work with any of the following Professionals or Specialists ? (please check all that apply)",
            choices: [
              { value: "item1", text: "Licensed Physical Therapist" },
              { value: "item2", text: "Licensed Manual Therapist" },
              { value: "item3", text: "Psychiatrist" },
              { value: "item4", text: "Psychologist" },
              { value: "item5", text: "Cranio Sacral Therapist" },
              { value: "item6", text: "Doctor (General Practitioner)" },
              { value: "item7", text: "Doctor (Other Specialty)" },
              { value: "item8", text: "Phd" }
            ],
            colCount: 2
          },
          {
            type: "checkbox",
            name: "q7",
            title:
              "Please check any of the following offerings that interest you as a Yoga Client (please check all that apply)",
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
        title: "Yoga Client Survey"
      }
    ]
  };

  //Define a callback methods on survey complete
  onComplete = (survey, options) => {
    //Write survey results into database
    var DTO = createDTO(survey);

    // DEBUGGING NOTES //
    // doing step into would take you to the method createDTO()
    // step over skips the method and jumps to the next function
    // breakpoint and hit play to skip over a bunch and get right to a new place
    // step over is line by line, never goes into function
    // step into goes into function, then you can go line by line in the function
    // step return goes to end of function and gets out of function (back to line above it)
    // can change things while in the debugger
    // can right click on breakpoint: right click and set condition "for breaking".. could do it for the question
    // var matches = bestMatch(scores);
    // use binding method

    //check in debugger. breakpoint at this object.
    // for control at a point, put a breakpoint at the point (line #).

    var onSubmit = this.props.onSubmit;
    // getting all the properties on submit and assigning to local var
    // above makes sure it is available in the component

    // axios.post("api/clientChoices", DTO).then(function(data) {
    // res.json({ data });
    // alert("");
    // console.log(JSON.stringify(data));
    // bestMatch(data.data);
    // first is response with results.
    // single post both calls and receives.
    // URI syntax for the slashes

    //this will get the match result back from the server
    // the content in then is the receiving part
    //its asynchronous
    //comes back with a "bookmark"
    //one post handles sending and what happens when it comes back

    // CRUD Ops with rest calls
    // v. get
    // to fetch names and info
    // post for creating new client
    // put for change of address (update)
    // delete for removing

    // this is an endpoint
    // data is the var that the instructor data is copied into (that was returned from the server)

    axios.post("api/match", DTO).then(function(data) {
      alert("");
      console.log(data);
      var bestFive = getBestFiveMatches(data);
      onSubmit(bestFive);
      // this is to get data back to the page
      // this function can be declared on the page

      // keep the methods simple. see above.
      // data is new. just created here. holds array of instructors.
      // data gets copied into scores variable in the best match method.
      // });
    });
    console.log(DTO);

    function createDTO(response) {
      console.log("good");
      var survey = response.valuesHash;
      var dto = {
        // Firstname: survey.Contact.Firstname,
        // Lastname: survey.Contact.Lastname,
        q1: survey.q1,
        q2: survey.q2,
        q3: survey.q3,
        q4: survey.q4,
        q5: survey.q5,
        q6: survey.q6,
        q7: survey.q7
      };
      //  dto.forEach(function (question){

      return dto;
    }

    // dto.forEach(function(question) {
    //   var selectedItems = [];
    //   question.find();
    // });

    //     .find("input:checked")
    //     .each(function(i, element) {
    //       selections.push($(this).val());
    //     });
    //   clientSelections[question] = selections;
    // });

    //

    // get the client selections .... in dto?

    //post client selections to server
    //post matches
    // call best match

    //  console.log(clientSelections);

    // need to do the instructor matching...

    function getBestFiveMatches(scores) {
      var bestFive = scores.slice(-5);
      console.log(bestFive);

      // when declaring a function you are not necessary calling it. saying run it sometime, not now.
      // var bestFiveJSON = JSON.stringify(bestFive);
      // sessionStorage.setItem("bestFive", bstFiveJSON);
      return bestFive;
      // onSubmit(bestFive);
    }

    // console.log("Survey results: " + JSON.stringify(survey.data));
  };
  render() {
    var model = new Survey.Model(this.json);
    return <Survey.Survey model={model} onComplete={this.onComplete} />;
  }
}

export default ClientSurveyForm;
