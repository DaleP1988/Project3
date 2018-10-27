Survey.StylesManager.applyTheme("default");

var json = {
  questions: [
    {
      type: "checkbox",
      name: "car",
      title: "What style of yoga do you practice?",
      isRequired: true,
      hasNone: true,
      colCount: 4,
      choices: [
        "Hatha",
        "Hot Yoga",
        "Vinyasa",
        "Bikram",
        "Iyengar",
        "Viniyoga",
        "Yoga Sculpt",
        "Yoga Fusion"
      ]
    }
  ]
};

window.survey = new Survey.Model(json);

survey.onComplete.add(function(result) {
  //   document.querySelector("#surveyResult").innerHTML =
  //     "result: " + JSON.stringify(result.data);
});

$("#surveyElement").Survey({ model: survey });
